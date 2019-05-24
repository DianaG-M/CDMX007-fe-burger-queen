import { Component, OnInit } from '@angular/core';
import { FoodService, Food } from '../../services/food.service';
import { ItemsTicketService } from '../../services/itemsTicket.service';


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html'
})
export class FoodComponent implements OnInit {
  buttonsFood: Food[] = [];
  objItems: object;
  constructor(private showButtonsFood: FoodService,
              private itemsTicket: ItemsTicketService)  {

  }

  ngOnInit() {
    this.buttonsFood = this.showButtonsFood.getFood();
    console.log(this.buttonsFood);
  }

  public filterbuttons(index) {
    this.buttonsFood.forEach(element => {
      if (this.buttonsFood.indexOf(element) === index) {
        this.objItems = element;
        this.itemsTicket.getItems(this.objItems);
      }
    });
  }
}
