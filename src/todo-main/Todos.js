/* importing all the required deoendencies */
import React from 'react';
import './css/app.css';
import $ from "jquery";

/*
A component class to add todo list items
 */
class Todo extends React.Component{

    /*render a <li> with given key and todo value */
    render(){
        return(
            <div className='li-wrapper'>
                <div key={this.key} className='todo-item'> 
                    {this.props.todo}  
                 </div>
            <button onClick={this.props.clickAction} className='delete'>Done</button>
            </div>
            
        );
    }

}

/*
 A component class that gives a list of all the todo items
 */
class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {todos:[]}; // todos array contains all the todos items
        this.removeTodo = this.removeTodo.bind(this);
    }

    render(){
        
        let list =  <div className='todo-list'> 
                    {
                        this.state.todos.map((element,index)=>(
                            <Todo key={index} todo={element} clickAction={(e)=>this.removeTodo(e)}/>
                        ))
                    }
                    </div>
        
        return list; // render an unordered list
    }

    // when component finally mounted populate todos in the state of the component
    componentDidMount(){
        // imitates ajax call
        let list = ['Get ready for work', 'Eat food' ,'Go to Office' ,'Code React App']; // a list of todos 
         this.getTodos();
        // updating the state of the component to update the ui
        this.setState({
            todos:list,
        });
    }

    // function to add a new todo item
    addTodoToList(todo){
        
        let todoList = this.state.todos; // gettting the todo list 
        todoList=todoList.filter(element=>element!==todo);
        todoList.push(todo); // push to the todo list
        
        // update the state of component to update the ui as well
        this.setState({
            todos:todoList
        });
       
        let payload = {todo:todo};
        $.ajax({
            url:'http://localhost:5000/addTodo',
            method:'POST',
            data:payload,
            xhrFields:{withCredentials:true},
            success:(result)=>{
                console.log(result);
            }
       });
    }

    removeTodo(e){
       let todo =  e.target.previousSibling.innerHTML; // get the previous element from the document
       let list = this.state.todos; // this contains the current todo list
        
       // filtering the list to remove the todos
       list = list.filter(element=>
            element !==todo
       );
      
       // updating the state which will update the ui as well
       this.setState({
            todos:list
       });

       let payload = {todo:todo};
       $.ajax({
            url:'http://localhost:5000/doneTodo',
            method:'POST',
            data:payload,
            xhrFields:{withCredentials:true},
            success:(result)=>{
                console.log(result);
            }
       });
    }

    async getTodos(){
        
        $.ajax({
            url:'http://localhost:5000/getTodos',
            method:'POST',
            xhrFields: {withCredentials: true}
        }).done((data)=>{console.log(data)}) 
    }
   
}


export default TodoList; // export the list of todos
