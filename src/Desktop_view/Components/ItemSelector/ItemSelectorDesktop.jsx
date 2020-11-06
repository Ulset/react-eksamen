import React from 'react'
import CategorySelector from './CategorySelector';
import ItemComponent from './ItemComponent'

class ItemSelectorDesktop extends React.Component {
    constructor(props){
        super();
    }

    getItems = ()=> {
        return this.props.items.map((el, key) => {
            let isPLacedInCart = this.props.cart.includes(el);
            return <ItemComponent item={el} key={key} addToCartFunc={this.props.addToCart} removeFromCart={this.props.removeFromCart} isPlacedInCart={isPLacedInCart}/>
        })
    }

    render = () => {
        return (
            <div className="desktop_item_selector_container desktop_main_content">
                <CategorySelector />
                <div className="desktop_item_components_container">
                    {this.getItems()}
                </div>
            </div>
        )
    }
}

export default ItemSelectorDesktop