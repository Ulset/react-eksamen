import React from 'react'
import ItemComponent from './ItemComponent';
import TypeSelector from './TypeSelector';

class ItemSelector extends React.Component {
    constructor(props){
        super();
        this.state = {
            items: props.items,
            cart: props.cart,
            cat: 'kaffe'
        }
        this.addToCart = (itemEl) => {
            props.addToCart(itemEl)
        }
        this.removeFromCart = (itemEl) => {
            props.removeFromCart(itemEl)
        }
    }

    handleChange = (type) => {
        this.setState({
            cat: type
        })
    }

    render = () => {
        let counter = 0
        let allItems = []
        let items = this.state.items
        let cart = this.state.cart
        for(let el of items){
            counter++;
            if(el.cat === this.state.cat){
                let isPLacedInCart = cart.includes(el);
                allItems.push(<ItemComponent item={el} key={counter} addToCartFunc={this.addToCart} removeFromCart={this.removeFromCart} isPlacedInCart={isPLacedInCart}/>)
            }
        }
        return (
            <div className="mobile_item_selector">
                <TypeSelector handleCatChange={this.handleChange} selected={this.state.cat}/>
                {allItems}
            </div>
        )
    }
}

export default ItemSelector