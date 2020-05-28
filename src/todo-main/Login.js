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

class LoginBox extends React.Component{

    constructor(props){
        super(props);
        this.state = {email:'',password:''}; // state contains email and password for login
        
        /* binding all the events */
        this.login = this.login.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    }

    render(){
        return(
            <div className='background'>
                <div>
                    <h3>Start Planning your day now ...</h3>
                </div>

                <div>
                    <label htmlFor='email'>Email </label>
                    <input type='text' id='email' onChange={this.updateEmail}/>
                </div>
                
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type = 'password' id='password' onChange={this.updatePassword}/>
                </div>
                
                <button onClick={this.login}>Login</button>

                <div id='error'>Errors goes here...</div>
                
                <Link to='/signup'>Not a member? Sign up</Link>
                
            </div>
        ); 
    }

    login(){

        let payload = {email:this.state.email , password:this.state.password}; 
        
        $.ajax({
            url:'http://localhost:5000/login',
            method:'POST',
            data:payload,
            crossDomain:true,
            xhrFields: {
                withCredentials: true
             },
            

            success:(result)=>{
                console.log(result);
            }
        });
    }

    updateEmail(){
        let emailId = $('#email').val(); // get email value 
        this.setState({ // update the state
            email:emailId
        });
    }

    updatePassword(){
        let pass = $('#password').val(); // get password value
        this.setState({ // update the password
            password:pass
        });
    }
}

function Login(){
    let login = 
    <div className='img-background'>
        <div className='head'>Todos Maker</div>
        <LoginBox/>
    </div>
    return login;
}
export default Login;