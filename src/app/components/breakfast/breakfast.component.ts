import { Component, OnInit } from '@angular/core';
import { BreakfastService } from '.././../services/breakfast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html'
})
export class BreakfastComponent implements OnInit {
  mostrar = true;

  constructor(private router : Router) {
    console.log('Se muestran las hamburguesas')
   }

  ngOnInit() {
  }

  viewSaucers() {
    this.router.navigate(['/platillos'])
  }

}
