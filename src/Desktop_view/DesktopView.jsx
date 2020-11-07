import React from 'react'
import ItemSelectorDesktop from './Components/ItemSelector/ItemSelectorDesktop';
import WorkerTab from './Components/WorkerTab'
import ShoppingCartDesktop from './Components/ShoppingCartDesktop'


class DesktopView extends React.Component {
    constructor(props){
        super();
        this.state = {
            shoppingCart: []
        }
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
            <div className="desktop_view_body">
                <div className="desktop_view_content_container">
                    <ItemSelectorDesktop  
                        items={this.props.items}
                        addToCart={this.addToShoppingCart}
                        removeFromCart={this.removeFromShoppingCart} 
                        cart={this.state.shoppingCart} />
                    <WorkerTab  />
                    <ShoppingCartDesktop  
                        cart={this.state.shoppingCart} 
                        removeFromShoppingCart={this.removeFromShoppingCart}
                        emptyShoppingCart={this.emptyShoppingCart}/>
                </div>
            </div>
        )
    }
}

export default DesktopView