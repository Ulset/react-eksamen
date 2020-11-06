import React from 'react'
import CategorySelector from './CategorySelector';
import ItemComponent from './ItemComponent'

class ItemSelectorDesktop extends React.Component {
    constructor(){
        super();
    }

    render = () => {
        return (
            <div className="desktop_item_selector_container desktop_main_content">
                <CategorySelector />
                <div className="desktop_item_components_container">
                    <ItemComponent item={this.props.items[0]}/>
                    <ItemComponent item={this.props.items[0]}/>
                    <ItemComponent item={this.props.items[0]}/>
                    <ItemComponent item={this.props.items[0]}/>
                    <ItemComponent item={this.props.items[0]}/>
                    <ItemComponent item={this.props.items[0]}/>
                    <ItemComponent item={this.props.items[0]}/>
                    <ItemComponent item={this.props.items[0]}/>
                    <ItemComponent item={this.props.items[0]}/>
                    <ItemComponent item={this.props.items[0]}/>
                </div>
            </div>
        )
    }
}

export default ItemSelectorDesktop