import React, {Component} from 'react';
import Select from 'react-select';

class CreateManufactureModel extends Component{
    constructor(props){
        super(props);

        this.state={
            manufactor:'',
            model_code:'',
            car_type:'',
            car_model_image:'',

            manufacturerList:[],
            manufacturerobjectList:[],
            editMode:false,
        }

        this.saveData = this.saveData.bind(this);
        this.onFileSelect = this.onFileSelect.bind(this);
        this.updateManufacturer = this.updateManufacturer.bind(this);
    }

    updateManufacturer(){}

    componentDidMount(){
        const queryParams = new URLSearchParams(this.props.location.search);
        var id = queryParams.get('id');
        console.log(id);
        if(id){
            fetch("http://localhost:8000/car/api/v1/models/"+id+"/", {
                method: 'GET',
            })
            .then(res => res.json())
            .then(response => {
                console.log(response);
                this.setState({manufactor:{value: response.manufactor, label: response.manufactor}, model_code:response.model_code, car_type:{value: response.car_type, label: response.car_type}, editMode:true, id:id})
            
                }
                
                )
            .catch(error => console.error('Error:', error));
        }








        fetch("http://127.0.0.1:8000/car/api/v1/manufacturer/", {
            method: 'GET',
        })
        .then(res => res.json())
        .then(response => {
            var tempList = [];
            response.forEach(element => {
                tempList.push({ value: element.manufacturer_name, label: element.manufacturer_name , id: element.id})
            });
            console.log(tempList);
            this.setState({
                manufacturerList:response,
                manufacturerobjectList:tempList
            });
        })
        .catch(error => console.error('Error:', error));

    }

    onFileSelect(e){
        this.setState({
            car_model_image: e.target.files[0],
        });
    }

    saveData(){
        let {manufactor, model_code, car_type, car_model_image} = this.state;
        let form_data = new FormData();
        form_data.append('manufactor', manufactor.id);
        form_data.append('model_code', model_code);
        form_data.append('car_type', car_type.value);
        form_data.append('car_model_image', car_model_image);car_model_image


        fetch("http://localhost:8000/car/api/v1/models/", {
            method: 'POST',
            body: form_data,
        })
        .then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
    }

    render(){
        console.log(this.state.manufacturerobjectList)
        return <div className='container' style={{margin:'15px'}}>
            <div className='row'>
                <div className='col-md-4'>
                    <h3>Create Car Model</h3>
                    <label htmlFor="exampleInputEmail1">Manufacturer:</label>
                    <Select
                        value={this.state.manufactor}
                        onChange={(e)=>{this.setState({manufactor:e})}}
                        options={this.state.manufacturerobjectList}
                    />
                    <label htmlFor="exampleInputEmail1">Model Code:</label>
                    <input
                        type="text" 
                        value={this.state.model_code}
                        onChange={(e)=>{this.setState({model_code:e.target.value})}}
                        className="form-control"
                        placeholder="Enter manufacturer name"/>
                    <label htmlFor="exampleInputEmail1">Car Type:</label>
                    <Select
                        value={this.state.car_type}
                        onChange={(e)=>{this.setState({car_type:e})}}
                        options={[
                            {value: "Hatchback", label: "Hatchback"},
                            {value: "Sedan", label: "Sedan"},
                            {value: "MPV", label: "MPV"},
                            {value: "SUV", label: "SUV"},
                            {value: "Crossover", label: "Crossover"},
                            {value: "Coupe", label: "Coupe"},
                            {value: "Convertible", label: "Convertible"},
                        ]}
                    />
                    <input type="file" onChange={(e) => this.onFileSelect(event)} style={{marginTop:'10px'}} />  
                    {/* {this.state.editMode?null:<input type="submit" value="Save" className='btn btn-primary'/>}   */}
                    {this.state.editMode?null:<button onClick={this.saveData} className='btn btn-primary' style={{marginTop:'10px'}}>Save</button>}
                    {this.state.editMode?<button className='btn btn-primary' onClick={this.updateManufacturer.bind(this, this.state.id)} style={{marginTop:'10px'}} >Update</button>:null}
                </div>
            </div>
        </div>
    }
}


export default CreateManufactureModel;