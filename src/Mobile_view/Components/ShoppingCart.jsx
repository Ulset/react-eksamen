import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


class ShoppingCart extends React.Component {
    constructor(){
        super();
    }

    render = () => {
        return (
            <div className="mobile_shoppingcart_closed">
                <div className="logo_container">
                    <FontAwesomeIcon icon={faShoppingCart} size="2x" className="mobile_shopping_cart_icon" />
                </div>
            </div>
        )
    }
}

export default ShoppingCart