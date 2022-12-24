import React, { useState } from 'react';
import './App.css';

function App() {

  const [todo,setTodo]=useState('')
  const [todos,setTodos]=useState([])

  const d = new Date()
  const weekDay = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"]
  const day = weekDay[d.getDay()]




  return (
    <div className="app">

      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>

      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day} 🌝 ☕ </h2>
      </div>

      <div className="input">
        <input type="text" placeholder="🖊️ Add item..."  onChange= {(event)=>setTodo(event.target.value)} />
        <i className="fas fa-plus" onClick={()=>setTodos([...todos,{id:Date.now(),txt:todo,status:false,cross:false}])}></i>
      </div>

      <div className="todos">


        {
        todos.map((value)=>
        <div className="todo">
          
          <div className="left">
            <input  onChange={(e)=>
            setTodos(todos.filter(obj=>{
              if(obj.id===value.id){
                obj.status=e.target.checked
              }
              return obj
            }))
            }  value={value.status} type="checkbox" name="" id=""/>
            <p>{value.txt}</p>
          </div>


          <div className="right">
            <i className="fas fa-times" onClick={()=>setTodos(todos.filter((obj2)=> obj2.id !== value.id))}></i>
          </div>

        </div>
        )}




        {
          todos.map((obj)=>
          {
            if(obj.status)
            {
              return(
                <div className="todo">
          
                  <div className="left">
            
                    <p>{obj.txt}</p>
                  </div>
                </div>  
              )
            }
            return  null
          }
          )
          
        }

        
      </div>
    </div>
  );
}


export default App;