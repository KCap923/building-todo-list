import React, { useState } from 'react'

function ToDoList(){

const [ tasks, setTasks ] = useState(["Learn HTML", "Learn CSS", "Learn Javascript", "Attend Bootcamp", "Finish Bootcamp Strong!", "Master Skills", "Take  DSA Course", "React Native", "Learn Python",]);
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

    <button className="add-button">
      Add
    </button>


    
    <button className="edit-button">
      Edit
    </button>
    
  </div>

<ol>

  {tasks.map((task, index) => 
  <li key={index}> 
  <span className="text">{task}</span>

  <button className="delete-button">
      Delete
    </button>
  </li>
  
  )}

</ol>

</div>


);
}


export default ToDoList