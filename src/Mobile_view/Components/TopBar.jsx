import React from 'react'

class TopBar extends React.Component {
    constructor(){
        super();
    }

    render = () => {
        return (
            <div className="mobile_topbar">
                <h1>Eivinds</h1>
                <h1>Cafè</h1>
            </div>
        )
    }
}

export default TopBar