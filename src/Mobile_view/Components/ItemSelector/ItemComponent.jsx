
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class ItemComponent extends React.Component {
    constructor(props){
        super();
        this.item = props.item
        this.addToCartFunc = (itemEl) => {
            props.addToCartFunc(itemEl)
        }
        this.removeFromCart = (itemEl) => {
            props.removeFromCart(itemEl)
        }
    }

    handleClick = () => {
        if(!this.props.isPlacedInCart){
            this.addToCartFunc(this.item)
        }else{
            this.removeFromCart(this.item)
        }
    }

    render = () => {
        return (
            <div className="mobile_item_component">
                <div className="mobile_item_component_picture_container">
                    <img src={this.item.img}/>
                </div>
                <div className="mobile_item_component_info_container">
                    <h2>{this.item.name}</h2>
                    <p>{this.item.desc}</p>
                    <div></div>
                    <div className="mobile_item_price_container">
                        <p><b>Pris: {this.item.price}</b></p>
                        <div className={`mobile_item_price_container_add_button${this.props.isPlacedInCart ? ' clicked' : ''}`} onClick={this.handleClick}>
                            <FontAwesomeIcon icon={faPlus} size="2x" className="mobile_add_to_cart_icon" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ItemComponent