import { Injectable } from '@angular/core';


@Injectable()
export class ItemsTicketService {
    items: any[] = [];

    constructor() {
        console.log('Productos listos para usarse');
    }

    public getItems(item) {
        this.items.push(item);
        console.log(this.items);
    }

}

