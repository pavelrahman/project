import React, {Component} from 'react';


class CreateCar extends Component{
    constructor(props){
        super(props);

        this.state={
            
        }

        // this.onFileSelect = this.onFileSelect.bind(this);
        this.upload = this.upload.bind(this)
    }

    onFileSelect(e){
        this.setState({
            logo: e.target.files[0],
        });
        console.log('files');
        console.log(e.target.files);
    }

    componentDidMount(){
        const self = this;
        fetch("http://127.0.0.1:8000/car/api/v1/manufacturer/", {
            method: 'GET',
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .then(response => {
            //   let allManufacture = JSON.stringify(response);
            console.log(response);
            var manufacturelist = [];
            manufacturelist = response.map((item, index)=>{
                    return {
                        value: item.manufacturer_name,
                        label: item.manufacturer_name,
                        url: item.url
                    }
                });
            // console.log(manufacturelist);
            self.setState({
                manufacturerNameList:manufacturelist,
            });
            })
          .catch(error => console.error('Error:', error));
    }

    upload(event){
        // event.preventDefault();

        // let {manufacturer_name, country, logo} = this.state;

        // let form_data = new FormData();

        // form_data.append('manufacturer_name', manufacturer_name);
        // form_data.append('country', country);
        // form_data.append('manufacturer_logo', logo);

        
        
        // fetch("http://127.0.0.1:8000/car/api/v1/manufacturer/", {
        //     method: 'POST',
        //     body: form_data,
        // })
        // .then(res => res.json())
        // .then(response => console.log('Success:', JSON.stringify(response)))
        // .catch(error => console.error('Error:', error));
    }

    render(){
        return <div className='container' style={{margin:'15px'}}>
            <div className='row'>
                <div className='col-md-6'>
                <h3>Create Car</h3>
                    <form encType="multipart/form-data" onSubmit={(e) => this.upload(e)}>
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
                        <input type="submit" value="Submit" className='btn btn-primary'/>
                    </form>
                </div>
            </div>
        </div>
    }
}


export default CreateCar;