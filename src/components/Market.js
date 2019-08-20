import React, { Component } from 'react';
import { observer ,inject} from 'mobx-react'
import Item from './Item'

@inject("inventory")
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
                    <Item item={i}/>)}
            </div>
        )
    }
}

export default Market
