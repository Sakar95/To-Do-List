import React from 'react'

export default function List(props) {

  function handleDelete(){
    props.onDelete(props.id)
  }
  return (
    <div className='listitem'> 
        <li>{'\u2022'}  {props.item} </li>
        <button onClick={handleDelete}>{'\u2716'}</button>
    </div>
  )
}