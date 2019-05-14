import React, {Component} from 'react';
import Select from 'react-select';

class CreateShowroom extends Component{
    constructor(props){
        super(props);

        this.state={
            showroom_name:'',
            address:'',
            owner:'',
            cars:[],
            editMode:false,
            id:'',
        }

        this.saveData = this.saveData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateManufacturer = this.updateManufacturer.bind(this)
    }


    updateManufacturer(){

    }

    componentDidMount(){
        // const queryParams = new URLSearchParams(this.props.location.search);
        // var id = queryParams.get('id');
        // if(id){
            fetch("http://127.0.0.1:8000/car/api/v1/cars/", {
                method: 'GET',
            })
            .then(res => res.json())
            .then(response => {
                var tempList = [];
                response.forEach((car)=>{
                    console.log(car);
                    tempList.push({ value: car.id, label: car.tagline })
                })
                this.setState({
                    cars:tempList,
                });
            })
            .catch(error => console.error('Error:', error));
        
    }


    handleChange(e){
        console.log(e);
    }

    saveData(event){
        event.preventDefault();
        let {showroom_name, address, owner, cars} = this.state;
        // console.log(cars);
        var tempList = [];
        cars.forEach((car)=>{
            console.log(typeof(car.value));
            tempList.push(car.value);
        })
        console.log(tempList);
        let form_data = new FormData();
        form_data.append('showroom_name', showroom_name);
        form_data.append('address', address);
        form_data.append('owner', owner);
        form_data.append('cars', tempList);

        


        fetch("http://127.0.0.1:8000/car/api/v1/showrooms/", {
            method: 'POST',
            body: form_data,
        })
        .then(res => res.json())
        .then(response => {
            console.log(response);
        })
        .catch(error => console.error('Error:', error));


    }

    render(){
        console.log(this.state.cars);
        return <div className='container' style={{margin:'15px'}}>
            <div className='row'>
                <div className='col-md-6'>
                <h3>Create Showroom</h3>
                <label htmlFor="exampleInputEmail1">Showroom name:</label>
                <input
                    name="manufacturer_name" 
                    type="text" 
                    value={this.state.showroom_name}
                    onChange={(e)=>{this.setState({showroom_name:e.target.value})}}
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter manufacturer name"
                />

                <label htmlFor="exampleInputEmail1">Address:</label>
                <input
                    name="manufacturer_name" 
                    type="text" 
                    value={this.state.address}
                    onChange={(e)=>{this.setState({address:e.target.value})}}
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter manufacturer name"
                />
                
                <label htmlFor="exampleInputEmail1">Owner:</label>
                <input
                    name="manufacturer_name" 
                    type="text" 
                    value={this.state.owner}
                    onChange={(e)=>{this.setState({owner:e.target.value})}}
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter manufacturer name"
                />
                <label htmlFor="exampleInputEmail1" style={{marginTop:'10px'}}>Cars:</label>
                <Select
                    isMulti
                    onChange={this.handleChange.bind(this)}
                    options={this.state.cars}
                />
                {this.state.editMode?<a style={{marginTop:'10px'}} href='/manufactorlist' className='btn btn-primary' onClick={this.updateManufacturer.bind(this, this.state.id)}>Update</a>:<button style={{marginTop:'10px'}} href='/mbuttonnufactorlist' className='btn btn-primary' onClick={this.saveData.bind(this)}>Save</button>}
                </div>
            </div>
        </div>
    }
}


export default CreateShowroom;