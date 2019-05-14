import React from 'react'
import carsJSON from '../../data/cars.json';
import showroomsJSON from '../../data/showrooms.json';

let CarDetailForAllCar = (props)=>{
    var show = false;
    return <div className="container">
                <h1 className="my-4">{props.car.tagline}
                </h1>

                <div className="row">

                    <div className="col-md-7">
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
                    </div>

                    <div className="col-md-4">
                        <h3 className="my-3">Car Details</h3><hr/>
                        <div className='row'>
                            <div className='col-md-6'>
                                <p><strong>HorsePower: </strong>{props.car.horsePower}</p>
                                <p><strong>Propellant: </strong>{props.car.propellant}</p>
                                <p><strong>Transmission: </strong>{props.car.transmission}</p>
                                <p><strong>Price: </strong>{props.car.price}</p>
                            </div>
                            <div className='col-md-6'>
                                <p><strong>Name: </strong>{props.car.tagline}</p>
                                <p><strong>Manufacturer: </strong>{props.car.model.manufactor.name}</p>
                                <p><strong>Model: </strong>{props.car.model.modelCode}</p>
                                <p><strong>Mileage: </strong>{props.car.mileage}</p>
                            </div>
                        </div>
                        
                        {props.show?<div className='row'>
                            <h3 className="my-3">Showroom Details</h3>
                            {props.car.name?<ul>
                                <li><strong>Showroom Name: {}</strong></li>
                                <li><strong>Address: </strong></li>
                                <li><strong>Owner: </strong></li>
                            </ul>:<h6>No showroom details</h6>}
                            
                        </div>:null}
                        <a href="#" onClick={props.hideShow}>{props.show?'Hide ':'Show '}Showroom Details</a>
                    </div>

                </div>
    </div>
}




let CarDetailForShowroomCar = (props)=>{
    return <div className="container">
        <h1>Showroom cars details</h1>
    </div>
}


class CarDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            car:null,
            show:false,
            allcar:false,
        }

        this.hideShow = this.hideShow.bind(this);
    }

    hideShow(){
        this.setState({show:!this.state.show});
    }

    componentDidMount(){
        const queryParams = new URLSearchParams(this.props.location.search);
        var value = queryParams.get('value');
        let id = value.split('-')[0];
        let allcar = value.split('-')[1];
        let showroomId = value.split('-')[2];
        console.log('car :', id);
        console.log('');
        if(allcar === true){
            console.log(allcar, 'if calling');
            console.log(carsJSON[id]);
            this.setState({car:carsJSON[id], allcar:true});
        }else{
            console.log(allcar, 'if calling');
            console.log(showroomsJSON[id]);
            this.setState({car:showroomsJSON[id], allcar:false});

        }
    }



    render(){
        console.log(this.state.car);
        return <div className='container'>
                {this.state.car && this.state.allcar?<CarDetailForAllCar car={this.state.car} hideShow={this.hideShow} show={this.state.show}/>:null}
                {this.state.car && this.state.allcar?null:<CarDetailForShowroomCar car={this.state.car} hideShow={this.hideShow} show={this.state.show}/>}
        </div>
    }
}

export default CarDetails;