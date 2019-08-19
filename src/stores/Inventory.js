import { observable, action } from 'mobx'
import { Item } from './Item';

export class Inventory {
    @observable items = []

    // constructor() {

    // }
    @action addItem = (name, price = 0, quantity = 1) => {
        let item = this.items.find(i => i.name === name)
        {
            item ?
                item.quantity++
                : this.items.push(new Item(name, price, quantity))
        }
    }

    @action buyItem = (name) => {
        let item = this.items.find(i => i.name === name)
        {
            item.quantity >1 ?
                item.quantity--
                : this.items=this.items.filter(i=>i.name!==name)
        }
    }

    @action changePrice =(name,price)=>{
        this.items.find(i => i.name === name).price=price
    }
    
}
