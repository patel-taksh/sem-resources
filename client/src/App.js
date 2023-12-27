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

  changeRoutes = (event) => {
    console.log(event.target.innerHTML);
    this.setState({
      route: event.target.innerHTML
    })
  }

   

  render() {
    return (
      <div>
        <Navigation changeRoutes={this.changeRoutes} />
        {this.state.route === "Resources"
          ? <div>
            <div style={{ display: "flex", justifyContent: "center" }} onClick={()=>{alert("Hello")}}>
              <Subject subject='OOPS'/>
              <Subject subject='DE' />
              <Subject subject='P&S' />
              <Subject subject='HW' />
              <Subject subject='EES' />
              <Subject subject='MAT' />
            </div>
          </div>
          : this.state.route === "Upload"
            ?<div>
              <Uploadfiles className="container" />
            </div>
            : console.log}
      </div>
    )
  }
}

export default App;
