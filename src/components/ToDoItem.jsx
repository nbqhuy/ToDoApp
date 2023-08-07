import React from "react";
import { useState } from 'react'

export default function ToDoItem(props) {
  const [editFormVisible, setEditFormVisible] = useState(false);

  function toggleEditFormDisplay() {
    setEditFormVisible(!editFormVisible);
  }


  return (
    <div className='list--item'>{props.thing}
        <div className='list--item--edit' onClick={toggleEditFormDisplay}>✏️</div>
        <div className='list--item--delete' onClick={props.handleDelete}>🗴</div>
        {editFormVisible && (
        <div className='list--item--edit--form'>
          <input id={`edit--input--${props.id}`} className='list--item--edit--input'/>
          <div className='list--item--edit--submit'  onClick={() => {
              toggleEditFormDisplay()
              props.handleEdit()
            }}>✓</div>
        </div>
      )}
    </div>
  )
}