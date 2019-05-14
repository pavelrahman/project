import React from 'react'
import Select from 'react-select';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CardCar from './cardCar';
import modelsJSON from '../../data/models.json';

let ModelCard = (props)=>{
        return <div className='col-md-4'>
        <div className="card" style={{width: '20rem', height:'500px', marginTop: '40px'}}>
            <img className="card-img-top" style={{width:'200px', margin:'50px'}} src={props.model.carModelImage} alt="Card image cap"/>
            <div className="card-body">
                <h2 className="card-title">{props.model.manufactor.name+' '+props.model.modelCode}</h2>
                <p className="card-text"><strong>Country:</strong> {props.model.manufactor.country}</p>
                <button className="btn btn-primary" onClick={props.edit}>Edit</button>
                <a href='/manufactorlist' className="btn btn-primary" onClick={props.delete} style={{marginLeft:'10px'}}>Delete</a>
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
        
    }

    deleteModel(id){
        
    }

    componentDidMount(){
        this.setState({modelList:modelsJSON});
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