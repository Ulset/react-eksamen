import React from 'react'
import ShoppingCart from './Components/ShoppingCart';
import TopBar from './Components/TopBar'
import Footer from './Components/Footer'
import ItemSelector from './Components/ItemSelector';


class MobileView extends React.Component {
    constructor(){
        super();
    }

    render = () => {
        return (
            <div>
                <TopBar />
                <ItemSelector />
                <Footer />
                <ShoppingCart />
            </div>
        )
    }
}

export default MobileView