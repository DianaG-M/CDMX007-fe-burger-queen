import { Injectable } from '@angular/core';

@Injectable(

)
export class FoodService {

  private food: Food[] = [

    {
      id: 'simple-res-burger',
      type: 'simple-saucer',
      nombre: 'Sencilla res',
      img: 'assets/img/hamburguesa.png',
      precio: 40
    }, {
      id: 'simple-chicken-burger',
      type: 'simple-saucer',
      nombre: 'Sencilla pollo',
      img: 'assets/img/hamburguesa.png',
      precio: 40
    }, {
      id: 'simple-vegetarian-burger',
      type: 'simple-saucer',
      nombre: 'Sencilla vegetariana',
      img: 'assets/img/hamburguesa.png',
      precio: 40
    }, {
      id: 'double-res-burger',
      type: 'saucer',
      nombre: 'Doble res',
      img: 'assets/img/hamburguesa.png',
      precio: 55
    }, {
      id: 'double-chicken-burger',
      type: 'saucer',
      nombre: 'Doble pollo',
      img: 'assets/img/hamburguesa.png',
      precio: 55
    }, {
      id: 'double-vegetarian-burger',
      type: 'saucer',
      nombre: 'Doble vegetariana',
      img: 'assets/img/hamburguesa.png',
      precio: 55
    }, {
      id: 'water',
      type: 'drink',
      nombre: 'Agua',
      img: 'assets/img/agua.png',
      precio: 10
    }, {
      id: 'soda',
      type: 'drink',
      nombre: 'Refresco',
      img: 'assets/img/refresco.png',
      precio: 15
    }, {
      id: 'french-fries',
      type: 'garrison',
      nombre: 'Papas fritas',
      img: 'assets/img/papas.png',
      precio: 15
    }, {
      id: 'onion-rings',
      type: 'garrison',
      nombre: 'Aros de cebollas',
      img: 'assets/img/aros.png',
      precio: 15
    }, {
      id: 'lettuce',
      type: 'ingredient-f',
      nombre: 'Lechuga',
      img: 'assets/img/lechuga.png',
      precio: 0
    }, {
      id: 'onion',
      type: 'ingredient-f',
      nombre: 'Cebolla',
      img: 'assets/img/cebolla.png',
      precio: 0
    }, {
      id: 'tomato',
      type: 'ingredient-f',
      nombre: 'Jitomate',
      img: 'assets/img/jitomate.png',
      precio: 0
    }, {
      id: 'pickles',
      type: 'ingredient-f',
      nombre: 'Pepinillos',
      img: 'assets/img/pepinillo.png',
      precio: 0
    }, {
      id: 'egg',
      type: 'extras',
      nombre: 'Huevo',
      img: 'assets/img/huevo.png',
      precio: 0
    }, {
      id: 'extra-cheese-food',
      type: 'extras',
      nombre: 'Queso',
      img: 'assets/img/queso.png',
      precio: 0
    }
  ];

  constructor() {
    console.log ('Servicio de comida listo para usarse')
   }

   getFood() {
     return this.food;
   }
}

export interface Food {
  id: string;
  type: string;
  nombre: string;
  img: string;
  precio: number;
}

