import { RouterModule } from '@angular/router';
export var routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'about', loadChildren: './about/about.module#AboutModule'
    },
    {
        path: 'countries', loadChildren: './countries/country.module#CountryModule'
    }
];
export var AppRoutes = RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map