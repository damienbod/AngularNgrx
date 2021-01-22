import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule',
  },
  {
    path: 'countries',
    loadChildren: './countries/country.module#CountryModule',
  },
];

export const AppRoutes = RouterModule.forRoot(routes);
