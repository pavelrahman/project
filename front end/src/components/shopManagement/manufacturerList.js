import React from 'react'
import Select from 'react-select';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CardCar from './cardCar';


let ManufacturerCard = (props)=>{
        return <div className='col-md-4'>
            <div className="card" style={{width: '18rem', marginTop: '40px'}}>
                <img className="card-img-top" src={props.manufacturer.manufacturer_logo} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{props.manufacturer.manufacturer_name}</h5>
                    <p className="card-text">Country: {props.manufacturer.country}</p>
                    <button className="btn btn-primary" onClick={props.edit}>Edit</button>
                    <a href='/manufactorlist' className="btn btn-primary" onClick={props.delete} style={{marginLeft:'10px'}}>Delete</a>
                </div>
            </div>
        </div>
}

class ManufacturerList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            manufacturerList:[]
        }

        this.deleteManufacturer = this.deleteManufacturer.bind(this);
        this.editManufacturer = this.editManufacturer.bind(this);
    }

    editManufacturer(id){
        this.props.history.push({
            pathname: '/createmanufactor',
            search: '?id=' + id,
        });
    }

    deleteManufacturer(id){
        fetch("http://localhost:8000/car/api/v1/manufacturer/"+id+"/", {
            method: 'DELETE',
            })
            .then(res => res.json())
            .then(response => {this.setState({})})
            .catch(error => console.error('Error:', error));
    }

    componentDidMount(){
        fetch("http://127.0.0.1:8000/car/api/v1/manufacturer/", {
            method: 'GET',
        })
        .then(res => res.json())
        .then(response => this.setState({
            manufacturerList:response
        }))
        .catch(error => console.error('Error:', error));
    }

    render(){
        let show = this.state.manufacturerList.map((manufacturer, index)=>{
            return <ManufacturerCard manufacturer={manufacturer} key={index} delete={this.deleteManufacturer.bind(this, manufacturer.id)} edit={this.editManufacturer.bind(this, manufacturer.id)}/>
        })
        return <div className='container' style={{margin:'10px'}}>
            <h1>Car Manufacturers</h1>
            <div className='row'>
                {show}
            </div>
        </div>
    }
}

export default ManufacturerList;