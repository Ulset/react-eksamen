import React from 'react'
import CategorySelector from './CategorySelector';
import ItemComponent from './ItemComponent'

class ItemSelectorDesktop extends React.Component {
    constructor(props){
        super();
        this.state = {
            cat: "kaffe"
        }
    }

    getItems = ()=> {
        return this.props.items.map((el, key) => {
            let isPLacedInCart = this.props.cart.includes(el);
            if(this.state.cat == el.cat){
                return <ItemComponent item={el} key={key} addToCartFunc={this.props.addToCart} removeFromCart={this.props.removeFromCart} isPlacedInCart={isPLacedInCart}/>
            }
        })
    }

    changeCat = (newCat) => {
        this.setState({
            cat: newCat
        })
    }

    render = () => {
        return (
            <div className="desktop_item_selector_container desktop_main_content">
                <CategorySelector currCat={this.state.cat} changeCat={this.changeCat} />
                <div className="desktop_item_components_container">
                    {this.getItems()}
                </div>
            </div>
        )
    }
}

export default ItemSelectorDesktop