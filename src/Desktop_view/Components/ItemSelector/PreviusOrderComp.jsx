import React from 'react'

const PreviusOrderComp = (props)=>{
    return (
        <div className="previus_order_element_container">
            <div className="previus_order_element_text_container">
                <h2>Dato: {props.date}</h2>
                <p>Total {props.qnt} varer</p>
                <div></div>
                <div className="mobile_item_price_container">
                <p><b>Pris: {props.price}kr</b></p>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default PreviusOrderComp