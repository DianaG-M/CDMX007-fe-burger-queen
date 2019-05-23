import { Injectable } from '@angular/core';


@Injectable()
export class BreakfastService {

    private breakfast: Breakfast[] = [
        {
            type: 'saucers',
            nombre: 'Platillos'
        }, {
            type: 'drinks',
            nombre: 'Bebidas'
        }, {
            type: 'ingredientsB',
            nombre: 'Sin ingredientes'
        }, {
            type: 'ok',
            nombre: 'OK'
        }, {
            type: 'extra',
            nombre: 'Extra'
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
    type: string;
    nombre: string;
}
