import React from 'react';
import TodoList from './Todos';
import Input from './Input';
import './css/app.css'

class App extends React.Component{
    render(){
        return(
            <div className='wrapper-container'>
                <Input clickAction={(todo)=>this.todoList.addTodoToList(todo)}/>
                <TodoList ref={instance => { this.todoList = instance; }}/>
            </div>
        );
    
    }
    
}

export default App;