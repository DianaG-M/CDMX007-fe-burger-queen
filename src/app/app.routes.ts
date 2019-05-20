import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component'
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'orden', component: OrderComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);