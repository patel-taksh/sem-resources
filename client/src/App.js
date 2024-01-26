import Navigation from './Components/Navigation/Naviagtion';
import {React, useEffect, useState, Component} from 'react';
import Resources from './Components/Subjects/Resources.js';
import Uploadfiles from './Components/Upload/Upload';
import Home from './Components/Home/Home.js';
import GetFiles from './Components/Files/Getfiles.js';
import "./App.css";
import { BrowserRouter, Routes, Route, Link, useRoutes} from "react-router-dom";
import Subject from './Components/Subjects/Subjects.js';
import Loading from './Components/Loading.js';



class App extends Component {
  render(){
    return (
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path='upload' element={<Uploadfiles />} />
            <Route path='resources'element={<Resources/>}>
              <Route path=':subject' element={<GetFiles/>}/>
            </Route>
          </Route>
          
        </Routes>
      </BrowserRouter>
    )
  }
    
}

export default App;