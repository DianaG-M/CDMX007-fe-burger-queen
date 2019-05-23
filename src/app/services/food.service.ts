import { Injectable } from '@angular/core';

@Injectable(

)
export class FoodService {

  private food: Food[] = [
    {
        type: 'saucers',
        nombre: 'Platillos'
    }, {
        type: 'drinks',
        nombre: 'Bebidas'
    },  {
        type: 'ok',
        nombre: 'OK'
    }, {
      type: 'garniture',
      nombre: 'Guarnición'
    }, {
        type: 'extra',
        nombre: 'Extra'
    }, {
      type: 'ingredientsF',
      nombre: 'Sin ingredientes'
  },
];

  constructor() {
    console.log ('Servicio de comida listo para usarse')
   }

   getFood() {
     return this.food;
   }
}

export interface Food {
  type: string;
  nombre: string;
}

