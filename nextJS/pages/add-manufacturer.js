import Layout from '../components/Layout';
import Container from '../components/Container';
import React, {Component} from 'react';
import Validate from '../components/Validate';

  class Manufacturer extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            country:'',
            invalidName:false,
            invalidCountry:false,
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.checkFormValidation = this.checkFormValidation.bind(this);
    }

    checkFormValidation(type, e){
        if(type==='name'){
            const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
            Validate(regex, e) ?this.setState({invalidName:true}):this.setState({invalidName:false});
        }else if(type === 'country'){
            const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
            Validate(regex, e) ?this.setState({invalidCountry:true}):this.setState({invalidCountry:false});
        }
    }

    // validate(regex, e){
    //     let input = e.target.value;
    //     if(input){
    //         let valid = regex.test(input);
    //         if(!valid){
    //             e.target.style.border = '3px solid red';
    //             return true;
    //         }else{
    //             e.target.style.border = '1px solid #D3D3D3';
    //             return false;
    //         }
    //     }else{
    //         e.target.style.border = '1px solid #D3D3D3';
    //         return false;
    //     }
    // }

    onSubmit(){
        event.preventDefault();
        let {name, country, invalidName, invalidCountry} = this.state;
        if(invalidName || invalidCountry){
            alert('invalid input problem');
        }else{
            if(name && country){
                console.log(`Name: ${name}\nCountry: ${country}`);
            }else{
                alert('can\'t allow empty field' );
            }
        }
    }

    render() {
      return <Layout title={'Manufacturer'}>
                <Container>

                    <div className="card shadow p-1 mb-6 bg-white rounded" style={{width: '30rem', margin:'50px auto'}}>
                        <div className="card-body" style={{backgroundColor:'white'}}>
                            <h3 className="card-title text-center">Add Manufacturer</h3>
                            <div className='row'>
                            <form style={{margin:'20px auto', width:'400px'}}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control"  onChange={(e)=>{
                                        this.setState({name:e.target.value});
                                        this.checkFormValidation('name',e);
                                        }} placeholder="Enter name"/>
                                    {this.state.invalidName?<small style={{color:'red'}}>
                                            <ul style={{listStyle:'none', padding:'0px'}}>
                                                <li>* This is not a valid name</li>
                                            </ul></small>:null}
                                </div>
                                <div className="form-group">
                                    <label>Country</label>
                                    <input type="text" className="form-control"  onChange={(e)=>{
                                        this.setState({country:e.target.value});
                                        this.checkFormValidation('country',e);
                                        }} placeholder="Enter country"/>
                                    {this.state.invalidCountry?<small style={{color:'red'}}>
                                            <ul style={{listStyle:'none', padding:'0px'}}>
                                                <li>* This is not a valid country</li>
                                            </ul></small>:null}
                                </div>

                                <button  className="btn btn-primary" onClick={this.onSubmit.bind(this)} style={{width:'400px'}}>Save</button>
                            </form>
                            </div>
                        </div>
                    </div>

                </Container>
            </Layout>;
    }
  }

  export default Manufacturer;