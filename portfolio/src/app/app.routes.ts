import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home')
        .then(m => m.Home)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about')
        .then(m => m.About)
  },
  {
    path: 'skills',
    loadComponent: () =>
      import('./features/skills/skills')
        .then(m => m.Skills)
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./features/experience/experience')
        .then(m => m.Experience)
  },

  // --- SECTION PROJETS ---
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/pages/project-list/project-list')
        .then(m => m.ProjectListComponent)
  },
  {
    path: 'projects/:id',
    loadComponent: () =>
      import('./features/projects/pages/project-detail/project-detail')
        .then(m => m.ProjectDetailComponent)
  },
  // -----------------------

  {
    path: 'services',
    loadComponent: () =>
      import('./features/services/services')
        .then(m => m.Services)
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard')
        .then(m => m.Dashboard)
  },
  {
    path: 'calendar',
    loadComponent: () =>
      import('./features/calendar/calendar')
        .then(m => m.Calendar)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact')
        .then(m => m.Contact)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found')
        .then(m => m.NotFound)
  }
];