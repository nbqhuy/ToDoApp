import React from "react";
import { useState } from 'react'

export default function ToDoItem(props) {
  const [editFormVisible, setEditFormVisible] = useState(false);
  const [editInputValue, setEditInputValue] = useState('');

  function toggleEditFormDisplay() {
    let textValue = document.getElementById(`list--item--${props.id}`).textContent
    textValue = textValue.substring(0, textValue.length-4)
    setEditInputValue(textValue)
    setEditFormVisible(!editFormVisible);
  }

  return (
    <div id={`list--item--${props.id}`}  className='list--item'>{props.thing}
        <div className="list--item--button">
          <div className='list--item--edit' onClick={toggleEditFormDisplay}>✏️</div>
          <div className='list--item--delete' onClick={props.handleDelete}>🗴</div>
        </div>
        {editFormVisible && (
        <div className='list--item--edit--form'>
          <input 
            id={`edit--input--${props.id}`} 
            className='list--item--edit--input' 
            value={editInputValue} 
            onChange={(e) => setEditInputValue(e.target.value)}
          />
          <div className='list--item--edit--submit'  onClick={() => {
              toggleEditFormDisplay()
              props.handleEdit()
            }}>✓</div>
        </div>
      )}
    </div>
  )
}