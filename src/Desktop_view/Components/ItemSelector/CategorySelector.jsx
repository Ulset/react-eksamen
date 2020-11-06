import React from 'react'

const CategorySelector = (props) => {
    const changeCat = (newCat) => {
        props.changeCat(newCat)
    }
    return (
        <div className="desktop_cat_change">
            <div className={`base_cat_button${props.currCat === "kaffe" ? ' selected' : ''}`} onClick={()=>{changeCat("kaffe")}}>
                <p>Kaffe</p>
            </div>
            <div className={`base_cat_button${props.currCat === "dessert" ? ' selected' : ''}`} onClick={()=>{changeCat("dessert")}}>
                <p>Dessert</p>
            </div>
            <div></div>
            <div className={`base_cat_button${props.currCat === "tidligere_bestillinger" ? ' selected' : ''}`} onClick={()=>{changeCat("tidligere_bestillinger")}}>
                <p>Tidligere bestillinger</p>
            </div>
        </div>
    )
}

export default CategorySelector