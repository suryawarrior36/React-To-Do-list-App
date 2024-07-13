import React, { useCallback, useState } from 'react'

const ToDoLIst = () => {
    const [tasks,setTasks] = useState(["Eat Breakfast", "Take a shower", "Walk the dog","Learn MERN"])
    const [newTask,setNewTasks] = useState("")

    function handleInputChange(event){
        setNewTasks(event.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t,newTask])
            setNewTasks("")
        }
        
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i !== index)
        setTasks(updatedTasks)
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks]
            [[index],[index-1]] = []
        }
    }

    function moveTaskDown(index){

    }

  return (
    <>
    <div className='to-do-list'>
        <h1>To-Do List</h1>
        <hr/>
        <div>
            <input type='text' 
            placeholder='Enter a task...' 
            value={newTask} 
            onChange={handleInputChange}
            className='input-el'/>
            <button className='add-btn' onClick={addTask}>
                Add Task
            </button>
        </div>
        <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                    <div>
                    <span className='text'>{task}</span>
                    </div>
                    <div className='button-ctr'>
                    <button className='delete' 
                    onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button className='move-btn' 
                    onClick={() => moveTaskUp(index)}>
                        Move Up
                    </button>
                    <button className='move-btn' 
                    onClick={() => moveTaskDown(index)}>
                        Move Down
                    </button>
                    </div>
                    
                </li>
               
            )}
        </ol>
    </div>
    </>
  )
}

export default ToDoLIst