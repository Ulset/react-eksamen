import React from 'react'

class ItemSelector extends React.Component {
    constructor(props){
        super();
        this.state = {
            items: props.items
        }
    }

    render = () => {
        return (
            <div className="mobile_item_selector">
                
            </div>
        )
    }
}

export default ItemSelector