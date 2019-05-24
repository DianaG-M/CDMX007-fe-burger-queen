import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTING } from './app.routes';

// Service
import { BreakfastService } from './services/breakfast.service';
import { ItemsBreakfastService } from './services/itemsBreakfast.service';



// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './components/shared/nav/nav.component';
import { TicketComponent } from './components/shared/ticket/ticket.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { OrderComponent } from './components/order/order.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { FoodComponent } from './components/food/food.component';
import { SaucersBreakfastComponent } from './components/saucers-breakfast/saucers-breakfast.component';
import { FoodService } from './services/food.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    OrderComponent,
    TicketComponent,
    FooterComponent,
    BreakfastComponent,
    FoodComponent,
    SaucersBreakfastComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AppRoutingModule
  ],
  providers: [
    BreakfastService,
    ItemsBreakfastService,
    FoodService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
