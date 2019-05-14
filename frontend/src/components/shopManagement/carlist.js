import React from 'react'
import Select from 'react-select';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CardCar from './cardCar';


class CarList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            carList:[]
        }
    }



    componentDidMount(){
        let carlist = [
            {
                manufacture:'Tata',
                tagline:'Tata Ulto',
                model:'Ulto 8680',
                mileage:'119',
                year:'2010',
                status:false,
                transmission:'manual',
                price:'1200',
                horsepower:'1000',
                propellant:'disel',
            },
            {
                manufacture:'Tata',
                tagline:'Tata Nano',
                model:'Nano 680',
                mileage:'144',
                year:'2011',
                status:false,
                transmission:'auto',
                price:'1200',
                horsepower:'1000',
                propellant:'disel',
            }
        ]

        this.setState({
            carList:carlist,
        });
    }

    render(){
        const options = [
            { value: 'toyota', label: 'Toyota' },
            { value: 'corolla', label: 'Corolla' },
            { value: 'land rover', label: 'Land Rover' }
          ];
        
        let cards = this.state.carList.map((car, index)=>{
            return <CardCar car={car} key={index}/>
        })
        return <div className='container' style={{margin:'10px'}}>
            
            <Select
                // value={selectedOption}
                // onChange={this.handleChange}
                options={options}
            />
            <h1>All Cars</h1>
            <div className='row'>
                {cards}
            </div>
        </div>
    }
}

export default CarList;