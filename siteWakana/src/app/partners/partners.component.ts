// components/partners/partners.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  standalone: true,
  template: `
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          @for (partner of partners; track partner.name) {
            <img 
              [src]="partner.logo" 
              [alt]="partner.name"
              class="h-12 md:h-16 object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
          }
        </div>
      </div>
    </section>
  `
})
export class PartnersComponent {
  partners = [
    { name: 'UNHCR', logo: 'assets/images/unhcr-logo.png' },
    { name: 'Fergisum', logo: 'assets/images/fergisum-logo.png' },
    { name: 'Pfizer', logo: 'assets/images/pfizer-logo.png' },
    { name: 'JSA', logo: 'assets/images/jsa-logo.png' }
  ];
}