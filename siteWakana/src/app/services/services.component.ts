import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl:'./services.component.html',
  styleUrls:['./services.component.css']

})
export class ServicesComponent {
  services = [
    {
      title: 'Audit – Conseil',
      description: 'Conseil et audit en transformation digitale.',
      image: 'assets/images/img6.jpg'
    },
    {
      title: 'Ingénierie IT',
      description: 'Solutions IT adaptées à votre entreprise.',
      image: 'assets/images/ingenerie.jpg'
    },
    {
      title: 'Infrastructures Réseaux et Sécurité',
      description: 'Sécurisation et optimisation de vos réseaux.',
      image: 'assets/images/reseau.avif'
    },
    {
      title: 'Helpdesk',
      description: 'Assistance et support technique rapide.',
      image: 'assets/images/helpdesk.avif'
    }
  ];
}
