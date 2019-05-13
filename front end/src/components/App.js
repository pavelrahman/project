import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CarList from './shopManagement/carlist';
import CreateManufacture from './shopManagement/createManufacture';
import CreateManufactureModel from './shopManagement/createManufactureModel';
import CreateCar from './shopManagement/createCar';
import ManufacturerList from './shopManagement/manufacturerList';
import CarModelList from './shopManagement/carModelList';
var Home = ()=>{
    return <div className='container'>THis is home page</div>
}

var NavBar = ()=>{
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          List
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/manufactorlist">Manufactor List</a>
          <a className="dropdown-item" href="/modellist">Car Model List</a>
          <a className="dropdown-item" href="/create/showroom">Car List</a>
          <a className="dropdown-item" href="/createcar">Showroom List</a>
          <a className="dropdown-item" href="/create/user">User List</a>
        </div>
      </li>
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Create
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/createmanufactor">Create Manufactor</a>
          <a className="dropdown-item" href="/createmodel">Create Car Model</a>
          <a className="dropdown-item" href="/create/showroom">Create Showroom</a>
          <a className="dropdown-item" href="/createcar">Create Car</a>
          <a className="dropdown-item" href="/create/user">Create User</a>
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
                    <Route path="/createmanufactor" exact component={CreateManufacture} />
                    <Route path="/createmodel" exact component={CreateManufactureModel} />
                    <Route path="/createcar" exact component={CreateCar} />
                    <Route path="/manufactorlist" exact component={ManufacturerList} />
                    <Route path="/modellist" exact component={CarModelList} />
                </Router>

        </div>
    }
}

export default App;