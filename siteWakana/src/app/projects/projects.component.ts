import { Component } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

interface ProjetsCard {
  id: string;
  title: string;
  items: string[];
  iconClass: string;
  bgColor: string;
  numberColor: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <div class="container mx-auto px-6 py-12">
      <h2 class="text-3xl md:text-4xl font-bold text-primary text-center mb-12" [@fadeIn]>
        Nos projets
      </h2>

      <!-- Responsive Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        @for (card of serviceCards; track card.id) {
          <div
            class="relative bg-white rounded-lg p-6 shadow-lg border border-gray-200 min-h-[400px] transition-all duration-300 hover:shadow-xl"
            [@fadeIn]
          >
            <!-- Numéro avec forme -->
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 flex items-center">
              <div class="relative">
                <div [class]="'w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold ' + card.numberColor">
                  {{ card.id }}
                </div>
              </div>
            </div>

            <!-- Contenu de la carte -->
            <div class="mt-10 text-center">
              <h2 class="text-[#2A3342] text-xl font-bold mb-6">{{ card.title }}</h2>
              <ul class="space-y-4 text-sm">
                @for (item of card.items; track item) {
                  <li class="flex items-start justify-center text-gray-700 transition-all duration-300 hover:translate-x-1">
                    <span class="text-purple-600 mr-2 mt-1">✦</span>
                    <span>{{ item }}</span>
                  </li>
                }
              </ul>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  animations: [
    trigger('fadeIn', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(20px)'
      })),
      transition('void => *', [
        animate('500ms ease-out', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ])
    ])
  ],
})

export class ProjectsComponent {
  serviceCards: ProjetsCard[] = [
    {
      id: '01',
      title: 'SÉCURITÉ',
      items: [
        'Gestion du Fichier Electoral du Sénégal (DGE)',
        'Gestion des cartes d\'Identité Nationale (CNI)',
        'Gestion des cartes professionnelles (HCR)'
      ],
      iconClass: 'fas fa-shield-alt',
      bgColor: 'text-pink-300',
      numberColor: 'bg-pink-300'
    },
    {
      id: '02',
      title: 'APPLICATIONS',
      items: [
        'Système de Lecture et d\'Authentification Biométrique (SYLAB)',
        'SYLAB : CNDS - IPRES'
      ],
      iconClass: 'fas fa-network-wired',
      bgColor: 'text-purple-700',
      numberColor: 'bg-purple-700'
    },
    {
      id: '03',
      title: 'SANTÉ',
      items: [
        'Agence de la Couverture de Maladie Universelle (CMU)'
      ],
      iconClass: 'fas fa-heartbeat',
      bgColor: 'text-purple-600',
      numberColor: 'bg-purple-600'
    },
    {
      id: '04',
      title: 'FINANCE',
      items: [
        'Exploitation et Maintenance du logiciel de gestion de la Solde - Ministère de l\'Economie et des Finances',
        'Refonte du Système de Gestion des Salaires des Etablissements Publics (DTAI)'
      ],
      iconClass: 'fas fa-coins',
      bgColor: 'text-purple-700',
      numberColor: 'bg-purple-700'
    }
  ];
}
