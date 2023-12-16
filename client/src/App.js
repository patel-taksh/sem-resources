import Navigation from './Components/Navigation/Naviagtion';
import React from 'react';
import Subject from './Components/Subjects';
import Uploadfiles from './Components/Upload';
import "./App.css";


class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navigation />
        {/* <div style={{display:"flex", justifyContent:"center"}}>
          <Subject subject='OOPS' />
          <Subject subject='DE' />
          <Subject subject='P&S' />
          <Subject subject='HW' />
          <Subject subject='EES' />
          <Subject subject='MAT' />
        </div> */}
        <Uploadfiles className="container" />

      </div>

    )
  }
}

export default App;