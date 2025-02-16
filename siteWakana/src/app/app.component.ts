import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { ProjectsComponent } from './projects/projects.component';
import { PartnersComponent } from './partners/partners.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';
import { MethodsComponent } from './methods/methods.component';
import { VideoBannerComponent } from './video-banner/video-banner.component';
import { StatsBannerComponent } from './stats-banner/stats-banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    SolutionsComponent,
    ProjectsComponent,
    NewsComponent,
    PartnersComponent,
    FooterComponent,
    MethodsComponent,
    VideoBannerComponent,
    StatsBannerComponent,

  ],
  template: `
    <app-header/>
    <app-video-banner/>
    <app-hero/>
    <app-stats-banner/>
    <app-services />
    <app-solutions />
    <app-projects />
    <app-methods/>
    <app-news />
    <app-partners />
    <app-footer/>
  
  `
})
export class AppComponent {}