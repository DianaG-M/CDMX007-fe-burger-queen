import { Injectable } from '@angular/core';

@Injectable()
export class ItemsTicketService {
    items: any[] = [];
    itemPrice: any[] = [];
    result = 0;
    total: number;


    constructor() {
        console.log('Productos listos para usarse');
    }

    public getItems(item) {
        this.items.push(item);
        console.log(this.items);
    }

    /* public getPrice(itemPrice) {
        this.itemPrice.push(itemPrice.precio);
        console.log(this.itemPrice);
        this.arrPrice(this.itemPrice);
    } */

    public delete(index) {
        this.items.forEach(element => {
            if (this.items.indexOf(element) === index) {
                this.items.splice(index, 1);
                console.log(this.items);
            }
        });
    }


    /* arrPrice(price) {
        let sum = price.reduce((a,b) => {
             return a + b;
        });
        this.result = sum;
    } */

    sumPrice(arr: any[] = []) {
        if(arr.length !== this.result) {
            this.total = 0;
            for (let item of arr) {
                this.total += item.precio;
                console.log(this.total);
                return this.total;
            }
        }
    }
}

