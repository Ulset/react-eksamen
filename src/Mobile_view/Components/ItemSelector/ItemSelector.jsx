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
        return (
            <div className="mobile_item_selector">
                <TypeSelector handleCatChange={this.handleChange} selected={this.state.cat}/>
                {this.state.items.filter((el) => {
                    return el.cat === this.state.cat
                }).map((el, index) => {
                    let isPLacedInCart = this.state.cart.includes(el);
                    return <ItemComponent item={el} key={index} addToCartFunc={this.addToCart} removeFromCart={this.removeFromCart} isPlacedInCart={isPLacedInCart}/>
                })}
            </div>
        )
    }
}

export default ItemSelector