import React, { Component } from 'react';
import { observer,inject } from 'mobx-react'

@inject("inventory")
@observer
class Item extends Component {
    buyItem = () => {
        this.props.inventory.buyItem(this.props.item.name)
    }

    changePrice = () => {
        let newPrice = prompt("Please enter new price", "price");
        console.log(newPrice)
        this.props.inventory.changePrice(this.props.item.name, newPrice)
      }

    render() {
        return (
            <li onDoubleClick={this.changePrice}>
                {`${this.props.item.quantity} ${this.props.item.name} available at $${this.props.item.price} per item`}
                <button onClick={this.buyItem}>Buy</button></li>
        )
    }
}

export default Item
