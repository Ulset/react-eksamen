import React from 'react'
import MobileView from './Mobile_view/MobileView'
import DesktopView from './Desktop_view/DesktopView'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './Mobile_view.css'
import './Desktop_view.css'
import items from './allItems'

class App extends React.Component {
  constructor(){
    super();
    const mql = window.matchMedia('(max-width: 600px)')
    this.state = {
      mobile: mql.matches
    }
    mql.addEventListener('change', (e)=>{
      let mobileView = e.matches;
      this.setState({
        mobile: mobileView
      })
    })
  }



  render = () => {
    return (
      <div>
        {this.state.mobile ? <MobileView items={items}/> : <DesktopView items={items}/>}
      </div>
    )
  }
}

export default App;
