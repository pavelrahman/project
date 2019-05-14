import React, {Component} from 'react';


class CreateManufacture extends Component{
    constructor(props){
        super(props);

        this.state={
            manufacturerName:'',
            country:'',
        }

        this.saveData = this.saveData.bind(this);
        this.getData = this.getData.bind(this);
    }

    componentDidMount(){
        
    }

    getData(){
        console.log('getting data');
        let data = JSON.parse(localStorage.getItem('manufactor'));
        console.log(data);  
    }


    saveData(event){
       let {manufacturerName, country} = this.state;
       console.log();
       console.log('country : ', country);
       var mylist = [{'a':'pavel'}, 'b', 'c']
       let manufactor = [manufacturerName, mylist];


       localStorage.setItem('manufactor',JSON.stringify(manufactor));
    }



    render(){
        console.log(this.state.manufactorlist);
        return <div className='container' style={{margin:'15px'}}>
            <div className='row'>
                <div className='col-md-6'>
                <h3>Create Manufacturer</h3>
                    
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Manufacturer name:</label>
                            <input
                                name="manufacturerName" 
                                type="text" 
                                value={this.state.manufacturer_name}
                                onChange={(e)=>{this.setState({manufacturerName:e.target.value})}}
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
                        {this.state.editMode?null:<button onClick={this.saveData.bind(this)} className='btn btn-primary'>Save</button>}
                        <button onClick={this.getData.bind(this)} className='btn btn-primary'>Get Data</button>
                    {this.state.editMode?<a href='/manufactorlist' className='btn btn-primary' onClick={this.updateManufacturer.bind(this, this.state.id)}>Update</a>:null}
                </div>
            </div>
        </div>
    }
}


export default CreateManufacture;