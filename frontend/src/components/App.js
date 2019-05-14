import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CarList from './shopManagement/carlist';
import CreateManufacture from './shopManagement/createManufacture';
import CreateManufactureModel from './shopManagement/createManufactureModel';
import CreateCar from './shopManagement/createCar';
import ManufacturerList from './shopManagement/manufacturerList';
import CarModelList from './shopManagement/carModelList';
import CreateCarList from './shopManagement/createCarList';
import CreateShowroom from './shopManagement/createShowroom';
import CarDetails from './shopManagement/carDetails';


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
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          List
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/manufactorlist">Manufactors</a>
          <a className="dropdown-item" href="/modellist">Car Models</a>
          <a className="dropdown-item" href="/carlist">Cars</a>
          <a className="dropdown-item" href="/createcar">Showrooms</a>
          <a className="dropdown-item" href="/create/user">Users</a>
        </div>
      </li>
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Create
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/createmanufactor">Create Manufactor</a>
          <a className="dropdown-item" href="/createmodel">Create Car Model</a>
          <a className="dropdown-item" href="/createshowroom">Create Showroom</a>
          <a className="dropdown-item" href="/createcar">Create Car</a>
          <a className="dropdown-item" href="/create/user">Create User</a>
        </div>
      </li>
      </ul>
    </div>
  </nav>
}


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      manufactorList:[],
      modelList:[],
      ShowroomList:[],
      carList:[]
    }
    this.addCar = this.addCar.bind(this);
    this.addManufacturer = this.addManufacturer.bind(this);
    this.addShowroom = this.addShowroom.bind(this);
    this.addModel = this.addModel.bind(this);
  }

  addCar(){
  
  }

  addManufacturer(object){
    console.log('adding manufacturer');
    console.log(object);
    let tempList = [];
    tempList.push(object);
    this.setState({manufactorList:tempList});
  }

  addShowroom(){

  }

  addModel(){

  }

    render(){

        return <div className='App'>

                <Router>
                    <Route path="/" component={NavBar} />
                    <Route path="/createmanufactor" exact render={()=><CreateManufacture addManufacturer={this.addManufacturer} />} />
                    <Route path="/createmodel" exact render={()=><CreateManufactureModel addModel={this.addModel} manufactorList={this.state.manufactorList}/>} />
                    <Route path="/createcar" exact component={CreateCar} />
                    <Route path="/manufactorlist" exact component={ManufacturerList} />
                    <Route path="/modellist" exact component={CarModelList} />
                    <Route path="/carlist" exact component={CreateCarList} />
                    <Route path="/createshowroom" exact component={CreateShowroom} />
                    <Route path="/cardetails" exact component={CarDetails} />
                </Router>

        </div>
    }
}

export default App;