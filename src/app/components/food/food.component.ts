import { Component, OnInit } from '@angular/core';
import { FoodService, Food } from '../../services/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html'
})
export class FoodComponent implements OnInit {
  buttonsFood: Food[] = [];
  constructor(private showButtonsFood: FoodService)  {

  }

  ngOnInit() {
    this.buttonsFood = this.showButtonsFood.getFood();
    console.log(this.buttonsFood);
  }

}
