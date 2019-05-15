import React, {Component} from 'react';
import Select from 'react-select';

class CreateMfgModel extends Component{
    constructor(props){
        super(props);

        this.state={
            modelMfg:'',
            modelCode:'',
            modelMfgObject:null,

            mfgList:[],
            mfgOption:[],
        }
        this.saveData = this.saveData.bind(this);
        this.formClear = this.formClear.bind(this);
    }



    componentDidMount(){
        let tempList = JSON.parse(localStorage.getItem('mfg'));
        let tempMfgOption = [];
        if(tempList){
            tempList.forEach((mfg, index)=>{
                tempMfgOption.push({ value: index, label: mfg.mfgName })    
            });
        }
        this.setState({
            mfgOption:tempMfgOption,
            mfgList:tempList,        
        });
    }

    formClear(){
        this.setState({
            modelMfg:'',
            modelCode:'',
        })
    }

    saveData(){
        let {modelMfg, modelCode} = this.state;
        let flag = false;
        let tempList = JSON.parse(localStorage.getItem('model'))?JSON.parse(localStorage.getItem('model')):[];
        let object = {'modelMfg':modelMfg, 'modelCode':modelMfg.mfgName+'-'+modelCode};
        if(modelMfg && modelCode){
            if(JSON.parse(localStorage.getItem('model'))){
                if(tempList!==null){
                    tempList.forEach((model)=>{
                        if(model.modelCode.toLowerCase() === modelMfg.mfgName+'-'+modelCode.toLowerCase()){
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
            localStorage.setItem('model',JSON.stringify(tempList));
        }else{
            alert('fields can\'t be empty');
        }

        this.formClear();
    }

    render(){
        return <div className='container' style={{margin:'15px'}}>
            <div className='row'>
                <div className='col-md-4'>
                    <h3>Add Car Model</h3>
                    <label htmlFor="exampleInputEmail1">Manufacturer:</label>
                    <Select
                        value={this.state.modelMfgObject}
                        onChange={(e)=>{
                            this.setState({modelMfg:this.state.mfgList[e.value], modelMfgObject:e})
                        }}
                        options={this.state.mfgOption}
                    />
                    <label htmlFor="exampleInputEmail1">Model Code:</label>
                    <input
                        type="text" 
                        value={this.state.modelCode}
                        onChange={(e)=>{this.setState({modelCode:e.target.value})}}
                        className="form-control"
                        placeholder="Enter manufacturer name"/>
                    <button onClick={this.saveData} className='btn btn-primary' style={{marginTop:'10px'}}>Save</button>
                </div>
            </div>
        </div>
    }
}


export default CreateMfgModel;