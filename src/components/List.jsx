import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

export default function List(props) {

  function handleDelete(){
    props.onDelete(props.id)
  }
  return (
    <div className='listitem'> 
        <li>{'\u2022'}  {props.item} </li>
        <div className='list-btn' onClick={handleDelete}><FontAwesomeIcon icon= {faDeleteLeft} /></div>
        
    </div>
  )
}

// {'\u2716'}