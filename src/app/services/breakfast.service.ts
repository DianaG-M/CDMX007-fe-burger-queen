import { Injectable } from '@angular/core';

@Injectable()
export class BreakfastService {
    constructor() {
        console.log('Servicio listo para usarse');
    }
    mostrar: boolean;
    view() {
        this.mostrar = true;
        console.log(this.mostrar);
        return this.mostrar;
    }
}
