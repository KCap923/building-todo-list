import React, { useState } from 'react'

function ToDoList(){

const [ tasks, setTasks ] = useState([]);
const [ newTask, setNewTask ] = useState("");

function handleInputChange(event) {
setNewTask(event.target.value);

}
function addTask() {


}
function deleteTask(index) {


}
function moveTaskUp(index) {


}
function moveTaskDown(index) {


}

return (

<div className="to-do-list">

  <h1> To-Do List </h1> 

  <div> 
    
    <input 
    type="text"
    placeholder='Enter a task'
    value={newTask}
    onChange={handleInputChange} />

    <button className="addbutton">
      Add
    </button>
    <button className="delete">
      Delete
    </button>
    <button className="edit">
      Edit
    </button>
    
  </div>

</div>


);
}


export default ToDoList