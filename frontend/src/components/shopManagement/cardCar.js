import React from 'react'


function CarCard(props) {
    return <div className='col-md-4'>
            <div className="card" style={{width: "18rem"}}>
                

            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src='...' className="d-block w-100" alt="No image"/>
                    <div className="carousel-caption">
                        <h1>{props.car.tagline}</h1>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..."/>
                </div>
            </div>
            </div>



                <div className="card-body">
                    <h5>{props.car.tagline}</h5>
                    <h5 className="card-title">{props.car.manufacture}</h5>
                    <p className="card-text">Milage: {props.car.mileage}</p>
                    <p className="card-text">Year: {props.car.year}</p>
                    <p className="card-text">Status: {props.car.mileage===true?'In Stock':'Sold'}</p>
                </div>
            </div>
           </div>
  }

export default CarCard;