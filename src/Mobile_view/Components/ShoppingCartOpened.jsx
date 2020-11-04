import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { getFID } from 'web-vitals';

class ShoppingCartOpened extends React.Component {
    constructor(props){
        super();
        this.setShoppingOpenStatus = (bool) => {
            props.setShoppingOpenStatus(bool)
        }
        this.state = {
            cart: []
        }
        props.cart.map((el)=>{
            this.state.cart.push({
                name: el.name,
                price: el.price,
                qnt: 1
            })
        })
    }

    changeQnt = (targEl, incr) => {
        let cartNow = this.state.cart
        cartNow.map((el)=>{
            if(targEl.name === el.name){
                if(!(el.qnt+incr<1)){
                    el.qnt += incr;
                }
            }
        })
        this.setState({
            cart: cartNow
        })
    }

    generateShoppingCartEl = (el) => {
        return (
            <div className="mobile_shopping_cart_el">
                <p>{el.name}</p>
                <p>{el.price*el.qnt} kr</p>
                <div className="mobile_shopping_cart_el_change_qnt">
                    <FontAwesomeIcon icon={faMinus} onClick={()=>{this.changeQnt(el, -1)}}/>
                    <p>{el.qnt}</p>
                    <FontAwesomeIcon icon={faPlus} onClick={()=>{this.changeQnt(el, 1)}}/>
                </div>
            </div>
        )
    }

    getShoppingCartTotal = () => {
        let total = 0;
        this.state.cart.map((el) => {
            total += el.price*el.qnt;
        })
        return total;
    }

    render = () => {
        let allItems = this.state.cart.map((el) => {
            return this.generateShoppingCartEl(el)
        })
        let totalPrice = this.getShoppingCartTotal();
        return (
            <div className="mobile_shopping_cart_opened_container">
                <div className="mobile_shopping_cart_header">
                    <FontAwesomeIcon icon={faTimes} onClick={()=>{this.setShoppingOpenStatus(false)}} className="mobile_shopping_cart_opened_close_button" />
                </div>
                <div className="mobile_shopping_cart_content">
                    <div className="mobile_shopping_cart_content_items">
                        {allItems}
                    </div>
                    <div className="mobile_shopping_cart_content_total">
                        <div className="mobile_shopping_cart_content_total_text">
                            <p>Total sum</p>
                            <p>{totalPrice} kr</p>
                        </div>
                        <div className="mobile_shopping_cart_content_total_button">
                            <p>Kjøp</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShoppingCartOpened