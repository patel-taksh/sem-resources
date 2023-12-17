import Navigation from './Components/Navigation/Naviagtion';
import React from 'react';
import Subject from './Components/Subjects';
import Uploadfiles from './Components/Upload';
import "./App.css";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "Upload"
    }
  }

  render() {
    if(this.state.route==="Home"){
      return(
        <div>
          <Navigation />
        </div>
      )
    }
    if (this.state.route === "Resources") {
      return (
        <div>
          <Navigation />
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
        <Navigation />
        <Uploadfiles className="container" />
      </div>
      )
    }
  }
}

export default App;
