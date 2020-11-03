import React from 'react'
import ShoppingCart from './Components/ShoppingCart';
import TopBar from './Components/TopBar'
import Footer from './Components/Footer'
import ItemSelector from './Components/ItemSelector/ItemSelector';

let items = [
    {
        name: "sanders tiss",
        desc: "Burde kanskje ikke drikke dette",
        price: 80
    }
]


class MobileView extends React.Component {
    constructor(){
        super();
    }

    render = () => {
        return (
            <div>
                <TopBar />
                <ItemSelector items={items}/>
                <Footer />
                <ShoppingCart />
            </div>
        )
    }
}

export default MobileView