import { Component, OnInit } from '@angular/core';
import { BreakfastService, Breakfast } from '.././../services/breakfast.service';
import { ItemsTicketService } from '../../services/itemsTicket.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html'
})
export class BreakfastComponent implements OnInit {
  buttonsBreak: Breakfast[] = [];
  objItems: object;
  constructor(private showButtonsBreak: BreakfastService,
              private itemsTicket: ItemsTicketService) {
  }

  ngOnInit() {
    this.buttonsBreak = this.showButtonsBreak.getBreakfast();
    console.log(this.buttonsBreak);
  }

  public filterbuttons(index) {
    this.buttonsBreak.forEach(element => {
      if (this.buttonsBreak.indexOf(element) === index) {
        this.objItems = element;
        this.itemsTicket.getItems(element);
      }
    });
  }

}
