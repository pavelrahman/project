import React, {Component} from 'react';
import Select from 'react-select';

class CreateCar extends Component{
    constructor(props){
        super(props);

        this.state={
            manufacturer:'',
            tagline:'',
            model:'',
            mileage:'',
            year:'',
            status:false,
            transmission:'',
            price:'',
            horse_power:'',
            propellant:'',
            car_image:'',

            id:'',
            editMode:false,
            manufacturerList:[],
            modelList:[]
        }


        this.saveData = this.saveData.bind(this);
        this.onFileSelect = this.onFileSelect.bind(this);
        this.update = this.update.bind(this);
    }


    update(id){
        console.log('update is calling');
    }

    onFileSelect(e){
        this.setState({
            logo: e.target.files[0],
        });
        console.log('files');
        console.log(e.target.files);
    }

    componentDidMount(){
        const queryParams = new URLSearchParams(this.props.location.search);
        var id = queryParams.get('id');
        if(id){
            
            fetch("http://127.0.0.1:8000/car/api/v1/cars/"+id+"/", {
                method: 'GET',
                })
                .then(res => res.json())
                .then(response =>{
                    console.log(response);
                    this.setState({
                        tagline:response.tagline,
                        mileage:response.mileage,
                        year:response.year,
                        status:response.status,
                        transmission:response.transmission,
                        price:response.price,
                        horse_power:response.horse_power,
                        propellant:response.propellant,
                        car_image:response.car_image,
                        editMode:true,
                        id:id,
                    });
                    fetch("http://127.0.0.1:8000/car/api/v1/manufacturer/"+response.manufacturer+"/", {
                    method: 'GET',
                    })
                    .then(res => res.json())
                    .then(response =>{
                        this.setState({manufacturer:{value: response.id, label: response.manufacturer_name}});              
                    })
                .catch(error => console.error('Error:', error));

                fetch("http://127.0.0.1:8000/car/api/v1/models/"+response.model+"/", {
                    method: 'GET',
                    })
                    .then(res => res.json())
                    .then(response =>{
                        this.setState({model:{value: response.id, label: response.model_code}});                 
                    })
                .catch(error => console.error('Error:', error));
                


                })
                .catch(error => console.error('Error:', error));

        }else{
            //Get All Manufactures
        fetch("http://127.0.0.1:8000/car/api/v1/manufacturer/", {
            method: 'GET',
            })
            .then(res => res.json())
            .then(response =>{
                var tempList = [];
                response.forEach((manufacturer)=>{
                    tempList.push({value: manufacturer.id, label: manufacturer.manufacturer_name})
                })
                this.setState({
                    manufacturerList:tempList,
                });
                
    })
    .catch(error => console.error('Error:', error));
    //Get All Models
    fetch("http://127.0.0.1:8000/car/api/v1/models/", {
            method: 'GET',
            })
            .then(res => res.json())
            .then(response =>{
                var tempList = [];
                response.forEach((m)=>{
                    tempList.push({value: m.id, label: m.model_code})
                });
                this.setState({
                    modelList:tempList,
                });
    })
    .catch(error => console.error('Error:', error));
        }
    }

    saveData(event){
        var {manufacturer, tagline, model, mileage, year, status, transmission, price, horse_power, propellant, car_image} = this.state;
        let form_data = new FormData();
        form_data.append('manufacturer', manufacturer.value);
        form_data.append('tagline', tagline);
        form_data.append('model', model.value);
        form_data.append('mileage', mileage);
        form_data.append('year', year);
        form_data.append('status', status);
        form_data.append('transmission', transmission);
        form_data.append('price', price);
        form_data.append('horse_power', horse_power);
        form_data.append('propellant', propellant);
        form_data.append('car_image', car_image);

        fetch("http://127.0.0.1:8000/car/api/v1/cars/", {
            method: 'POST',
            body: form_data,
        })
        .then(res => res.json())
        .then(response => console.log('Successfully Saved'))
        .catch(error => console.error('Error:', error));
    }

    onFileSelect(e){
        this.setState({
            car_image: e.target.files[0],
        });
    }

    render(){
        return <div className='container' style={{margin:'15px'}}>
            <div className='row'>
                <div className='col-md-4'>
                    <h3>Create Car</h3>
                    <label htmlFor="exampleInputEmail1">Manufacturer:</label>
                    <Select
                        value={this.state.manufacturer}
                        onChange={(e)=>{this.setState({manufacturer:e})}}
                        options={this.state.manufacturerList}
                    />
                    <label htmlFor="exampleInputEmail1">Tagline:</label>
                    <input
                        type="text" 
                        value={this.state.tagline}
                        onChange={(e)=>{this.setState({tagline:e.target.value})}}
                        className="form-control"
                        placeholder="Enter manufacturer name"
                    />
                    <label htmlFor="exampleInputEmail1">Model:</label>
                    <Select
                        value={this.state.model}
                        onChange={(e)=>{this.setState({model:e})}}
                        options={this.state.modelList}
                    />
                    <label htmlFor="exampleInputEmail1">Mileage:</label>
                    <input
                        type="text" 
                        value={this.state.mileage}
                        onChange={(e)=>{this.setState({mileage:e.target.value})}}
                        className="form-control"
                        placeholder="Enter manufacturer name"
                    />
                    <label htmlFor="exampleInputEmail1">Year:</label>
                    <input
                        type="text" 
                        value={this.state.year}
                        onChange={(e)=>{this.setState({year:e.target.value})}}
                        className="form-control"
                        placeholder="Enter manufacturer name"
                    />

                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={(e)=>{this.setState({status: !this.state.status,})}}/>
                        <label className="form-check-label" htmlFor="exampleCheck1">In Stock</label>
                    </div>

                    <label htmlFor="exampleInputEmail1">Transmission:</label>
                    <input
                        type="text" 
                        value={this.state.transmission}
                        onChange={(e)=>{this.setState({transmission:e.target.value})}}
                        className="form-control"
                        placeholder="Enter manufacturer name"
                    />

                    <label htmlFor="exampleInputEmail1">Price:</label>
                    <input
                        type="number" 
                        value={this.state.price}
                        onChange={(e)=>{this.setState({price:e.target.value})}}
                        className="form-control"
                        placeholder="Enter manufacturer name"
                    />

                    <label htmlFor="exampleInputEmail1">Horse power:</label>
                    <input
                        type="text" 
                        value={this.state.horse_power}
                        onChange={(e)=>{this.setState({horse_power:e.target.value})}}
                        className="form-control"
                        placeholder="Enter manufacturer name"
                    />

                    <label htmlFor="exampleInputEmail1">Propellant:</label>
                    <input
                        type="text" 
                        value={this.state.propellant}
                        onChange={(e)=>{this.setState({propellant:e.target.value})}}
                        className="form-control"
                        placeholder="Enter manufacturer name"
                    />
                    <input type="file" onChange={(e) => this.onFileSelect(event)} style={{marginTop:'10px'}} />
                    {this.state.editMode?<button onClick={this.update.bind(this, this.state.id)} className='btn btn-primary' style={{marginTop: '10px'}} >Update</button>:<button onClick={this.saveData.bind(this)} className='btn btn-primary' style={{marginTop: '10px'}} >Save</button>}
                </div>
            </div>
        </div>
    }
}


export default CreateCar;