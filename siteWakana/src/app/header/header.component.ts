import {Component, HostListener,OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {fromEvent} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styles: [`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 50;
    }
  `]
})
export class HeaderComponent  implements  OnInit {
  //utlisation des signals pour gerer le menu burger
  isMobileMenuOpen = signal(false);
  scrolled = signal(false);

  toggleMobileMenu() {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
  }

  //fonction pour fermer le menu
  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }

  ngOnInit() {
    // Écoute l'événement de scroll pour changer l'état de `scrolled`
    fromEvent(window, 'scroll')
      // .pipe(takeUntilDestroyed(this))
      .subscribe(() => {
        this.scrolled.set(window.scrollY > 50);
      });
  }

  //fonction pour gerer le lien entre scroll entre les composants
  navigateToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // ngOnDestroy() {
  //   // Pas besoin de désinscrire manuellement grâce à `takeUntilDestroyed()`
  // }
}






