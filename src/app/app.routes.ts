import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component'
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
//import { SaucersComponent } from './components/shared/products/saucers.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'orden', component: OrderComponent,
    children: [
        {path: 'dasayuno', component: BreakfastComponent}
    ]},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);