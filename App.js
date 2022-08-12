import React, { useState } from 'react'
import './App.css';

function App() {

  const [newItem, setNewItem] = useState

 

    let input = prompt("What would you like to do?");

    // const todos = ['To do list Display below.......'];

    while (input !== 'exit' && input !== 'q'){
        if(input === 'list'){
            console.log('************')
            
            for(let i=0; i<todos.length; i++){
                console.log(`${i}: ${todos[i]}`)
                
            }
            console.log('************')
        }
        else if(input === 'new'){
            const newTodo = prompt('OKAY.....What is the new you like add to do?');
            newItem.push(newTodo);
            console.log(`${newTodo} is added to list sucessfully.`);
        }
        else if(input === 'delete'){
            const deleteIndex = parseInt(prompt('OKAY.....at Which index you want to delete from to do?'));

            if(!Number.isNaN(deleteIndex)){
                const deletedItem = newItem.splice(deleteIndex, 1);
                console.log(`${deletedItem} is deleted`);
            }
            else{
                console.log('Invalid index');
            }
            
        }
        input = prompt("What would you like to do?");
    }

    console.log("OK YOU ARE EXIT THE APP!!!")


      function display_array()
      {
        var e = "<hr/>";   
          
        for (var y=0; y<todos.length; y++)
        {
          e += "ToDoList Item No. " + y + " => " + newItem[y] + "<br/>";
        }
        document.getElementById("Result").innerHTML = e;
      }
  
  return (

    <div className='App'>
      {/* 1. Header */}
      <h1>To Do LIst App Using React.js</h1>

    
      <ul>
        <li>"new" - Add a ToDo Task</li>
        <li>"list" - List all ToDo Task </li>
        <li>"delete" - Remove/Delete a specific ToDo Task</li>
        <li>"exit" - Quit a ToDo app</li>
    </ul>

      <h3>TodoList.....Type list to LIst all ToDos.</h3>
      <p>***You have to type Exit or q for listing Todos</p>
      <button type="button" onclick={ () => display_array()}>Show ToDos</button>
      <div id="Result"></div> 
      
    </div>
  );
}

export default App;
