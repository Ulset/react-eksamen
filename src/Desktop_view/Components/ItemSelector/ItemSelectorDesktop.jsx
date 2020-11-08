import React from 'react'
import CategorySelector from './CategorySelector';
import ItemComponent from './ItemComponent'
import PreviusOrderComp from './PreviusOrderComp';

let prevOrders = [
    {
        date: "8.11.2020",
        qnt: 5,
        price: 234
    },
    {
        date: "8.11.2020",
        qnt: 3,
        price: 612
    },
    {
        date: "7.11.2020",
        qnt: 7,
        price: 341
    },
    {
        date: "7.11.2020",
        qnt: 1,
        price: 120
    },
    {
        date: "6.11.2020",
        qnt: 2,
        price: 180
    }
]

class ItemSelectorDesktop extends React.Component {
    constructor(props){
        super();
        this.state = {
            cat: "kaffe"
        }
    }

    getItems = ()=> {
        return this.props.items.map((el, key) => {
            let isPLacedInCart = this.props.cart.includes(el);
            if(this.state.cat == el.cat){
                return <ItemComponent item={el} key={key} addToCartFunc={this.props.addToCart} removeFromCart={this.props.removeFromCart} isPlacedInCart={isPLacedInCart}/>
            }
        })
    }

    getPrevOrders = () => {
        let output = []
        for(let prevEl of prevOrders){
            output.push(<PreviusOrderComp date={prevEl.date} qnt={prevEl.qnt} price={prevEl.price}/>)
        }
        console.log(output)
        return output
    }

    changeCat = (newCat) => {
        this.setState({
            cat: newCat
        })
    }

    render = () => {
        return (
            <div className="desktop_item_selector_container desktop_main_content">
                <CategorySelector currCat={this.state.cat} changeCat={this.changeCat} />
                <div className="desktop_item_components_container">
                    {this.state.cat !== "tidligere_bestillinger" ? this.getItems() : this.getPrevOrders()}
                </div>
            </div>
        )
    }
}

export default ItemSelectorDesktop