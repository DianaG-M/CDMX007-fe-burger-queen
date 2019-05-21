import { Component, OnInit } from '@angular/core';
import { BreakfastService } from 'src/app/services/breakfast.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor(private mostrar: BreakfastService) {
  }

  ngOnInit() {
  }

  public viewBreak() {
    this.mostrar.view();
  }

  public viewFood() {
    this.mostrar.view();
  }

}
