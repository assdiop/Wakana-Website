//components/news/news.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: true,
  template: `
    <section class="py-20 bg-[#1a0533]">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-white text-center mb-12">
          Informations, Conseils, Expérience.
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (item of newsItems; track item.title) {
            <div class="group relative rounded-xl overflow-hidden">
              <img 
                [src]="item.image" 
                [alt]="item.title"
                class="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <span class="text-secondary text-sm">{{ item.date }}</span>
                <h3 class="text-xl font-semibold text-white mt-2">{{ item.title }}</h3>
              </div>
            </div>
          }
        </div>
        <div class="flex justify-center gap-3 mt-12">
          @for (dot of [1, 2, 3]; track dot) {
            <button 
              class="w-3 h-3 rounded-full bg-white/30 transition-colors hover:bg-white"
              [class.bg-white]="dot === 1"
            ></button>
          }
        </div>
      </div>
    </section>
  `
})
export class NewsComponent {
  newsItems = [
    {
      title: 'Titre de l\'actualité 1',
      date: '2024',
      image: 'assets/images/news1.jpg'
    },
    // ... autres actualités
  ];
}
