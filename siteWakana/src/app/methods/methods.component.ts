import { Component } from '@angular/core';

interface Service {
  name: string;
  iconClass: string;
}

@Component({
  selector: 'app-methods',
  standalone: true,
  template: `
    <!-- Ajout du CDN Font Awesome dans index.html -->
    <div class="min-h-screen relative text-white">
      <!-- Image de fond -->
      <div class="absolute inset-0">
        <img 
          src="https://img.freepik.com/photos-premium/jeune-femme-lunettes-utilise-tablette-dans-bureau-moderne_659722-3558.jpg?w=740"
          alt="Background" 
          class="w-full h-full object-cover"
        >
        <div class="absolute inset-0 bg-black/70"></div>
      </div>

      <!-- Contenu principal -->
      <div class="relative z-10 container mx-auto px-6 py-12 flex">
        <!-- Section texte (côté gauche) -->
        <div class="w-1/2 pr-12">
          <div class="mb-2">
            <span class="text-pink-500 text-sm uppercase tracking-wider">Méthode</span>
          </div>
          <h1 class="text-5xl font-bold leading-tight mb-8">
            Approche sectorielle centrée sur le métier de nos clients
          </h1>
          <p class="text-xl text-gray-300 leading-relaxed">
            Obtenez bien plus qu'un simple service ou produit,
            obtenez une solution sur mesure qui répond à vos
            besoins spécifiques
          </p>
        </div>

        <!-- Grille de services (côté droit) -->
        <div class="w-1/2">
          <div class="grid grid-cols-4 gap-0.5 bg-blue-900/20">
            @for (service of services; track service.name) {
              <div class="group relative p-6 bg-black/80 transition-all duration-300 hover:bg-blue-900/20 border border-transparent hover:border-blue-500/30">
                <div class="flex flex-col items-center text-center space-y-3">
                  <div class="p-4">
                    <i class="{{service.iconClass}} text-2xl text-blue-400 group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                  <span class="text-sm font-medium text-blue-400">{{ service.name }}</span>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  `
})
export class MethodsComponent {
  services: Service[] = [
    { name: 'Audit', iconClass: 'fas fa-search' },
    { name: 'Conseil', iconClass: 'fas fa-users' },
    { name: 'Sécurité', iconClass: 'fas fa-shield' },
    { name: 'Gouvernance', iconClass: 'fas fa-people-group' },
    { name: 'Développement', iconClass: 'fas fa-code' },
    { name: 'CRM', iconClass: 'fas fa-cube' },
    { name: 'Méthodologie', iconClass: 'fas fa-sitemap' },
    { name: 'Qualité', iconClass: 'fas fa-gem' },
    { name: 'Technologie Web', iconClass: 'fas fa-laptop-code' },
    { name: 'Bases de données', iconClass: 'fas fa-database' },
    { name: 'Data Warehouse', iconClass: 'fas fa-warehouse' },
    { name: 'Business Intelligence', iconClass: 'fas fa-brain' }
  ];
}