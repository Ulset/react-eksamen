import React from 'react'

const TypeSelector = (props) => {
    const selectDes = () => {
        props.handleCatChange('dessert')
    }
    const selectCof = () => {
        props.handleCatChange('kaffe')
    }
    return (
        <div className="mobile_cat_selector_container">
            <div onClick={selectCof} className="mobile_selector_button">
                <b><h4>Kaffe</h4></b>
            </div>
            <div onClick={selectDes} className="mobile_selector_button">
                <b><h4>dessert</h4></b>
            </div>
        </div>
    )
}

export default TypeSelector