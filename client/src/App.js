import Navigation from './Components/Navigation/Naviagtion';
import React from 'react';
import Subject from './Components/Subjects';
import Uploadfiles from './Components/Upload/Upload';
import "./App.css";



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "Home"
    }
  }

changeRoutes = (event) =>{
  console.log(event.target.innerHTML);
  this.setState({
    route: event.target.innerHTML
  })
}

  render() {
    if(this.state.route==="Home"){
      return(
        <div>
          <Navigation changeRoutes={this.changeRoutes}/>
        </div>
      )
    }
    if (this.state.route === "Resources") {
      return (
        <div>
          <Navigation changeRoutes={this.changeRoutes}/>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Subject subject='OOPS' />
            <Subject subject='DE' />
            <Subject subject='P&S' />
            <Subject subject='HW' />
            <Subject subject='EES' />
            <Subject subject='MAT' />
          </div>
        </div>

      )
    }
    if (this.state.route === "Upload") {
      return(
        <div>
        <Navigation changeRoutes={this.changeRoutes}/>
        <Uploadfiles className="container" />
      </div>
      )
    }
  }
}

export default App;
