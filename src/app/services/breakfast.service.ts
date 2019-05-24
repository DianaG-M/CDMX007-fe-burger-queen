import { Injectable } from '@angular/core';


@Injectable()
export class BreakfastService {

    private breakfast: Breakfast[] = [
        {
            id: 'sandwich',
            type: 'saucer',
            ticket: 'Sandwich',
            nombre: 'Sandwich',
            img: 'assets/img/sandwich.png',
            precio: 35
        }, {
            id: 'juice',
            type: 'drink',
            ticket: 'Jugo',
            nombre: 'jugo',
            img: 'assets/img/jugo.png',
            precio: 15
        }, {
            id: 'american',
            type: 'drink',
            ticket: 'Café americano',
            nombre: 'Cafe americano',
            img: 'assets/img/americano.png',
            precio: 20
        }, {
            id: 'coffe',
            type: 'drink',
            ticket: 'café con leche',
            nombre: 'Café con leche',
            img: 'assets/img/leche.png',
            precio: 28
        }, {
            id: 'cheese',
            type: 'ingredient-b',
            ticket: 's/queso',
            nombre: 'Queso',
            img: 'assets/img/queso.png',
            precio: 0
        }, {
            id: 'lettuce',
            type: 'ingredient-b',
            ticket: 's/lechuga',
            nombre: 'Lechuga',
            img: 'assets/img/lechuga.png',
            precio: 0
        }, {
            id: 'onion',
            type: 'ingredient-b',
            ticket: 's/cebolla',
            nombre: 'Cebolla',
            img: 'assets/img/cebolla.png',
            precio: 0
        }, {
            id: 'tomato',
            type: 'ingredient-b',
            ticket: 's/jitomate',
            nombre: 'Jitomate',
            img: 'assets/img/jitomate.png',
            precio: 0
        }, {
            id: 'extra-cheese',
            type: 'extras',
            ticket: 'Extra queso',
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
    ticket: string;
    nombre: string;
    img: string;
    precio: number;
}
