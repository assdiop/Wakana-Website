import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-video-banner',
  standalone: true,
  templateUrl:'./video-banner.component.html' ,
  styleUrls:['./video-banner.component.css'],
  animations: [ // L'animation est directement incluse ici
    trigger('fadeInSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-50px)' }),  // Position initiale (invisible, légèrement décalé en haut)
        animate('1.2s ease-out', style({ opacity: 1, transform: 'translateY(0)' })) // Animation en douceur
      ])
    ])
  ]
})
export class VideoBannerComponent {


}
