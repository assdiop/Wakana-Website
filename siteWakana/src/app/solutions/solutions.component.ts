// components/solutions/solutions.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions',
  standalone: true,
  templateUrl:'./solutions.component.html'

})
export class SolutionsComponent {
  solutions = [
    { title: 'ApplicationMobile', image: 'assets/images/appmobile.avif' },
    { title: 'Gestion Électronique de Documents', image: 'assets/images/ged.jpg' }
  ];
}
