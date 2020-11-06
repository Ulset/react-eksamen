import React from 'react'
import ShoppingCart from './Components/ShoppingCart';
import TopBar from './Components/TopBar'
import Footer from './Components/Footer'
import ItemSelector from './Components/ItemSelector/ItemSelector';

class MobileView extends React.Component {
    constructor(props){
        super();
        this.state = {
            shoppingCart: []
        }
        this.items = props.items
    }


    addToShoppingCart = (itemEl) => {
        let cartNow = this.state.shoppingCart
        cartNow.push(itemEl)
        this.setState({
            shoppingCart: cartNow
        })
    }

    removeFromShoppingCart = (itemEl) => {
        let cartNow = this.state.shoppingCart
        cartNow.map((el, index) => {
            if(itemEl.name == el.name){
                cartNow.splice(index, 1)
            }
        })
        this.setState({
            shoppingCart: cartNow
        })
    }

    emptyShoppingCart = () => {
        this.setState({
            shoppingCart: []
        })
    }

    render = () => {
        return (
            <div className="mobile_view_body">
                <TopBar />
                <ItemSelector 
                    items={this.items} 
                    addToCart={this.addToShoppingCart} 
                    removeFromCart={this.removeFromShoppingCart} 
                    cart={this.state.shoppingCart} />
                <Footer />
                <ShoppingCart 
                    cart={this.state.shoppingCart} 
                    removeFromShoppingCart={this.removeFromShoppingCart}
                    emptyShoppingCart={this.emptyShoppingCart} />
            </div>
        )
    }
}

export default MobileView