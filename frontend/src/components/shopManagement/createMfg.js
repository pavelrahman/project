import React, {Component} from 'react';

/*
    *In this js file mfg stands for manufacturer.
*/

class CreateMfg extends Component{
    constructor(props){
        super(props);

        this.state={
            mfgName:'',
            mfgCountry:'',
            mfgLogo:'',
        };
        this.saveData = this.saveData.bind(this);
        this.formClear = this.formClear.bind(this);
    }

    componentDidMount(){
        
    }

    formClear(){
        this.setState({
            mfgName:'',
            mfgCountry:'',
            mfgLogo:'',
        })
    }

    saveData(){
       let {mfgName, mfgCountry, mfgLogo} = this.state;
       let flag = false;
       let tempList = JSON.parse(localStorage.getItem('mfg'))?JSON.parse(localStorage.getItem('mfg')):[];
       let object = {'mfgName':mfgName.toLowerCase(), 'mfgCountry':mfgCountry.toLowerCase(), 'mfgLogo': mfgLogo};
       if(JSON.parse(localStorage.getItem('mfg'))){
        tempList.forEach(mfg => {
            console.log(mfg);
            if(mfg.mfgName.toLocaleLowerCase() === mfgName.toLocaleLowerCase() && mfg.mfgLogo === mfgLogo){
                flag = true;
            }
        });
        if(!flag){
            let id = tempList[tempList.length-1].id+1;
            object.id = id;
            tempList.push(object);
        }else{alert('duplicate entry not allowed')}  
        
       }else{
           let id = 0;
           object.id = id;
           tempList.push(object);
       }
       if(mfgName!=='' && mfgCountry !=='' && mfgLogo!==''){
        localStorage.setItem('mfg',JSON.stringify(tempList));
       }else{
           alert('empty fields not allowed');
       }
       this.formClear();
    }

    render(){
        return <div className='container' style={{margin:'15px'}}>
            <div className='row'>
                <div className='col-md-6'>
                <h3>Add Manufacturer</h3>
                    
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Manufacturer name:</label>
                            <input
                                name="mfgName" 
                                type="text" 
                                value={this.state.mfgName}
                                onChange={(e)=>{this.setState({mfgName:e.target.value})}}
                                className="form-control"
                                aria-describedby="emailHelp"
                                placeholder="Enter manufacturer name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">mfgCountry:</label>
                            <input 
                                type="text" 
                                value={this.state.mfgCountry}
                                onChange={(e)=>{this.setState({mfgCountry:e.target.value})}}
                                className="form-control" 
                                aria-describedby="emailHelp"placeholder="Enter mfgCountry"/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="exampleInputEmail1">Add Logo URL:</label>
                            <input 
                                type="text" 
                                value={this.state.mfgLogo}
                                onChange={(e)=>this.setState({mfgLogo: e.target.value})}
                                className="form-control" 
                                aria-describedby="emailHelp"placeholder="Enter mfgCountry"/>
                        </div>
                        {this.state.editMode?null:<button onClick={this.saveData.bind(this)} className='btn btn-primary'>Save</button>}
                    {this.state.editMode?<a href='/manufactorlist' className='btn btn-primary' onClick={this.updateManufacturer.bind(this, this.state.id)}>Update</a>:null}
                </div>
            </div>
        </div>
    }
}


export default CreateMfg;