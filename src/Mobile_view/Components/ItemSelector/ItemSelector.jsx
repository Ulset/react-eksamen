import React from 'react'
import ItemComponent from './ItemComponent';
import TypeSelector from './TypeSelector';

class ItemSelector extends React.Component {
    constructor(props){
        super();
        this.state = {
            items: props.items,
            cat: 'kaffe'
        }
    }

    handleChange = (type) => {
        this.setState({
            cat: type
        })
    }

    getItems = () => {
        let counter = 0
        let allItems = []
        this.state.items.map(el => {
            counter++;
            if(el.cat === this.state.cat){
                allItems.push(<ItemComponent item={el} key={counter} />)
            }
        })
        return allItems
    }

    render = () => {
        let allItems = this.getItems();
        return (
            <div className="mobile_item_selector">
                <TypeSelector handleCatChange={this.handleChange} selected={this.state.cat}/>
                {allItems}
            </div>
        )
    }
}

export default ItemSelector