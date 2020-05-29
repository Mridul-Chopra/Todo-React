import React from 'react';
import TodoList from './Todos';
import Input from './Input';
import Login from './Login';
import Signup from './SignUp';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from 'react-router-dom';


class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {authenticated:false};
        this.changeAuthenticationState = this.changeAuthenticationState.bind(this);
    }
    
    render(){
        return(
            <Router>
                <Switch>

                    <Route exact path='/'>
                        <Login loginAction = {this.changeAuthenticationState}/>
                    </Route>
                    
                    <Route exact path='/signup'>
                        <Signup/>
                    </Route>

                    <PrivateRoute location='/todo' component={<Todo/>} authenticated={this.state.authenticated}/>

                </Switch>
            
            </Router>
            
        );
    
    }

    changeAuthenticationState(state){
        
        this.setState({
            authenticated:state
        });

        console.log(this.state.authenticated);
    }
    
}

class Todo extends React.Component{
    render(){
        return(
            <div className='body'>
                <div className='header'>My TODO list</div>
                <div className='wrapper-container'>
                        <Input clickAction={(todo)=>this.todoList.addTodoToList(todo)}/>
                        <TodoList ref={instance => { this.todoList = instance; }}/>
                </div>
            </div>
        );
    }
    
}



class PrivateRoute extends React.Component{

    constructor({authenticated}){
        super();
        this.state = {authenticated};
    }

    render(){

        let allowed = <Route exact path={this.props.location.pathname}>{this.props.component}</Route>
        let notAllowed = <Redirect to='/'/>

        return this.state.authenticated ? allowed : notAllowed; 

    }

    static getDerivedStateFromProps(props, state) {
        if (props.authenticated !== state.authenticated) {
          return { authenticated: props.authenticated };
        }
        return null;
      }
}



export default App;