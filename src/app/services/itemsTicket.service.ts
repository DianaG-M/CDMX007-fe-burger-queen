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
    public delete(index) {
        this.items.forEach(element => {
            if (this.items.indexOf(element) === index) {
                this.items.splice(index, 1);
                console.log(this.items);
            }
        });
    }
}

