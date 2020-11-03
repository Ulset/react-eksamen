
import React from 'react'

class ItemComponent extends React.Component {
    constructor(props){
        super();
        this.name = props.item.name;
        this.desc = props.item.desc;
        this.price = props.item.price;
    }

    render = () => {
        return (
            <div className="mobile_item_component">
                
            </div>
        )
    }

}

export default ItemComponent