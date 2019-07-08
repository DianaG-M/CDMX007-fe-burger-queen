import { Component, OnInit } from '@angular/core';
import { ItemsTicketService } from '../../../services/itemsTicket.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  constructor( private sumPrices: ItemsTicketService) { }

  ngOnInit() {
  }

  /* getSumPrice() {
    return this.sumPrices.getItems(this.sumPrices.itemPrice);
  } */

  getsumPrice() {
    return this.sumPrices.sumPrice();
  }

  returnItem() {
    return this.sumPrices.items;
  }
}
