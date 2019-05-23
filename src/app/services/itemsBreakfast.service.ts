import { Injectable } from '@angular/core';


@Injectable()
export class ItemsBreakfastService {

    private itemsBreak: any[] = [
        {
            type: 'saucer',
            nombre: 'Sandwich',
            img: 'assets/img/sandwich.png',
            precio: 35
        }, {
            type: 'drink',
            nombre: 'jugp',
            img: 'assets/img/jugo.png',
            precio: 15
        }, {
            type: 'drink',
            nombre: 'Cafe americano',
            img: 'assets/img/americano.png',
            precio: 20
        }, {
            type: 'drink',
            nombre: 'Café con leche',
            img: 'assets/img/leche.png',
            precio: 28
        }, {
            type: 'ingredient',
            nombre: 'Queso',
            img: 'assets/img/queso.png',
            precio: 0
        }, {
            type: 'ingredient',
            nombre: 'Lechuga',
            img: 'assets/img/lechuga.png',
            precio: 0
        }, {
            type: 'ingredient',
            nombre: 'Cebolla',
            img: 'assets/img/cebolla.png',
            precio: 0
        }, {
            type: 'ingredient',
            nombre: 'Jitomate',
            img: 'assets/img/jitomate.png',
            precio: 0
        }, {
            type: 'extras',
            nombre: 'Queso',
            img: 'assets/img/queso.png',
            precio: 15
        }
    ];

    constructor() {
        console.log('Productos listos para usarse');
    }

    getItemBreak() {
        return this.itemsBreak;
    }
}

