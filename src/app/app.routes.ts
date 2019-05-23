import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { FoodComponent } from './components/food/food.component';
import { SaucersBreakfastComponent } from './components/saucers-breakfast/saucers-breakfast.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'orden', component: OrderComponent,
    children: [
        { path: 'desayuno', component: BreakfastComponent, /* }, */
        children: [
            { path: 'producto/:id', component: SaucersBreakfastComponent }
        ]} ,
        { path: 'comida', component: FoodComponent }
    ]},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
