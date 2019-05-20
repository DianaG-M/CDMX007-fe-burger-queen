import { Component, OnInit } from '@angular/core';
import { BreakfastService } from '.././../services/breakfast.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html'
})
export class BreakfastComponent implements OnInit {
  constructor(public mostrar: BreakfastService) {
  }

  ngOnInit() {
  }

}
