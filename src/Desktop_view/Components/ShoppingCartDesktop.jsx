import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

class ShoppingCartDesktop extends React.Component {
    constructor(props) {
        super();
        this.state = {
            cart: props.cart,
            buyStatus: 'idle'
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

    componentDidUpdate = () => {
        if(this.state.buyStatus === 'done'){
            if(this.state.cart.length > 0){
                this.setState({
                    buyStatus: 'idle'
                })
            }
        }
    }

    generateThankYou = () => {
        return (
            <div className="desktop_shopping_cart_el">
                <p></p>
                <p>Takk:)</p>
                <p></p>
            </div>
        )
    }

    generateBuyNowButton = () => {
        let buyState = this.state.buyStatus;
        if(buyState == 'idle'){
            return (
                <div className="desktop_shopping_cart_buy_now_button" onClick={this.handleBuyNow}>
                    <p>KJØP</p>
                </div>
            )
        }
        else if(buyState == 'spinning'){
            return <div className="desktop_shopping_cart_buy_now_button spinning"></div>
        }
        else if(buyState == 'done'){
            return <div className="desktop_shopping_cart_buy_now_button done"></div>
        }
    }

    handleBuyNow = () => {
        this.setState({
            buyStatus:  'spinning'
        })
        window.setTimeout(() => {
            this.props.emptyShoppingCart()
            this.setState({
                buyStatus: 'done',
                cart: this.props.cart
            })
        }, 2500)
    }

    render = () => {
        return (
            <div className="desktop_shopping_cart_container desktop_main_content">
                <div className="desktop_shopping_cart_header">
                    <h2>Handlekurv</h2>
                </div>
                <div className="desktop_shopping_cart_output">
                    {this.state.buyStatus !== 'done' ? this.generateShoppingCartElements() : this.generateThankYou()}
                </div>
                <div className="desktop_shopping_cart_buy_now">
                    {this.generateBuyNowButton()}
                </div>
            </div>
        )
    }
}

export default ShoppingCartDesktop