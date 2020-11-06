import React from 'react'
import ItemSelectorDesktop from './Components/ItemSelector/ItemSelectorDesktop';
import WorkerTab from './Components/WorkerTab'
import ShoppingCartDesktop from './Components/ShoppingCartDesktop'


class DesktopView extends React.Component {
    constructor(props){
        super();
    }

    render = () => {
        return (
            <div className="desktop_view_body">
                <div className="desktop_view_content_container">
                    <ItemSelectorDesktop  items={this.props.items}/>
                    <WorkerTab  />
                    <ShoppingCartDesktop  />
                </div>
            </div>
        )
    }
}

export default DesktopView