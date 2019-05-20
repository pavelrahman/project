import React from 'react'
import carsJSON from '../../data/cars.json';
import showroomsJSON from '../../data/showrooms.json';

let CarDetailForAllCar = (props)=>{
    var show = false;
    let images = props.car.fileList.map((image, index)=>{
        let carouselClass = index == '0'?"carousel-item active":"carousel-item"
        return <div className={carouselClass} key={index}>
                    <img className="d-block w-100" src={image} alt="First slide"/>
               </div>
    });
    return <div className="container">
                <h1>{props.car.tagline}</h1>

                <div className="row">

                    <div className="col-md-7">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                {images}
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className='row'>
                            <div className='col-md-12'>
                                <h3><em>Car Details</em></h3>
                                <p><strong>Manufacturer: </strong>{props.car.model.modelMfg.mfgName}</p>
                                <p><strong>Model: </strong>{props.car.model.modelCode}</p>
                                <p><strong>Transmission: </strong>{props.car.transmission.value}</p>
                                <p><strong>Year: </strong>{props.car.year}</p>
                                <p><strong>Mileage: </strong>{props.car.mileage}</p>
                                <p><strong>Status: </strong>{props.car.status?'In Stock':'Out Of Stock'}</p>
                                <p><strong>Price: </strong>{props.car.price}</p>
                            </div>
                        </div>
                        {props.show?<div className='row'>
                            <h3>Showroom Details</h3>
                            <ul>
                                <li><strong>Name: </strong>{props.showroom.showroomName}</li>
                                <li><strong>Owner: </strong>{props.showroom.showroomOwner}</li>
                                <li><strong>Address: </strong>{props.showroom.showroomAddress}</li>
                            </ul>
                           
                        </div>:null}
                        <a  href='#' onClick={props.hideShow}>{props.show?'Hide Details':'Show Details'}</a> 
                    </div>
                </div>
            </div>
}






class CarDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            car:null,
            showroom:null,
            show:false,
        }

        this.hideShow = this.hideShow.bind(this);
    }

    hideShow(){
        this.setState({show:!this.state.show});
    }

    componentDidMount(){
        const queryParams = new URLSearchParams(this.props.location.search);
        var value = queryParams.get('value');
        let tokens = value.split('-');
        let carId = tokens[0];
        let showroomId = tokens[1];
        


        let allshowroom = JSON.parse(localStorage.getItem('showroom'));
        let showroom = allshowroom[showroomId];
        let car = allshowroom[showroomId].showroomCars[carId];
        this.setState({car:car, showroom:showroom});
    }



    render(){
        return <div className='container'>
            {this.state.car&&this.state.showroom?<CarDetailForAllCar car={this.state.car} showroom={this.state.showroom} hideShow={this.hideShow} show={this.state.show}/>:null}
        </div>
    }
}

export default CarDetails;