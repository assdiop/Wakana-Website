// components/header/header.component.ts
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl:'./header.component.html'
   
,
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
export class HeaderComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrolled = false;  // Variable pour suivre l'état du défilement
  topBarVisible = true;  // Variable pour suivre la visibilité de la barre du haut

  // Écouter l'événement de défilement
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const scrollTop = window.scrollY;

    // Ajuster la visibilité et la taille de la barre de navigation selon le défilement
    this.scrolled = scrollTop > 50; // Si on a défilé de 50px, on applique des styles différents
  }



}