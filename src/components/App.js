import React, { useState } from "react";
import Header from "./Header"
import Input from "./Input";
import List from "./List"

function App() {
  
  const[list,setList]=useState([]);

  function add(inputItem){
    // console.log(item)
    setList(prevList=>{
      return(
        [...prevList,inputItem]
      )
    })
  }

  function deleteItem(id){
    setList(prevList=>{
      return prevList.filter((itemAdded,index)=>{
        return index !==id
      })
    })


  }

  return (
    <div className="App">
      <Header />
      <hr />
      <Input onAdd={add}/>
          <div className="list">
            {list.length === 0 ? <p className="emptylist">Nothing To-Do...</p>:<ul>
              {list.map((itemAdded,index)=>{
                return <List item={itemAdded} id={index} key={index} onDelete={deleteItem}/>
              })}
            </ul>}
            
          </div>
      
      
      
    </div>
  );
}

export default App;
