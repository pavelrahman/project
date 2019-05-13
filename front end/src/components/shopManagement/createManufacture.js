import React, {Component} from 'react';


class CreateManufacture extends Component{
    constructor(props){
        super(props);

        this.state={
            manufacturer_name:'',
            country:'',
            logo:'',
            editMode:false,
            id:'',
        }

        this.onFileSelect = this.onFileSelect.bind(this);
        this.saveData = this.saveData.bind(this);
        this.updateManufacturer = this.updateManufacturer.bind(this);
    }

    componentDidMount(){
        const queryParams = new URLSearchParams(this.props.location.search);
        var id = queryParams.get('id');
        console.log(id);
        if(id){
            fetch("http://127.0.0.1:8000/car/api/v1/manufacturer/"+id+"/", {
                method: 'GET',
            })
            .then(res => res.json())
            .then(response => {this.setState({manufacturer_name:response.manufacturer_name, country:response.country, editMode:true, id:id})})
            .catch(error => console.error('Error:', error));
        }
    }

    onFileSelect(e){
        this.setState({
            logo: e.target.files[0],
        });
        console.log('files');
        console.log(e.target.files);
    }

    saveData(event){
        event.preventDefault();
        let {manufacturer_name, country, logo} = this.state;
        let form_data = new FormData();
        form_data.append('manufacturer_name', manufacturer_name);
        form_data.append('country', country);
        form_data.append('manufacturer_logo', logo);


        fetch("http://127.0.0.1:8000/car/api/v1/manufacturer/", {
            method: 'POST',
            body: form_data,
        })
        .then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));


    }

    updateManufacturer(id){
        console.log(id);

        let {manufacturer_name, country, logo} = this.state;
        let form_data = new FormData();
        form_data.append('manufacturer_name', manufacturer_name);
        form_data.append('country', country);
        form_data.append('manufacturer_logo', logo);


        fetch("http://127.0.0.1:8000/car/api/v1/manufacturer/"+id+"/", {
            method: 'PUT',
            body: form_data,
        })
        .then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));

    }

    render(){
        return <div className='container' style={{margin:'15px'}}>
            <div className='row'>
                <div className='col-md-6'>
                <h3>Create Manufacturer</h3>
                    <form encType="multipart/form-data" onSubmit={(e) => this.saveData(e)}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Manufacturer name:</label>
                            <input
                                name="manufacturer_name" 
                                type="text" 
                                value={this.state.manufacturer_name}
                                onChange={(e)=>{this.setState({manufacturer_name:e.target.value})}}
                                className="form-control"
                                aria-describedby="emailHelp"
                                placeholder="Enter manufacturer name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Country:</label>
                            <input 
                                type="text" 
                                value={this.state.country}
                                onChange={(e)=>{this.setState({country:e.target.value})}}
                                className="form-control" 
                                aria-describedby="emailHelp"placeholder="Enter country"/>
                        </div>
                        <div className="form-group">
                            <input type="file" onChange={(e) => this.onFileSelect(event)}/>
                        </div>
                        {this.state.editMode?null:<input type="submit" value="Save" className='btn btn-primary'/>}
                    </form>
                    {this.state.editMode?<button className='btn btn-primary' onClick={this.updateManufacturer.bind(this, this.state.id)}>Update</button>:null}
                </div>
            </div>
        </div>
    }
}


export default CreateManufacture;