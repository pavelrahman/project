import React from 'react'
import Select from 'react-select';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CardCar from './cardCar';
import manufcturerJSON from '../../data/manufacturer.json';

let ManufacturerCard = (props)=>{
        return <div className='col-md-4'>
            <div className="card" style={{width: '20rem', height:'500px', marginTop: '40px'}}>
                <img className="card-img-top" style={{width:'200px', margin:'50px'}} src={props.manufacturer.logo} alt="Card image cap"/>
                <div className="card-body">
                    <h2 className="card-title">{props.manufacturer.name}</h2>
                    <p className="card-text"><strong>Country:</strong> {props.manufacturer.country}</p>
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
        this.searchField.bind(this);
    }

    editManufacturer(id){
        this.props.history.push({
            pathname: '/createmanufactor',
            search: '?id=' + id,
        });
    }

    searchField(e){
        let {manufacturerList} = this.state;
        let input = e.target.value.toLowerCase();
        if(input){
            console.log(typeof(input));
            let filteredList = [];
            manufcturerJSON.forEach((manufacturer, index)=>{
                // console.log(input.includes(manufacturer.name.toLowerCase()));
                if(manufacturer.name.toLowerCase().includes(input)){
                    filteredList.push(manufacturer);
                }
            });
            this.setState({manufacturerList:filteredList});

        }else{
            console.log(false);
        }
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
        console.log(manufcturerJSON);
        this.setState({
            manufacturerList: manufcturerJSON
        })

    }

    render(){
        let show = this.state.manufacturerList.map((manufacturer, index)=>{
            return <ManufacturerCard manufacturer={manufacturer} key={index} delete={this.deleteManufacturer.bind(this, manufacturer.id)} edit={this.editManufacturer.bind(this, manufacturer.id)}/>
        })
        return <div className='container' style={{margin:'10px'}}>
            <input
                style={{marginTop:'40px', marginBottom:'40px'}}
                name="manufacturer_name" 
                type="text" 
                value={this.state.manufacturer_name}
                onChange={this.searchField.bind(this)}
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="You Can Search Here"
            />
            <h1>Car Manufacturers</h1>
            <div className='row'>
                {show}
            </div>
        </div>
    }
}

export default ManufacturerList;