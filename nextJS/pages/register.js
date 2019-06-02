import Layout from '../components/Layout';
import Container from '../components/Container';
import React, {Component} from 'react';
import Validate from '../components/Validate'

  class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            invalidEmail:false,
            invalidPassword:false,
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.checkFormValidation = this.checkFormValidation.bind(this);
    }

    checkFormValidation(type, e){

        if(type==='email'){
            const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            Validate(regex, e)?this.setState({invalidEmail:true}):this.setState({invalidEmail:false});
        }else if(type === 'password'){
            const regex = /^[a-zA-Z]\w{3,14}$/;
            Validate(regex, e)?this.setState({invalidPassword:true}):this.setState({invalidPassword:false});
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
        let {email, password, invalidEmail} = this.state;
        if(invalidEmail){
            alert('invalid input problem');
        }else{
            if(password && email){
                console.log(`Email: ${email}\nPassword: ${password}`);
            }else{
                alert('can\'t allow empty field' );
            }
        }
    }

    render() {
      return <Layout title={'Register'}>
                <Container>

                    <div className="card shadow p-1 mb-6 bg-white rounded" style={{width: '30rem', margin:'50px auto'}}>
                        <div className="card-body" style={{backgroundColor:'white'}}>
                            <h3 className="card-title text-center">Register</h3>
                            <div className='row'>
                            <form style={{margin:'20px auto', width:'400px'}}>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control"  onChange={(e)=>{
                                        this.setState({email:e.target.value});
                                        }}
                                        onBlur={(e)=>{this.checkFormValidation('email',e)}}
                                        placeholder="Enter email"/>
                                    {this.state.invalidEmail?<small style={{color:'red'}}>
                                            <ul style={{listStyle:'none', padding:'0px'}}>
                                                <li>* This is not a valid email address</li>
                                            </ul></small>:null}
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" onChange={(e)=>{
                                        this.setState({password:e.target.value});
                                        }} 
                                        onBlur={(e)=>{this.checkFormValidation('password',e)}}
                                        placeholder="Password"/>
                                        {this.state.invalidPassword?<small style={{color:'red'}}>
                                            <ul style={{listStyle:'none', padding:'0px'}}>
                                                <li>* Password first character must be a letter</li>
                                                <li>* Password must contain at least 4 characters and no more than 15 characters</li>
                                            </ul></small>:null}
                                </div>

                                <button  className="btn btn-primary" onClick={this.onSubmit.bind(this)} style={{width:'400px'}}>Register</button>
                            </form>
                            </div>
                        </div>
                    </div>

                </Container>
            </Layout>;
    }
  }

  export default Register;