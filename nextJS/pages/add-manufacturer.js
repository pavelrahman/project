import Layout from '../components/Layout';
import Container from '../components/Container';
import React, {Component} from 'react';

  class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            invalidEmail:false,
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.checkFormValidation = this.checkFormValidation.bind(this);
    }

    checkFormValidation(type, e){
        if(type==='email'){
            let email = e.target.value;
            if(email){
                const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
                let res = regexEmail.test(this.state.email);
                if(!res){
                    e.target.style.border = '1.3px solid red';
                    this.setState({invalidEmail:true});   
                }else{
                    e.target.style.borderColor = '#D3D3D3';
                    this.setState({invalidEmail:false});
                }
            }else{
                e.target.style.borderColor = '#D3D3D3';
                this.setState({invalidEmail:false});
            }
        }
    }

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
      return <Layout title={'Login'}>
                <Container>

                    <div className="card shadow p-1 mb-6 bg-white rounded" style={{width: '30rem', margin:'50px auto'}}>
                        <div className="card-body" style={{backgroundColor:'white'}}>
                            <h3 className="card-title text-center">Login</h3>
                            <div className='row'>
                            <form style={{margin:'20px auto', width:'400px'}}>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control"  onChange={(e)=>{
                                        this.setState({email:e.target.value});
                                        this.checkFormValidation('email',e);
                                        }} placeholder="Enter email"/>
                                    {this.state.invalidEmail?<small style={{color:'red'}}>This is not a valid email address</small>:null}
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" onChange={(e)=>{
                                        this.setState({password:e.target.value});
                                        }} placeholder="Password"/>
                                </div>

                                <button  className="btn btn-primary" onClick={this.onSubmit.bind(this)} style={{width:'400px'}}>Submit</button>
                            </form>
                            </div>
                        </div>
                    </div>

                </Container>
            </Layout>;
    }
  }

  export default Login;