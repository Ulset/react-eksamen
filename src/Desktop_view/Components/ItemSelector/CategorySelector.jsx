import React from 'react'

const CategorySelector = (props) => {
    return (
        <div className="desktop_cat_change">
            <div className="base_cat_button selected"><p>Kaffe</p></div>
            <div className="base_cat_button"><p>Dessert</p></div>
            <div></div>
            <div className="base_cat_button"><p>Tidligere bestillinger</p></div>
        </div>
    )
}

export default CategorySelector