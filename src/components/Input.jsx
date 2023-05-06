import React, { useState } from 'react'

export default function Input(props) {

  const [inputItem,setInputItem]=useState("")

  
  function handleChange(event){
    setInputItem(event.target.value)
  }

  function handleClick(){
    props.onAdd(inputItem)
    setInputItem("")
  }

  return (
    <div className='inputBox'>
      <input 
        onChange={handleChange}
        type="text" 
        value={inputItem}
        placeholder='Add task here...'/>
      <button onClick={handleClick}>+</button>
    </div>
  )
}
