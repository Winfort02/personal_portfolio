import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./web/components/home/home.component').then(
        (c) => c.HomeComponent
      ),
  },
  {
    path: 'experience-detail/:id',
    loadComponent: () =>
      import(
        './web/components/experience-detail/experience-detail.component'
      ).then((c) => c.ExperienceDetailComponent),
  },
  {
    path: 'project-detail/:id',
    loadComponent: () =>
      import('./web/components/project-detail/project-detail.component').then(
        (c) => c.ProjectDetailComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
