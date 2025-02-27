import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-video-banner',
  standalone: true,
  templateUrl: './video-banner.component.html',
  styleUrls: ['./video-banner.component.css'],
  animations: [
    trigger('fadeInSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-50px)' }),
        animate('1.2s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class VideoBannerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  private intersectionObserver!: IntersectionObserver;
  private playPromise: Promise<void> | null = null;

  ngAfterViewInit() {
    this.setupVideoAutoplay();
    this.setupIntersectionObserver();
    this.addVisibilityChangeListener();
  }

  ngOnDestroy() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
  }

  private setupVideoAutoplay() {
    // Configurer la vidéo une fois qu'elle est chargée
    this.videoElement.nativeElement.addEventListener('loadedmetadata', () => {
      this.attemptPlay();
    });

    // S'assurer que la vidéo est prête à jouer
    if (this.videoElement.nativeElement.readyState >= 2) {
      this.attemptPlay();
    }
  }

  private setupIntersectionObserver() {
    // Observer pour détecter quand la vidéo est visible à l'écran
    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.attemptPlay();
        } else {
          this.pauseVideo();
        }
      });
    }, { threshold: 0.1 });

    this.intersectionObserver.observe(this.videoElement.nativeElement);
  }

  private addVisibilityChangeListener() {
    // Gérer le changement de visibilité de la page
    document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
  }

  private handleVisibilityChange() {
    if (document.visibilityState === 'visible') {
      this.attemptPlay();
    } else {
      this.pauseVideo();
    }
  }

  private attemptPlay() {
    const video = this.videoElement.nativeElement;

    // Vérifier si la vidéo est en pause et si elle peut être lue
    if (video && video.paused) {
      // Utiliser une promesse pour gérer la lecture de la vidéo
      this.playPromise = video.play();

      if (this.playPromise !== undefined) {
        this.playPromise
          .then(() => {
            // La lecture a réussi
            console.log('Lecture vidéo démarrée avec succès');
          })
          .catch(error => {
            // La lecture automatique a échoué
            console.error('Erreur de lecture vidéo:', error);

            // Ajouter un gestionnaire de clic pour les navigateurs qui bloquent l'autoplay
            this.setupUserInteractionPlayback();
          });
      }
    }
  }

  private pauseVideo() {
    const video = this.videoElement.nativeElement;

    // S'assurer que la promesse de lecture précédente est terminée avant de mettre en pause
    if (this.playPromise !== null) {
      this.playPromise
        .then(() => {
          video.pause();
        })
        .catch(() => {
          // Ignorer les erreurs de la promesse précédente
        });
    } else {
      video.pause();
    }
  }

  private setupUserInteractionPlayback() {
    // Solution de secours pour les navigateurs qui bloquent l'autoplay
    const handleUserInteraction = () => {
      this.attemptPlay();
      // Supprimer les écouteurs après la première interaction
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);
  }
}
