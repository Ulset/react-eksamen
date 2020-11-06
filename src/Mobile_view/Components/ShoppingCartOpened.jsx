import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

class ShoppingCartOpened extends React.Component {
    constructor(props){
        super();
        this.state = {
            cart: props.cart,
            buyStatus: 'idle'
        }
        this.setShoppingOpenStatus = (bool) => {
            this.props.setShoppingOpenStatus(bool)
        }
        for(let cartEl of props.cart){
            cartEl.qnt = 1;
        }
    }

    changeQnt = (targEl, incr) => {
        let cartNow = this.state.cart
        cartNow.map((el)=>{
            if(targEl.name === el.name){
                let intAfterRun = el.qnt+incr
                if(!(intAfterRun<1)){
                    el.qnt += incr;
                }else if(intAfterRun<1){
                    this.props.removeFromShoppingCart(el)
                }
            }
        })
        this.setState({
            cart: cartNow
        })
    }

    generateShoppingCartEl = (el, i) => {
        return (
            <div className="mobile_shopping_cart_el" key={i}>
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

    generateThankYouEl = () => {
        return (
            <div className="mobile_shopping_cart_thank_you">
                <h3>Takk for handelen!</h3>
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

    buyHandling = () => {
        this.setState({
            buyStatus: "animation"
        })
        window.setTimeout(()=>{
            this.setState({
                buyStatus: "done",
                cart: []
            })
            this.props.emptyShoppingCart()
        }, 3500)
    }

    buyButton = () => {
        if(this.state.buyStatus === 'idle'){
            return (
                <div className="mobile_shopping_cart_content_total_button" onClick={this.buyHandling}>
                    <p>KJØP</p>
                </div>
            )
        }
        else if(this.state.buyStatus == "animation"){
            return <div className="mobile_shopping_cart_content_total_button spinning"></div>
        }
        else if(this.state.buyStatus == "done"){
            return <div className="mobile_shopping_cart_content_total_button done"></div>
        }
    }

    render = () => {
        let allItems = this.state.cart.map((el, i) => {
            return this.generateShoppingCartEl(el, i)
        })
        let totalPrice = this.getShoppingCartTotal();
        return (
            <div className="mobile_shopping_cart_opened_container">
                <div className="mobile_shopping_cart_header">
                    <FontAwesomeIcon icon={faTimes} onClick={()=>{this.setShoppingOpenStatus(false)}} className="mobile_shopping_cart_opened_close_button" />
                </div>
                <div className="mobile_shopping_cart_content">
                    <div className="mobile_shopping_cart_content_items">
                        {this.state.buyStatus !== "done" ? allItems : this.generateThankYouEl()}
                    </div>
                    <div className="mobile_shopping_cart_content_total">
                        <div className="mobile_shopping_cart_content_total_text">
                            <p><b>Total sum</b></p>
                            <p><b>{totalPrice} kr</b></p>
                        </div>
                        {this.buyButton()}
                    </div>
                </div>
            </div>
        )
    }
}

export default ShoppingCartOpened