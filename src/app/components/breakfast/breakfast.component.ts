import { Component, OnInit } from '@angular/core';
import { BreakfastService, Breakfast } from '.././../services/breakfast.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html'
})
export class BreakfastComponent implements OnInit {
  buttonsBreak: Breakfast[] = [];
  constructor(private showButtonsBreak: BreakfastService) {
  }

  ngOnInit() {
    this.buttonsBreak = this.showButtonsBreak.getBreakfast();
    console.log(this.buttonsBreak);
  }

}
