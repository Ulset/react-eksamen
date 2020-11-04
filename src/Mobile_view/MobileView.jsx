import React from 'react'
import ShoppingCart from './Components/ShoppingCart';
import TopBar from './Components/TopBar'
import Footer from './Components/Footer'
import ItemSelector from './Components/ItemSelector/ItemSelector';

class MobileView extends React.Component {
    constructor(props){
        super();
        this.items = props.items
    }

    render = () => {
        return (
            <div>
                <TopBar />
                <ItemSelector items={this.items}/>
                <Footer />
                <ShoppingCart />
            </div>
        )
    }
}

export default MobileView