import React from 'react'
import ItemComponent from './ItemComponent';
import TypeSelector from './TypeSelector';

class ItemSelector extends React.Component {
    constructor(props){
        super();
        this.state = {
            cat: 'kaffe'
        }
    }
    
    addToCart = (itemEl) => {
        this.props.addToCart(itemEl)
    }
    removeFromCart = (itemEl) => {
        this.props.removeFromCart(itemEl)
    }

    handleChange = (type) => {
        this.setState({
            cat: type
        })
    }

    componentDidUpdate = (prevProps) => {
        if(prevProps !== this.props){
            this.setState(this.state)
        }
    }

    getItems = () => {
        let allItems = []
        this.props.items.map((el, index) => {
            if(el.cat === this.state.cat){
                let isPLacedInCart = this.props.cart.includes(el);
                allItems.push(<ItemComponent item={el} key={index} addToCartFunc={this.addToCart} removeFromCart={this.removeFromCart} isPlacedInCart={isPLacedInCart}/>)
            }
        })
        return allItems
    }

    render = () => {
        let allItems = this.getItems();
        return (
            <div className="mobile_item_selector">
                <TypeSelector handleCatChange={this.handleChange} selected={this.state.cat}/>
                {allItems}
            </div>
        )        
    }
}

export default ItemSelector