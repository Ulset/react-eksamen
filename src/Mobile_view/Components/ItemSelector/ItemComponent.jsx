
import React from 'react'

class ItemComponent extends React.Component {
    constructor(props){
        super();
        this.item = props.item
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
                    <p><b>kr: {this.item.price}</b></p>
                </div>
            </div>
        )
    }

}

export default ItemComponent