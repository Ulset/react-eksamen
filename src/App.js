import React from 'react'
import MobileView from './Mobile_view/MobileView'
import './App.css'

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
        {this.state.mobile ? <MobileView /> : <p>Desktop</p>}
      </div>
    )
  }
}

export default App;
