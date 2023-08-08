import { useState } from 'react'
import './App.css'
import ToDoItem from './components/ToDoItem'

function App() {
  const [toDoArray,setToDoArray] = useState([])

  const handleSubmit = event => {
    event.preventDefault();
  }

  function addToDoThings() {
    let toDoThing = document.getElementById("text--input").value.trim()
    document.getElementById("text--input").value = ""
    if (toDoThing.length === 0) {
      alert("Input cannot be empty.");
      return;
    } else if (toDoThing.length > 1000) {
      alert("Input cannot exceed 1000 characters.");
      return;
    }
    if(toDoThing)
      setToDoArray([{id:toDoArray.length?toDoArray[0].id+1:1,thing: toDoThing},...toDoArray])
      
  }
  function editToDoThings(itemToEdit) {
    const toDoThing = document.getElementById(`edit--input--${itemToEdit.id}`).value
    if(toDoThing) {
      const updatedToDoArray = toDoArray.map(item => {
        if(item.id === itemToEdit.id) {
          return {...item,thing: toDoThing}
        }
        return item
      })
      setToDoArray(updatedToDoArray)
    }
  }

  function deleteToDoThings(itemToDelete) {
    const updatedToDoArray = toDoArray.filter(item => item !== itemToDelete)
    setToDoArray(updatedToDoArray)
  }
  
  console.log(toDoArray)
  const toDoList = toDoArray.map(toDoItem => <ToDoItem key={toDoItem.id} id={toDoItem.id} thing={toDoItem.thing} handleEdit={()=>editToDoThings(toDoItem)} handleDelete={()=>deleteToDoThings(toDoItem)}/>
)
  return (
    <>
      <h1>To Do List</h1>
      <form className='form'  onSubmit={handleSubmit}>
        <input id='text--input' className='form--text' type='text' placeholder='Add to-do things'></input>
        <button type='submit' className='form--button' onClick={addToDoThings}>Add</button>
      </form>
      <div className='list'>
          {toDoList}
      </div>
    </>
  )
}

export default App
