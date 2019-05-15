import { Component, OnInit } from '@angular/core';
import { BreakfastService } from '.././../services/breakfast.service';


@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html'
})
export class BreakfastComponent implements OnInit {

  constructor( private _breakfastService: BreakfastService) { }

  ngOnInit() {
  }

}
