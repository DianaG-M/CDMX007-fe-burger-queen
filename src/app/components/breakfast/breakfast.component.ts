import { Component, OnInit } from '@angular/core';
import { BreakfastService, Desayuno } from '.././../services/breakfast.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html'
})
export class BreakfastComponent implements OnInit {
  botones: Desayuno[] = [];
  constructor(private mostrarBotones: BreakfastService) {
  }

  ngOnInit() {
    this.botones = this.mostrarBotones.getBreakfast();
    console.log(this.botones);
  }

}
