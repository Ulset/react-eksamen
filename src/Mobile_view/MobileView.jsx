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
                cartNow.pop(index)
            }
        })
        this.setState({
            shoppingCart: cartNow
        })
    }


    render = () => {
        return (
            <div>
                <TopBar />
                <ItemSelector items={this.items} addToCart={this.addToShoppingCart} removeFromCart={this.removeFromShoppingCart}/>
                <Footer />
                <ShoppingCart cart={this.state.shoppingCart} />
            </div>
        )
    }
}

export default MobileView