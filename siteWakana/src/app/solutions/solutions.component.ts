// components/solutions/solutions.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions',
  standalone: true,
  template: `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-primary text-center mb-12">Nos Solutions</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          @for (solution of solutions; track solution.title) {
            <div class="group overflow-hidden rounded-xl shadow-lg">
              <div class="relative overflow-hidden">
                <img 
                  [src]="solution.image" 
                  [alt]="solution.title"
                  class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 class="absolute bottom-6 left-6 text-2xl font-semibold text-white">
                  {{ solution.title }}
                </h3>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class SolutionsComponent {
  solutions = [
    { title: 'eArchive', image: 'assets/images/earchive.jpg' },
    { title: 'Gestion Électronique de Documents', image: 'assets/images/ged.jpg' }
  ];
}