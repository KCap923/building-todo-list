import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Learn HTML",
    "Learn CSS",
    "Learn Javascript",
    "Attend Bootcamp",
    "Finish Bootcamp Strong!",
    "Master Skills",
    "Take  DSA Course",
    "React Native",
    "Learn Python",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  {/*Add function*******************************************************************************/ }
  function addTask() {
    setTasks([tasks, newTask]);
    setNewTask("");
  }
    {/*Add function*******************************************************************************/ }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
    {/*Add function*******************************************************************************/ }
  function editTask(index) {


  }

  return (
    <div className="to-do-list">
      <h1> To-Do List </h1>

      <div>
        <input
          type="text"
          placeholder="Add task ..."
          value={newTask}
          onChange={handleInputChange}/>

          <button className="add-button"> Add </button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span> 

{/* Checkbox ***************************************************************************************/}
            <input type="checkbox" className="check-box" id="check-box" />

{/* Edit Button ***************************************************************************************/}
            <button className="edit-button" onClick={() => editTask(index)}>
              Edit
            </button>

{/* Delete Button ***************************************************************************************/}
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
