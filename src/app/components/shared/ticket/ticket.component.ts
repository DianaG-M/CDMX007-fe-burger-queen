import { Component, OnInit } from '@angular/core';
import { ItemsTicketService } from '../../../services/itemsTicket.service';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html'
})
export class TicketComponent implements OnInit {
  constructor(private itemTicket: ItemsTicketService) {
  }

  ngOnInit() {
  }

  getItemOrder() {
    return this.itemTicket.items;
  }

  /* getArrTrash() {
    return this.itemTicket.newArr;

  } */

  // clean() {
  //   document.getElementById('items-ticket').innerHTML = '';
  // }
}
