import { Component } from '@angular/core';

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
    <div class="container mx-auto p-6">
      <div class="grid grid-cols-4 gap-6">
        @for (card of serviceCards; track card.id) {
          <div class="relative bg-white rounded-lg p-6 shadow-lg border border-gray-200 min-h-[400px]">
            <!-- Numéro avec forme -->
            <div class="absolute -top-4 -left-4 flex items-center">
              <div class="relative">
                <div [class]="'w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold ' + card.numberColor">
                  {{ card.id }}
                </div>
                <div [class]="'absolute -right-6 -bottom-3 w-16 h-8 transform rotate-45 ' + card.bgColor"></div>
              </div>
            </div>

            <!-- Contenu de la carte -->
            <div class="mt-12">
              <!-- Titre -->
              <h2 class="text-[#2A3342] text-2xl font-bold mb-8">{{ card.title }}</h2>

              <!-- Liste des éléments -->
              <ul class="space-y-4">
                @for (item of card.items; track item) {
                  <li class="flex items-start">
                    <span class="text-purple-600 mr-2 mt-1">✦</span>
                    <span class="text-gray-700 text-sm leading-tight">{{ item }}</span>
                  </li>
                }
              </ul>

              <!-- Icône en bas -->
              <div class="absolute bottom-6 left-6">
                <i [class]="card.iconClass + ' text-3xl ' + card.bgColor"></i>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  `
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