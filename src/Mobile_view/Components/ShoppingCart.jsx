import React from 'react'
import ShoppingCartOpened from './ShoppingCartOpened'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


class ShoppingCart extends React.Component {
    constructor(){
        super();
        this.state = {
            opened: false
        }
    }

    openShoppingCart = () => {
        this.setState({
            opened: true
        })
    }

    openedShoppingCartContent = () => {
        return (
            <ShoppingCartOpened />
        )
    }

    unOpenedShoppingCartContent = () => {
        return (
            <div className="logo_container">
                <FontAwesomeIcon icon={faShoppingCart} size="2x" className="mobile_shopping_cart_icon" />
            </div>
        )
    }

    render = () => {
        return (
            <div className={`mobile_shoppingcart${this.state.opened ? ' opened' : ''}`} onClick={this.openShoppingCart}>
                {!this.state.opened ? 
                    this.unOpenedShoppingCartContent()
                    : this.openedShoppingCartContent()}
            </div>
        )
    }
}

export default ShoppingCart