import React, {Component} from 'react';
import Select from 'react-select';

class CreateCar extends Component{
    constructor(props){
        super(props);
        this.state={
            tagline:'',
            model:'',
            mileage:'',
            year:'',
            status:false,
            transmission:'',
            price:'',
            horse_power:'',
            propellant:'',
            fileList:[],
            fileLink:'',

            modelList:[],
            modelOption:[],
        }
        
        this.uploadFile = this.uploadFile.bind(this);
        this.uploadImage = this.uploadImage.bind(this)
        this.formClear = this.formClear.bind(this);
        this.saveData = this.saveData.bind(this);
        this.update = this.update.bind(this);
    }
    
    componentDidMount(){
        let tempList = JSON.parse(localStorage.getItem('model'));
        let tempModelOption = [];
        if(tempList){
            tempList.forEach((model, index)=>{
                tempModelOption.push({ value: index, label: model.modelCode })    
            });
        }
        this.setState({
            modelOption:tempModelOption,
            modelList:tempList,        
        });
    }
    
    formClear(){
        this.setState({
            tagline:'',
            mileage:'',
            year:'',
            price:'',
            horse_power:'',
            propellant:'',
        })
    }

    uploadFile(e){
        // console.log('upload file calling');
        // console.log(e.target.value);
        // let {fileList} = this.state;
        // console.log(e.target.files[0]);
        // let filePath = e.target.files[0];
        // let filename = e.target.value.replace(/^.*\\/, "");
        // fileList.push({
        //     FilePath: filePath,
        //     FileName: filename,
        //     IsNewUpload: true
        // });
        // e.target.value = null;

        // console.log(fileList);
       
        // this.setState({
        //     fileList:[].target.files[0],
        // });
    }

    uploadImage(){
        let {fileList, fileLink} = this.state;
        if(fileLink){
            if(fileList.length<3){
                fileList.push(fileLink);
                this.setState({fileList:fileList, fileLink:''});
            }else{
                alert('can not uploat more than 3 image');
            }
        }else{
            alert('insert image url');
        }
    }

    saveData(event){
        var {tagline, model, mileage, year, status, transmission, price, horse_power, propellant, fileList} =  this.state;
        let flag = false;
        let tempList = JSON.parse(localStorage.getItem('car'))?JSON.parse(localStorage.getItem('car')):[];
        var object = {
            'tagline':tagline,
            'model':this.state.modelList[model.value],
            'mileage':mileage,
            'year':year,
            'status':status,
            'transmission':transmission,
            'price':price,
            'horse_power':horse_power,
            'propellant':propellant,
            'fileList':fileList,
        }
        
        if(tagline && model && mileage && year && transmission && price && horse_power && propellant){
            if(JSON.parse(localStorage.getItem('car'))){
                if(tempList!==null){
                    tempList.forEach((car)=>{
                        if(car.tagline.toLowerCase() === tagline.toLowerCase() || car.model.modelCode.toLowerCase() === this.state.modelList[model.value].modelCode.toLowerCase()){
                            flag = true;
                        }
                    });
                }
                if(!flag){
                    tempList.push(object);
                }else{alert('duplicate entry not allowed')}
            }else{
                tempList.push(object);
            }
            localStorage.setItem('car',JSON.stringify(tempList));
        }else{
            alert('fields can\'t be empty');
        }

        this.formClear();
    }

    update(id){
        console.log('update is calling');
    }

    render(){
        return <div className='container' style={{margin:'15px'}}>
            <div className='row' ><h3 style={{margin: '20px 0px 20px'}}><em>Add Car</em></h3></div>

            <div className='row'>
                <div className='col-md-4' style={{paddingLeft:'0px'}}>
                    <label><strong>Tagline:</strong></label>
                    <input
                        type="text" 
                        value={this.state.tagline}
                        onChange={(e)=>{this.setState({tagline:e.target.value})}}
                        className="form-control"
                        placeholder="Enter manufacturer name"
                    />

                    <label><strong>Model:</strong></label>
                    <Select
                        value={this.state.model}
                        onChange={(e)=>{this.setState({model:e})}}
                        options={this.state.modelOption}
                    />

                    <label><strong>Mileage:</strong></label>
                    <input
                        type="text" 
                        value={this.state.mileage}
                        onChange={(e)=>{this.setState({mileage:e.target.value})}}
                        className="form-control"
                        placeholder="Enter manufacturer name"
                    />

                    <label><strong>Year:</strong></label>
                    <input
                        type="text" 
                        value={this.state.year}
                        onChange={(e)=>{this.setState({year:e.target.value})}}
                        className="form-control"
                        placeholder="Enter manufacturer name"
                    />
                    {/* <label><strong>Select Car Image</strong></label>
                    <input className='form-control-file' type="file" onChange={(e) => this.uploadFile(e)} style={{marginTop:'10px'}} /> */}
                    <label><strong>Insert Car Image</strong></label>
                    <div className="input-group mb-3" style={{marginTop:'5px', marginBottom:'5px'}}>
                        <input value={this.state.fileLink} type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e)=>this.setState({fileLink:e.target.value})}/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" onClick={this.uploadImage}>Add</button>
                        </div>
                    </div>
                </div>
                <div className='col-md-4' style={{paddingLeft:'0px'}}>
                    <label><strong>Transmission:</strong></label>
                    <Select
                        value={this.state.transmission}
                        onChange={(e)=>{this.setState({transmission:e})}}
                        options={
                            [
                                { value: 'Manual', label: 'Manual' },
                                { value: 'Automatic', label: 'Automatic' },
                                { value: 'Continuously variable', label: 'Continuously variable' },
                                { value: 'Semi-automatic and dual-clutch', label: 'Semi-automatic and dual-clutch' }
                            ]
                        }
                    />

                    <label><strong>Price:</strong></label>
                    <input
                        type="number" 
                        value={this.state.price}
                        onChange={(e)=>{this.setState({price:e.target.value})}}
                        className="form-control"
                        placeholder="Enter manufacturer name"
                    />
                    <label><strong>Horse power:</strong></label>
                    <input
                        type="text" 
                        value={this.state.horse_power}
                        onChange={(e)=>{this.setState({horse_power:e.target.value})}}
                        className="form-control"
                        placeholder="Enter manufacturer name"
                    />

                    <label><strong>Propellant:</strong></label>
                    <input
                        type="text" 
                        value={this.state.propellant}
                        onChange={(e)=>{this.setState({propellant:e.target.value})}}
                        className="form-control"
                        placeholder="Enter manufacturer name"
                    />
                </div>
            </div>
            <div className='row'>
                <button onClick={this.saveData.bind(this)} className='btn btn-primary' style={{marginTop: '10px'}} >Save</button>
            </div>
        </div>
    }
}


export default CreateCar;
