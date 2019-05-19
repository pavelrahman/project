import React from 'react'
import Select from 'react-select';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import CardCar from './cardCar';
import carsJSON from '../../data/cars.json';
import showroomsJSON from '../../data/showrooms.json';

let CarCard = (props)=>{
    let images = props.car.fileList.map((image, index)=>{
        let carouselClass = index == '0'?"carousel-item active":"carousel-item"
        return <div className={carouselClass} key={index}>
                    <img className="d-block w-100" src={image} alt="First slide"/>
               </div>
    })

        return <div className='col-md-4'>
        <div className="card" style={{width: '20rem', height:'500px', marginTop: '40px'}}>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {images}
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{props.car.tagline}</h2>
                <p className="card-title"><strong>Model: </strong>{props.car.model.modelCode}</p>
                <p className="card-text"><strong>Mileage:</strong> {props.car.mileage}</p>
                <p className="card-text"><strong>Year:</strong> {props.car.year}</p>
                <p className="card-text"><strong>Status:</strong> {props.car.status?props.car.status:'undefined'}</p>
                {props.showroomId!==''?<button className="btn btn-primary" onClick={props.details.bind(props.car.id)}>Details</button>:null}
            </div>
        </div>
    </div>
}


class CreateCarList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            carList:[],
            showroomChoice:[],
            selectedOption:null,
            showroomId:'',
        }

        this.details = this.details.bind(this);
        this.editModel = this.editModel.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    editModel(id){
        
    }

    details(id, showroomId){
        this.props.history.push({
            pathname: '/cardetails',
            search: '?value=' + id+'-'+showroomId,
            state: {
                details: "value",
                readonlyBoolean: true
            }
        });
    }

    getAllCar(){
        let allShowroom = JSON.parse(localStorage.getItem('showroom'))||[];
        let tempList = [];

        if(allShowroom){
            allShowroom.forEach((showroom, index)=>{
                showroom.showroomCars.forEach((car)=>{
                    tempList.push(car);
                })
            });
        }
        
        return tempList;
    }

    onChangeHandler(e){
        let tempList;
        if(e.value!=='all'){
            let allshowroom = JSON.parse(localStorage.getItem('showroom'));
            let selectedShop = allshowroom[e.value];
            tempList =  selectedShop.showroomCars;
            this.setState({carList:tempList, showroomId:e.value, selectedOption:e});
        }else{
            tempList = this.getAllCar();
            this.setState({carList:tempList, showroomId:'', selectedOption:e});
        }
    }


    componentDidMount(){
        let allShowroom = JSON.parse(localStorage.getItem('showroom'));
        let tempList = this.getAllCar();
        let tempShowroomChoice = [];
        tempShowroomChoice.push({ value: 'all', label: 'all' })
        if(allShowroom){
            allShowroom.forEach((showroom, index)=>{
                tempShowroomChoice.push({ value: index, label: showroom.showroomName });
            });
        }

        this.setState({
            carList:tempList,
            allCars:true,
            showroomChoice:tempShowroomChoice,
        });
    }

    render(){
        let id = this.state.showroomId;
        let self = this;
        const options = [
            { value: 'all', label: 'all' },
            { value: '0', label: 'John Does Showroom' },
            { value: '1', label: '4 wheel Showroom' }
        ];

        let show = this.state.carList.map((car, index)=>{
            return <CarCard showroomId={id} car={car} key={index} details={this.details.bind(this, index, this.state.showroomId)} edit={this.editModel.bind(this, car.id)}/>
        });
        return <div className='container' style={{margin:'10px'}}>
            <Select
                value={this.state.selectedOption}
                onChange={this.onChangeHandler.bind(this)}
                options={this.state.showroomChoice}
            />
            <h1>{this.state.showroom!=null?this.state.showroom.name+ ' Cars':'Cars'}</h1>
            <div className='row'>
                {show}
            </div>
        </div>
    }
}

export default CreateCarList;