import React, { Component } from 'react';
import { observer } from 'mobx-react'
import Item from './Item'

@observer
class Market extends Component {
    constructor() {
        super()
        this.state = {
            itemName: ''
        }
    }
    handleChange = (e) => {
        this.setState({ itemName: e.target.value });
    }

    keyPress = (e) => {
        if (e.keyCode == 13) {//enter
            console.log('item: ', e.target.value);
            this.props.inventory.addItem(e.target.value)
            this.setState({ itemName: '' })

        }
    }

    render() {
        return (
            <div className="market">
                <input value={this.state.itemName} onChange={this.handleChange} onKeyDown={this.keyPress}></input>
                {this.props.inventory.items.map(i =>
                    <Item item={i}
                        buyItem={this.props.inventory.buyItem}
                        editItem={this.props.inventory.editItem} />)}
            </div>
        )
    }
}

export default Market
// Your Market component should have an input to enter a new Item
// On enter it should run a function which calls the store's addItem action
// It should then reset the input to be empty


// It should map the items array from your store, to Item components and pass the relevant data as props