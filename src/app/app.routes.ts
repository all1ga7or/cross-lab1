import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'graph',
    loadComponent: () => import('./graph/graph.page').then( m => m.GraphPage)
  },
];
