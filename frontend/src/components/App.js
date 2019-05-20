/*
    *In this js file mfg stands for manufacturer.
*/

import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateMfg from './shopManagement/createMfg';
import CreateMfgModel from './shopManagement/createMfgModel';
import CreateCar from './shopManagement/createCar';
import MfgList from './shopManagement/mfgList';
import CarModelList from './shopManagement/carModelList';
import CreateCarList from './shopManagement/createCarList';
import CreateShowroom from './shopManagement/createShowroom';
import CarDetails from './shopManagement/carDetails';
import ShowroomList from './shopManagement/showroomList';

var Home = ()=>{
    return <div className='container'>THis is home page</div>
}

var NavBar = ()=>{
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href={'/carlist'}>Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href={'/carlist'}>Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          List
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/manufacturerlist">Manufacturer</a>
          <a className="dropdown-item" href="/carlist">Cars</a>
        </div>
      </li>
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Add
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/createmanufacturer">Manufactor</a>
          <a className="dropdown-item" href="/createmodel">Model</a>
          <a className="dropdown-item" href="/createcar">Car</a>
          <a className="dropdown-item" href="/createshowroom">Showroom</a>
        </div>
      </li>
      </ul>
    </div>
  </nav>
}


class App extends React.Component{

  render(){
    return <div className='App'>
              <Router>
                  <Route path="/" component={NavBar} />
                  <Route path="/createmanufacturer" exact component={CreateMfg} />
                  <Route path="/createmodel" component={CreateMfgModel}/>
                  <Route path="/createcar" exact component={CreateCar} />
                  <Route path="/createshowroom" exact component={CreateShowroom} />
                  <Route path="/manufacturerlist" exact component={MfgList} />
                  <Route path="/modellist" exact component={CarModelList} />
                  <Route path="/carlist" exact component={CreateCarList} />
                  <Route path="/showroomlist" exact component={ShowroomList} />
                  <Route path="/cardetails" exact component={CarDetails} />
              </Router>

        </div>
    }
}

export default App;