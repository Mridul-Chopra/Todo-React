import React from 'react';
import TodoList from './Todos';

// A component to take input from the  user and save it

class Input extends React.Component{
    constructor(props){
        super(props);
        this.addTodo = this.addTodo.bind(this); //binding event when button is clicked
    }

    render(){
        return(
            <div className='input-box'>
                <input type="text" id="todo-item"></input>
                <button onClick={this.addTodo} id="add-button">Add</button>
            </div>
        );
    }

    // function to handle the event
    addTodo(){
        let todo = document.getElementById('todo-item').value; // gettting value from the input box
        if(todo==="" | todo===" "){
            alert('You did not add any task');
        }
        else{
            this.props.clickAction(todo);  // add to todo list
            document.getElementById('todo-item').value="";
        }
    }
}

export default Input;