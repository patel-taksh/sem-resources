import Navigation from './Components/Navigation/Naviagtion';
import React from 'react';
import Resources from './Components/Subjects/Resources.js';
import Uploadfiles from './Components/Upload/Upload';
import Home from './Components/Home/Home.js';
import Hello from './Components/Files/Hello.js';
import "./App.css";
import { BrowserRouter, Routes, Route, Link, useRoutes} from "react-router-dom";
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
    // let app=useRoutes([
    //   {
    //     path: '/', 
    //     element: <Navigation />,
    //     children:[
    //       {path:'upload', element: <Uploadfiles />},
    //       {path:'resources', element: <Resources />}
    //     ]
    //   }
    // ])




    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path='upload' element={<Uploadfiles />} />
            <Route path='resources'element={<Resources/>}>
              <Route path=':subject' element={<Hello/>}/>
            </Route>
          </Route>
          
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
