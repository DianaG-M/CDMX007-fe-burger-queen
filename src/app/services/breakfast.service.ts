import { Injectable } from '@angular/core';


@Injectable()
export class BreakfastService {

    private breakfast: any[] = [
        {
            platillo: [
                {
                    id: 'uno',
                    nombre: 'sandwich',
                    img: 'assets/img/sandwich.png',
                    precio: '$35'
                }
            ]
            ,
            bebida: [
                {
                    id: 'dos',
                    nombre: 'jugp',
                    img: 'assets/img/jugo.png',
                    precio: '$15'
                },
                {
                    id: 'tres',
                    nombre: 'cafe con leche',
                    img: 'assets/img/cafe_leche.png',
                    precio: '$28'
                },
                {
                    id: 'cuatro',
                    nombre: 'cafe americano',
                    img: 'assets/img/cafe_americano',
                    precio: '$20'
                }
            ],
            ingredientes: [
                {
                    id: 'cinco',
                    nombre: 'queso',
                    img: 'assets/img/queso.png',
                    precio: '$0'
                },
                {
                    id: 'seis',
                    nombre: 'lechuga',
                    img: 'assets/img/lechuga.png',
                    precio: '$0'
                },
                {
                    id: 'siete',
                    nombre: 'cebolla',
                    img: 'assets/img/cebolla.png',
                    precio: '$0'
                },
                {
                    id: 'ocho',
                    nombre: 'jitomate',
                    img: 'assets/img/jitomate.png',
                    precio: '$0'
                }
            ]
        }
    ];

    constructor() {
        console.log('Servicio listo para usarse');
    }

    getBreakfast() {
        return this.breakfast;
    }
}

// export interface Desayuno { [
//     id: string,
//     nombre: string,
//     img: string,
//     precio: string
// ]; }
