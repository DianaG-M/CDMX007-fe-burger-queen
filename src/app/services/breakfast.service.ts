import { Injectable } from '@angular/core';


@Injectable()
export class BreakfastService {

    private breakfast: any[] = [
        {
            num: 1,
            id: 'saucers',
            nombre: 'Platillos'
        }, {
            num: 2,
            id: 'drinks',
            nombre: 'Bebidas'
        }, {
            num: 3,
            id: 'ingredients',
            nombre: 'Sin ingredientes'
        }, {
            num: 4,
            id: 'ok',
            nombre: 'OK'
        }, {
            num: 5,
            id: 'extra',
            nombre: 'Extra'
        }
    ];

    constructor() {
        console.log('Servicio listo para usarse');
    }

    getBreakfast() {
        return this.breakfast;
    }
}

export interface Desayuno {
    num: number;
    id: string;
    nombre: string;
}
