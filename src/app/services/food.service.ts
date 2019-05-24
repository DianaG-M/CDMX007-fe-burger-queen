import { Injectable } from '@angular/core';

@Injectable(

)
export class FoodService {

  private food: Food[] = [

    {
      id: 'simple-res-burger',
      type: 'simple-saucer',
      ticket: 'Hamburguesa sencilla res',
      nombre: 'Sencilla res',
      img: 'assets/img/hamburguesa.png',
      precio: 40
    }, {
      id: 'simple-chicken-burger',
      type: 'simple-saucer',
      ticket: 'Hamburguesa sencilla pollo',
      nombre: 'Sencilla pollo',
      img: 'assets/img/hamburguesa.png',
      precio: 40
    }, {
      id: 'simple-vegetarian-burger',
      type: 'simple-saucer',
      ticket: 'Hamburguesa sencilla vegetariana',
      nombre: 'Sencilla vegetariana',
      img: 'assets/img/hamburguesa.png',
      precio: 40
    }, {
      id: 'double-res-burger',
      type: 'double-saucer',
      ticket: 'Hamburguesa doble res',
      nombre: 'Doble res',
      img: 'assets/img/hamburguesa.png',
      precio: 55
    }, {
      id: 'double-chicken-burger',
      type: 'double-saucer',
      ticket: 'Hamburguesa doble pollo',
      nombre: 'Doble pollo',
      img: 'assets/img/hamburguesa.png',
      precio: 55
    }, {
      id: 'double-vegetarian-burger',
      type: 'double-saucer',
      ticket: 'Hamburguesa doble vegetariana',
      nombre: 'Doble vegetariana',
      img: 'assets/img/hamburguesa.png',
      precio: 55
    }, {
      id: 'water',
      type: 'drink',
      ticket: 'Agua',
      nombre: 'Agua',
      img: 'assets/img/agua.png',
      precio: 10
    }, {
      id: 'soda',
      type: 'drink',
      ticket: 'Refresco',
      nombre: 'Refresco',
      img: 'assets/img/refresco.png',
      precio: 15
    }, {
      id: 'french-fries',
      type: 'garrison',
      ticket: 'Papas fritas',
      nombre: 'Papas fritas',
      img: 'assets/img/papas.png',
      precio: 15
    }, {
      id: 'onion-rings',
      type: 'garrison',
      ticket: 'Aros de cebolla',
      nombre: 'Aros de cebollas',
      img: 'assets/img/aros.png',
      precio: 15
    }, {
      id: 'lettuce-f',
      type: 'ingredient-f',
      ticket: 's/lechuga',
      nombre: 'Lechuga',
      img: 'assets/img/lechuga.png',
      precio: 0
    }, {
      id: 'onion-f',
      type: 'ingredient-f',
      ticket: 's/cebolla',
      nombre: 'Cebolla',
      img: 'assets/img/cebolla.png',
      precio: 0
    }, {
      id: 'tomato-f',
      type: 'ingredient-f',
      ticket: 's/jitomate',
      nombre: 'Jitomate',
      img: 'assets/img/jitomate.png',
      precio: 0
    }, {
      id: 'pickles',
      type: 'ingredient-f',
      ticket: 's/pepinillos',
      nombre: 'Pepinillos',
      img: 'assets/img/pepinillo.png',
      precio: 0
    }, {
      id: 'egg',
      type: 'extras',
      ticket: 'c/huevo',
      nombre: 'Huevo',
      img: 'assets/img/huevo.png',
      precio: 15
    }, {
      id: 'extra-cheese-food',
      type: 'extras',
      ticket: 'Extra queso',
      nombre: 'Queso',
      img: 'assets/img/queso.png',
      precio: 15
    }
  ];

  constructor() {
    console.log ('Servicio de comida listo para usarse');
   }

   getFood() {
     return this.food;
   }
}

export interface Food {
  id: string;
  type: string;
  ticket: string;
  nombre: string;
  img: string;
  precio: number;
}

