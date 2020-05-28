import React from 'react';
import TodoList from './Todos';
import Input from './Input';
import Login from './Login';
import Signup from './SignUp';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';


class App extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/todo'>
                        <Todo/>
                    </Route>

                    <Route exact path='/'>
                        <Login/>
                    </Route>
                    
                    <Route exact path='/signup'>
                        <Signup/>
                    </Route>
                
                </Switch>
            
            </Router>
            
        );
    
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

export default App;