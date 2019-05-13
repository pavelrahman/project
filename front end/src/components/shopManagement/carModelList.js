import React from 'react'
import Select from 'react-select';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CardCar from './cardCar';


let ModelCard = (props)=>{
        return <div className='col-md-4'>
            <div className="card" style={{width: '18rem', marginTop: '40px'}}>
                <img className="card-img-top" src={props.model.car_model_image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{props.model.model_code}</h5>
                    <p className="card-text">Type: {props.model.car_type}</p>
                    <button className="btn btn-primary" onClick={props.edit}>Edit</button>
                    <a href='/modellist' className="btn btn-primary" onClick={props.delete} style={{marginLeft:'10px'}}>Delete</a>
                </div>
            </div>
        </div>
}

class CarModelList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modelList:[]
        }

        this.deleteModel = this.deleteModel.bind(this);
        this.editModel = this.editModel.bind(this);
    }

    editModel(id){
        this.props.history.push({
            pathname: '/createmodel',
            search: '?id=' + id,
        });
    }

    deleteModel(id){
        fetch("http://localhost:8000/car/api/v1/models/"+id+"/", {
            method: 'DELETE',
            })
            .then(res => res.json())
            .then(response => {this.setState({})})
            .catch(error => console.error('Error:', error));
    }

    componentDidMount(){
        fetch("http://localhost:8000/car/api/v1/models/", {
            method: 'GET',
        })
        .then(res => res.json())
        .then(response => this.setState({
            modelList:response
        }))
        .catch(error => console.error('Error:', error));
    }

    render(){
        let show = this.state.modelList.map((model, index)=>{
            return <ModelCard model={model} key={index} delete={this.deleteModel.bind(this, model.id)} edit={this.editModel.bind(this, model.id)}/>
        })
        return <div className='container' style={{margin:'10px'}}>
            <h1>Car Models</h1>
            <div className='row'>
                {show}
            </div>
        </div>
    }
}

export default CarModelList;