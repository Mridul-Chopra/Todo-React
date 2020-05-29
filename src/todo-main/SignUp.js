/* importing all the dependencies required by the module */
import React from 'react';
import $ from 'jquery';
import './css/login.css'; 
import './css/home.css';
import {Link} from 'react-router-dom';

class SignupBox extends React.Component{

    constructor(props){
        super(props);
        this.state={email:'',password:'',confirm:''}; // state contains all the fields in the sign up page

        /* binding all the event handler functions */
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
        let emailId = $('#email').val(); // get the email
        this.setState({
            email:emailId // update the email
        });
    }

    updatePassword(){
        let pass = $('#password').val(); //get the password
        this.setState({
            password:pass // update the password
        });
    }

    updateConfirm(){
        let cpass = $('#confirm-password').val(); // get value of confirm password
        this.setState({
            confirm:cpass // update the confirm password
        });
    }

    signUp(){
        
        // regex to check email
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(this.state.password===''|this.state.confirm===''|this.state.email===''){ // check if all fields are filled
            $('#error').text('Please enter all the fields.');
        }else if(!re.test(this.state.email)){ // check if email is correct
                $('#error').text('Enter a valid email.');
        }else if(this.state.password !== this.state.confirm){
            $('#error').text('Passwords do not match.'); // check if passwords match
        }else{
            $('#error').text(''); // if no errors empty error box
        }

    }
}

/*Component that returns the signup page */
function Signup(){
    let signup =
         <div className='img-background'>
            <div className='head'>Todos Maker</div>
            <SignupBox/>
        </div>
    return signup;
}

// export the sign up page
export default Signup;