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

    render = () => {
        let counter = 0
        let allItems = this.state.items.map(function(el){
            counter++;
            return <ItemComponent item={el} key={counter} />
        })
        return (
            <div className="mobile_item_selector">
                <TypeSelector handleCatChange={this.handleChange} selected={this.state.cat}/>
                {allItems}
            </div>
        )
    }
}

export default ItemSelector