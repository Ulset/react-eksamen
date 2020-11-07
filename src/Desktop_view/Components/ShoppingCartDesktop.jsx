import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

class ShoppingCartDesktop extends React.Component {
    constructor(props) {
        super();
        this.state = {
            cart: props.cart
        }
    }

    changeQnt = (el, inc) => {
        let cartNow = this.state.cart
        for(let cartEl of cartNow){
            if(el.name === cartEl.name){
                if(!cartEl.qnt){
                    cartEl.qnt = 1
                }
                if((cartEl.qnt + inc) === 0){
                    this.props.removeFromShoppingCart(cartEl)
                }
                cartEl.qnt += inc;
            }
        }
        this.setState({
            cart: cartNow
        })
    }

    generateShoppingCartElements = () => { 
        let allItems = this.state.cart.map((el, key) => {
            if(!el.qnt){el.qnt = 1}
            return (
                <div className="desktop_shopping_cart_el" key={key}>
                    <p>{el.name}</p>
                    <p>{el.price*el.qnt} kr</p>
                    <div className="desktop_shopping_cart_el_change_qnt">
                        <FontAwesomeIcon icon={faMinus} onClick={()=>{this.changeQnt(el, -1)}}/>
                        <p>{el.qnt}</p>
                        <FontAwesomeIcon icon={faPlus} onClick={()=>{this.changeQnt(el, 1)}}/>
                    </div>
                </div>
            )
        })
        return allItems
    }

    render = () => {
        return (
            <div className="desktop_shopping_cart_container desktop_main_content">
                <div className="desktop_shopping_cart_header">
                    <h2>Handlekurv</h2>
                </div>
                <div className="desktop_shopping_cart_output">
                    {this.generateShoppingCartElements()}
                </div>
                <div className="desktop_shopping_cart_buy_now">
                    <p>Buy nowww</p>
                </div>
            </div>
        )
    }
}

export default ShoppingCartDesktop