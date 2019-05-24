import { Injectable } from '@angular/core';


@Injectable()
export class BreakfastService {

    private breakfast: Breakfast[] = [
        {
            id: 'sandwich',
            type: 'saucer',
            nombre: 'Sandwich',
            img: 'assets/img/sandwich.png',
            precio: 35
        }, {
            id: 'juice',
            type: 'drink',
            nombre: 'jugo',
            img: 'assets/img/jugo.png',
            precio: 15
        }, {
            id: 'american',
            type: 'drink',
            nombre: 'Cafe americano',
            img: 'assets/img/americano.png',
            precio: 20
        }, {
            id: 'coffe',
            type: 'drink',
            nombre: 'Café con leche',
            img: 'assets/img/leche.png',
            precio: 28
        }, {
            id: 'cheese',
            type: 'ingredient-b',
            nombre: 'Queso',
            img: 'assets/img/queso.png',
            precio: 0
        }, {
            id: 'lettuce',
            type: 'ingredient-b',
            nombre: 'Lechuga',
            img: 'assets/img/lechuga.png',
            precio: 0
        }, {
            id: 'onion',
            type: 'ingredient-b',
            nombre: 'Cebolla',
            img: 'assets/img/cebolla.png',
            precio: 0
        }, {
            id: 'tomato',
            type: 'ingredient-b',
            nombre: 'Jitomate',
            img: 'assets/img/jitomate.png',
            precio: 0
        }, {
            id: 'extra-cheese',
            type: 'extras',
            nombre: 'Queso',
            img: 'assets/img/queso.png',
            precio: 15
        }
    ];

    constructor() {
        console.log('Servicio de desayuno listo para usarse');
    }

    getBreakfast() {
        return this.breakfast;
    }
}

export interface Breakfast {
    id: string;
    type: string;
    nombre: string;
    img: string;
    precio: number;
}
