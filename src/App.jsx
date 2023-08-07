import { useState } from 'react'
import './App.css'
import ToDoItem from './components/ToDoItem'

function App() {
  const [toDoArray,setToDoArray] = useState([])

  
  function addToDoThings() {
    const toDoThing = document.getElementById("text").value
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
      <div className='form'>
        <input id='text' className='form--text' type='text' placeholder='Add to-do things'></input>
        <button className='form--button' onClick={addToDoThings}>Add</button>
      </div>
      <div className='list'>
          {toDoList}
      </div>
    </>
  )
}

export default App
