import React from 'react';
import $ from 'jquery';
import './css/login.css'; 
import './css/home.css';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

class SignupBox extends React.Component{

    constructor(props){
        super(props);
        this.state={email:'',password:'',confirm:''};
        
        this.updateEmail=this.updateEmail.bind(this);
        this.updatePassword=this.updatePassword.bind(this);
        this.updateConfirm=this.updateConfirm.bind(this);
        this.signUp=this.signUp.bind(this);
    }
    render(){
        return(
            <div className='background'>
                <div>
                    <h3>Let's get started !!</h3>
                </div>

                <div>
                    <label htmlFor='email'>Email </label>
                    <input type='text' id='email' onChange={this.updateEmail}/>
                </div>
                
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type = 'password' id='password' onChange={this.updatePassword}/>
                </div>

                <div>
                     <label htmlFor='confirm-password'>Confirm Password</label>
                    <input type = 'password' id='confirm-password' onChange={this.updateConfirm}/>
                </div>

                <button onClick={this.signUp}>Sign up</button>
                
                <div id='error'></div>
                
                <Link to='/'>Already a member? Login</Link>
                
            </div>
        );
    }

    updateEmail(){
        let emailId = $('#email').val();
        this.setState({
            email:emailId
        });
    }

    updatePassword(){
        let pass = $('#password').val();
        this.setState({
            password:pass
        });
    }

    updateConfirm(){
        let cpass = $('#confirm-password').val();
        this.setState({
            confirm:cpass
        });
    }

    signUp(){
        
        if(this.state.password===''|this.state.confirm===''|this.state.email===''){
            $('#error').text('Please enter all the fields.');
        }else if(this.state.password !== this.state.confirm){
            $('#error').text('Passwords do not match.');
        }else{
            $('#error').text('');
        }

    }
}

function Signup(){
    let signup =
         <div className='img-background'>
            <div className='head'>Todos Maker</div>
            <SignupBox/>
        </div>
    return signup;
}
export default Signup;