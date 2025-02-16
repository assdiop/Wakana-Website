// components/footer/footer.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <!-- Wave Separator -->
    <div class="bg-[#E91E63] h-16">
      <svg class="w-full h-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path 
          fill="#1B1464" 
          d="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,58.7C840,53,960,43,1080,37.3C1200,32,1320,32,1380,32L1440,32L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
        ></path>
      </svg>
    </div>

    <!-- Footer Content -->
    <footer class="bg-[#1B1464] text-white py-16">
      <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Logo and Contact Info -->
        <div class="space-y-6">
          <img src="assets/images/synapsys-logo.png" alt="Synapsys" class="h-12">
          
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <svg class="w-6 h-6 mt-1 text-[#E91E63]" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
              <p>Almadies Zone 4, Villa N°9,<br>Rte du Méridien – Dakar, Sénégal</p>
            </div>
            
            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-[#E91E63]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <p>+221 33 858 86 30</p>
            </div>

            <div>
              <p class="text-[#E91E63] font-semibold mb-2">Nos Horaires :</p>
              <p>Lun – Ven : 8:00 – 17h30</p>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-bold mb-6">Liens</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-4">
              <a routerLink="/accueil" class="block hover:text-[#E91E63] transition-colors">Accueil</a>
              <a routerLink="/services" class="block hover:text-[#E91E63] transition-colors">Services</a>
              <a routerLink="/actualites" class="block hover:text-[#E91E63] transition-colors">Actualités</a>
              <a routerLink="/contact" class="block hover:text-[#E91E63] transition-colors">Contact</a>
            </div>
            <div class="space-y-4">
              <a routerLink="/presentation" class="block hover:text-[#E91E63] transition-colors">Présentation</a>
              <a routerLink="/solutions" class="block hover:text-[#E91E63] transition-colors">Solutions</a>
              <a routerLink="/carrieres" class="block hover:text-[#E91E63] transition-colors">Carrières</a>
            </div>
          </div>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="text-xl font-bold mb-6">Newsletter</h3>
          <p class="mb-6">Soyez au courant des dernières tendances !</p>
          
          <form class="flex" (ngSubmit)="onSubscribe()">
            <input 
              type="email" 
              [(ngModel)]="email"
              name="email"
              placeholder="Saisir votre mail" 
              class="flex-1 px-4 py-2 bg[#191349]rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#E91E63]"
            >
            <button 
              type="submit"
              class="px-6 py-2 bg-[#E91E63] rounded-r-lg hover:bg-[#D81B60] transition-colors"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </button>
          </form>

          <!-- Social Media Links -->
          <div class="flex space-x-4 mt-6">
            <a href="#" class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#E91E63] transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#E91E63] transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#E91E63] transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="text-center mt-12 text-sm">
        <p>2025 © SYNAPSYS CONSEIL S.A – Tous Droits Réservés</p>
      </div>
    </footer>
  `
})
export class FooterComponent {
  email: string = '';

  onSubscribe() {
    // Implémentez ici la logique d'inscription à la newsletter
    console.log('Email souscrit:', this.email);
    this.email = '';
  }
}