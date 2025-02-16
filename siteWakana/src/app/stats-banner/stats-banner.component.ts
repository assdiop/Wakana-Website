import { Component } from '@angular/core';

interface StatItem {
  icon: string;
  value: string;
  label: string;
}

@Component({
  selector: 'app-stats-banner',
  standalone: true,
  templateUrl: './stats-banner.component.html',
  styleUrls: ['./stats-banner.component.css']
})
export class StatsBannerComponent {
  stats: StatItem[] = [
    {
      icon: 'fa-chart-line',
      value: '+50',
      label: 'Fonctionnalités'
    },
    {
      icon: 'fa-users',
      value: '+40',
      label: 'Partenaires'
    },
    {
      icon: 'fa-briefcase',
      value: '+300',
      label: 'Projets réalisés'
    },
    {
      icon: 'fa-star',
      value: '+515',
      label: 'Feedback'
    }
  ];
}
