import { RouterModule, Routes } from '@angular/router';

import { CountryComponent } from './components/country.component';

const routes: Routes = [
    { path: 'countries', component: CountryComponent }
];

export const CountryRoutes = RouterModule.forChild(routes);
