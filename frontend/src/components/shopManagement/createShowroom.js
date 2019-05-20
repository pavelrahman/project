import React, {Component} from 'react';
import Select from 'react-select';

class CreateShowroom extends Component{
    constructor(props){
        super(props);

        this.state={
            showroomName:'',
            showroomAddress:'',
            showroomOwner:'',
            showroomLogo:'',
            showroomCars:[],

            carOptions:[],
            allCars:[],
        }

        this.saveData = this.saveData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateManufacturer = this.updateManufacturer.bind(this)
    }


    updateManufacturer(){

    }

    componentDidMount(){
        let allCars = JSON.parse(localStorage.getItem('car'));
        let tempList = [];
        if(allCars){
            allCars.forEach((car, index)=>{
                tempList.push({ value: index, label: car.tagline });
            })
            this.setState({allCars:allCars, carOptions:tempList});
        }
        
    }


    handleChange(e){
        var self = this;
        let selectedList = e;
        let tempList = [];
        console.log(selectedList);
        selectedList.forEach((item, index)=>{
            console.log(item);
            tempList.push(this.state.allCars[item.value]);
        })
        this.setState({showroomCars:tempList});
    }

    saveData(event){
        let {showroomName, showroomAddress, showroomOwner, showroomCars, showroomLogo} = this.state;
        let flag = false;
        let tempList = JSON.parse(localStorage.getItem('showroom'))?JSON.parse(localStorage.getItem('showroom')):[];
        let object = {'showroomName':showroomName, 'showroomAddress':showroomAddress, 'showroomOwner':showroomOwner, 'showroomCars':showroomCars, 'showroomLogo':showroomLogo};
        if(showroomName && showroomAddress && showroomOwner){
            if(JSON.parse(localStorage.getItem('showroom'))){
                if(tempList!==null){
                    tempList.forEach((showroom)=>{
                        if(showroom.showroomName.toLowerCase() === showroomName.toLowerCase()){
                            flag = true;
                        }
                    });
                }
                if(!flag){
                    tempList.push(object);
                    alert('success');
                }else{alert('duplicate entry not allowed')}
            }else{
                tempList.push(object);
                alert('success');
            }
            localStorage.setItem('showroom',JSON.stringify(tempList));
        }else{
            alert('fields can\'t be empty');
        }


    }

    render(){
        return <div className='container' style={{margin:'15px'}}>
            <div className='row'>
                <div className='col-md-6'>
                <h3 style={{margin: '20px 0px 20px'}}><em>Add Showroom</em></h3>
                <label htmlFor="exampleInputEmail1"><strong>Showroom name:</strong></label>
                <input
                    name="manufacturer_name" 
                    type="text" 
                    value={this.state.showroom_name}
                    onChange={(e)=>{this.setState({showroomName:e.target.value})}}
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter manufacturer name"
                />

                <label htmlFor="exampleInputEmail1"><strong>Address:</strong></label>
                <input
                    name="manufacturer_name" 
                    type="text" 
                    value={this.state.address}
                    onChange={(e)=>{this.setState({showroomAddress:e.target.value})}}
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter manufacturer name"
                />
                
                <label htmlFor="exampleInputEmail1"><strong>Owner:</strong></label>
                <input
                    name="manufacturer_name" 
                    type="text" 
                    value={this.state.owner}
                    onChange={(e)=>{this.setState({showroomOwner:e.target.value})}}
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter manufacturer name"
                />

                <label htmlFor="exampleInputEmail1"><strong>Logo Url:</strong></label>
                <input
                    name="manufacturer_name" 
                    type="text" 
                    value={this.state.showroomLogo}
                    onChange={(e)=>{this.setState({showroomLogo:e.target.value})}}
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter manufacturer name"
                />
                <label htmlFor="exampleInputEmail1" style={{marginTop:'10px'}}><strong>Cars:</strong></label>
                <Select
                    isMulti
                    onChange={this.handleChange.bind(this)}
                    options={this.state.carOptions}
                />
                {this.state.editMode?<a style={{marginTop:'10px'}} href='/manufactorlist' className='btn btn-primary' onClick={this.updateManufacturer.bind(this, this.state.id)}>Update</a>:<button style={{marginTop:'10px'}} href='/mbuttonnufactorlist' className='btn btn-primary' onClick={this.saveData.bind(this)}>Save</button>}
                </div>
            </div>
        </div>
    }
}


export default CreateShowroom;