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
        <h2>C'mon it's {day} 🌝☕</h2>
      </div>

      <br />

      <div className="input">
        <input type="text" placeholder="🖊️ Add item..."  onChange= {(event)=>setTodo(event.target.value)} />
        <i onClick={()=>setTodos([...todos,{id:Date.now(),txt:todo,status:false,cross:false}])}> + </i>
      </div>


      <div className="container">

        <div className='rt'> 
          <span color="white">hello i am right </span>
          <div className="todos">
            <h4>COMPLETED TASK</h4>
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

        <div className="cent">
          <span>hello i am centre </span>
          <div className="todos">
            <h4>NOTE IS REMEBERED</h4>
            {
              todos.map((value)=>
                <div className="todo">
                  <div className="left">
                    <input  onChange={(e)=>
                        setTodos(todos.filter(obj=>{
                          if(obj.id===value.id)
                          {
                            obj.status=e.target.checked
                          }
                        return obj
                        }
                        ))
                      }  value={value.status} type="checkbox" name="" id=""/>
                    <p>{value.txt}</p>
                  </div>
                  <div className="right">
                    <i className="x" onClick={()=>setTodos(todos.filter((obj2)=> obj2.id !== value.id))}> x </i>
                  </div>
                </div>
              )
            }
          </div>
        </div>

        <div className ="lf">
          <span>hello i am left </span>
          <textarea class="textarea" placeholder="Note a point to rembember..."></textarea>
        </div>

      </div>

    </div>
  );
}


export default App;