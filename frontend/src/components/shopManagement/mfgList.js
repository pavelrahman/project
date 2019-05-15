import React from 'react'

/*
    *In this js file mfg stands for manufacturer.
*/

let ManufacturerCard = (props)=>{
        return <div className='col-md-4'>
            <div className="card" style={{width: '20rem', height:'450px', marginTop: '40px'}}>
                <img className="card-img-top" style={{width:'150px', height:'150px', margin:'50px'}} src={props.mfg.mfgLogo} alt="Card image cap"/>
                <div className="card-body">
                    <h2 className="card-title">{props.mfg.mfgName.toUpperCase()}</h2>
                    <p className="card-text"><strong>Country:</strong> {props.mfg.mfgcountry}</p>
                    <a href='/manufacturerlist' className="btn btn-primary" onClick={props.delete} style={{marginLeft:'10px'}}>Delete</a>
                </div>
            </div>
        </div>
}

class MfgList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mfgList:[],
            data:false,
        }

        this.deleteMfg = this.deleteMfg.bind(this);
        this.editMfg = this.editMfg.bind(this);
        this.searchField.bind(this);
    }

    editMfg(id){
        
    }

    searchField(e){
        let {mfgList} = this.state;
        let input = e.target.value.toLowerCase();
        if(input){
            let filteredList = [];
            mfgList.forEach((mfg, index)=>{
                
                if(mfg.mfgName.toLowerCase().includes(input)){
                    filteredList.push(mfg);
                }
            });
            this.setState({mfgList:filteredList});

        }else{
            
            this.setState({mfgList:JSON.parse(localStorage.getItem('mfg'))})
        }
    }

    deleteMfg(id){
        var tempList = JSON.parse(localStorage.getItem('mfg'));
        tempList.splice(id,1);
        localStorage.setItem('mfg', JSON.stringify(tempList));
    }

    componentDidMount(){
        this.setState({
            mfgList: JSON.parse(localStorage.getItem('mfg')),
        });
    }

    render(){
        let show = this.state.mfgList.map((mfg, index)=>{
            return <ManufacturerCard mfg={mfg} key={index} delete={this.deleteMfg.bind(this, index)} edit={this.editMfg.bind(this, index)}/>
        });
        return this.state.mfgList.length>0?<div className='container' style={{margin:'10px'}}>
        <input
            style={{marginTop:'40px', marginBottom:'40px'}}
            name="manufacturer_name" 
            type="text" 
            value={this.state.manufacturer_name}
            onChange={this.searchField.bind(this)}
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="You Can Search Here"
        />
        <h1>Car Manufacturers</h1>
        <div className='row'>
            {show}
        </div>
    </div>:<div className='container'>
        <h1>No manufacturer available</h1>
        <a href={'/createmanufacturer'}>Create Manufacturer</a>
    </div>
    }
}

export default MfgList;