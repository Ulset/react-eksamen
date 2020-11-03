import React from 'react'

const TypeSelector = (props) => {
    const selectDes = () => {
        props.handleCatChange('dessert')
    }
    const selectCof = () => {
        props.handleCatChange('kaffe')
    }
    let kaffeSelected = props.selected==='kaffe'
    return (
        <div className="mobile_cat_selector_container">
            <div onClick={selectCof} className={`mobile_selector_button${kaffeSelected ? ' cat_selected' : ''}`}>
                <p>Kaffe</p>
            </div>
            <div onClick={selectDes} className={`mobile_selector_button${!kaffeSelected ? ' cat_selected' : ''}`}>
                <p>Dessert</p>
            </div>
        </div>
    )
}

export default TypeSelector