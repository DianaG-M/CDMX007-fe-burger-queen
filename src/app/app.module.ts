import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import { APP_ROUTING } from './app.routes';

//Service


//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './components/shared/nav/nav.component';
import { TicketComponent } from './components/shared/ticket/ticket.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { OrderComponent } from './components/order/order.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    NavComponent,
    OrderComponent,
    TicketComponent,
    FooterComponent,
    BreakfastComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
