import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component'
import { HomeComponent } from './components/home/home.component';
import { OrdenComponent } from './components/orden/orden.component';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'orden', component: OrdenComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);