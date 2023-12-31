import Navigation from './Components/Navigation/Naviagtion';
import React from 'react';
import Resources from './Components/Subjects/Resources.js';
import Uploadfiles from './Components/Upload/Upload';
import Home from './Components/Home/Home.js';
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Subject from './Components/Subjects/Subjects.js';


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
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path='upload' element={<Uploadfiles />} />
            <Route path='resources'element={<Resources/>}>
              {/* <Route path="de" target='_blank' element={<Subject subject="DE" />}/> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
