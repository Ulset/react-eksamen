import React from 'react'
import ShoppingCartOpened from './ShoppingCartOpened'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


class ShoppingCart extends React.Component {
    constructor(props){
        super();
        this.state = {
            opened: false,
            items: props.cart
        }
    }

    openShoppingCart = () => {
        this.setState({
            opened: true
        })
    }

    getShoppingItems = () => {
        let out = []
        let count = 0
        for(let cartEl of this.state.items){
            out.push(<p key={count}>{cartEl.name}</p>)
            count++;
        }
        return out
    }

    openedShoppingCartContent = () => {
        let items = this.getShoppingItems()
        return (
            <ShoppingCartOpened />
        )
    }

    unOpenedShoppingCartContent = () => {
        return (
            <div className="logo_container" onClick={this.openShoppingCart}>
                <FontAwesomeIcon icon={faShoppingCart} size="2x" className="mobile_shopping_cart_icon" />
            </div>
        )
    }

    render = () => {
        return (
            <div className={`mobile_shoppingcart${this.state.opened ? ' opened' : ''}`}>
                {!this.state.opened ? 
                    this.unOpenedShoppingCartContent()
                    : this.openedShoppingCartContent()}
            </div>
        )
    }
}

export default ShoppingCart