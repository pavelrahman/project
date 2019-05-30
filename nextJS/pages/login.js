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
            const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            this.validate(regex, e)?this.setState({invalidEmail:true}):this.setState({invalidEmail:false});
        }
    }

    validate(regex, e){
        let input = e.target.value;
        if(input){
            let valid = regex.test(input);
            if(!valid){
                e.target.style.border = '3px solid red';
                return true;
            }else{
                e.target.style.border = '1px solid #D3D3D3';
                return false;
            }
        }else{
            e.target.style.border = '1px solid #D3D3D3';
            return false;
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
                                        }}
                                        onBlur={(e)=>{this.checkFormValidation('email',e)}}
                                        placeholder="Enter email"/>
                                    {this.state.invalidEmail?<small style={{color:'red'}}>This is not a valid email address</small>:null}
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" onChange={(e)=>{
                                        this.setState({password:e.target.value});
                                        }} placeholder="Password"/>
                                </div>

                                <button  className="btn btn-primary" onClick={this.onSubmit.bind(this)} style={{width:'400px'}}>Login</button>
                            </form>
                            </div>
                        </div>
                    </div>

                </Container>
            </Layout>;
    }
  }

  export default Login;