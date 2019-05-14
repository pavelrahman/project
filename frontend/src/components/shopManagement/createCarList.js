import React from 'react'
import Select from 'react-select';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CardCar from './cardCar';
import carsJSON from '../../data/cars.json';
import showroomsJSON from '../../data/showrooms.json';

let CarCard = (props)=>{
    // console.log(props.car);
        return <div className='col-md-4'>
        <div className="card" style={{width: '20rem', height:'500px', marginTop: '40px'}}>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={props.car.carImages[0].img} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={props.car.carImages[1].img} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={props.car.carImages[2].img} alt="Third slide"/>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{props.car.model.manufactor.name+' '+props.car.model.modelCode}</h2>
                <p className="card-text"><strong>Mileage:</strong> {props.car.mileage}</p>
                <p className="card-text"><strong>Year:</strong> {props.car.year}</p>
                <p className="card-text"><strong>Status:</strong> {props.car.status?props.car.status:'undefined'}</p>
                <button className="btn btn-primary" onClick={props.details.bind(props.car.id)}>Details</button>
            </div>
        </div>
    </div>
}

let ShowroomCard = (props)=>{
    let id = props.car.car.id;
    console.log(id);
    return <div className='col-md-4'>
    <div className="card" style={{width: '20rem', height:'500px', marginTop: '40px'}}>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={props.car.car.carImages[0].img} alt="First slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={props.car.car.carImages[1].img} alt="Second slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={props.car.car.carImages[2].img} alt="Third slide"/>`
                </div>
            </div>
        </div>
        <div className="card-body">
            <h2 className="card-title">{props.car.car.model.manufactor.name+' '+props.car.car.model.modelCode}</h2>
            <p className="card-text"><strong>Mileage:</strong> {props.car.car.mileage}</p>
            <p className="card-text"><strong>Year:</strong> {props.car.car.year}</p>
            <p className="card-text"><strong>Status:</strong> {props.car.car.status?props.car.car.status:'undefined'}</p>
            <button className="btn btn-primary" onClick={props.details.bind(id)}>Details</button>
        </div>
    </div>
</div>
}

class CreateCarList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            carList:[],
            selectedOption:null,
            showroom:null,
            allCars:false,
            showroomId:'',
        }

        this.details = this.details.bind(this);
        this.editModel = this.editModel.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    editModel(id){
        
    }

    details(id, allcars, showroomId){
        console.log(showroomId);
        this.props.history.push({
            pathname: '/cardetails',
            search: '?value=' + id+'-'+allcars+'-'+showroomId,
            state: {
                details: "value",
                readonlyBoolean: true
            }
        });
    }

    onChangeHandler(e){
        if(e.label == 'all'){
            this.setState({selectedOption:e, allCars:true});
            this.setState({
                carList:carsJSON,
            })
            console.log('showing all car');
        }else if(e.label == '4 wheel Showroom'){
            this.setState({selectedOption:e, allCars:false});

            this.setState({carList:showroomsJSON[e.value].cars, showroom:showroomsJSON[e.value], showroomId:showroomsJSON[e.value].id});
        }else if(e.label == 'John Does Showroom'){
            this.setState({selectedOption:e, allCars:false});
            this.setState({carList:showroomsJSON[e.value].cars, showroom:showroomsJSON[e.value], showroomId:showroomsJSON[e.value].id});
        }
    }

    componentDidMount(){
        this.setState({
            carList:carsJSON,
            allCars:true,
        })
    }

    render(){
        console.log(this.state.showroom);
        let self = this;
        const options = [
            { value: 'all', label: 'all' },
            { value: '0', label: 'John Does Showroom' },
            { value: '1', label: '4 wheel Showroom' }
        ];
        let show = this.state.carList.map((car, index)=>{
            console.log(car)
            // return <CarCard car={car} key={index} delete={this.details.bind(this, car.id)} edit={this.editModel.bind(this, car.id)}/>
            return this.state.allCars?<CarCard car={car} key={index} details={this.details.bind(this, car.id, this.state.allCars)} edit={this.editModel.bind(this, car.id)}/>:<ShowroomCard car={car} key={index} details={this.details.bind(this, car.car.id, this.state.allCars, this.state.showroomId)} edit={this.editModel.bind(this, car.id)}/>
        });
        return <div className='container' style={{margin:'10px'}}>
            <Select
                value={this.state.selectedOption}
                onChange={this.onChangeHandler.bind(this)}
                options={options}
            />
            <h1>{this.state.showroom!=null?this.state.showroom.name+ ' Cars':'Cars'}</h1>
            <div className='row'>
                {show}
            </div>
        </div>
    }
}

export default CreateCarList;