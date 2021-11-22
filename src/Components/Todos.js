import React, { } from "react";
import {Table} from 'react-bootstrap'
import { Todoitem } from "../Components/Todoitem";



export const Todos = (props) => {
  
  let mystyle = {
    minHeight: "70vh",
  };

  

  return (
    <div className="container my-5" style={mystyle}>
      <h3 className=" my-5" style={{textAlign:"center"}}>Todos List</h3>
     <Table>
      <thead>
    <tr>
      <th>Sno.</th>
      <th>Todo</th>
      <th>Start Time</th>
      <th>End Time</th>
      <th>Time Difference</th>
      <th>Delete Todo</th>
    </tr>
  </thead>
  </Table>
      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todo)  => 
        {
            return (
              
              <>
                <Todoitem 
                  todo={todo}
                  key={props.sno}
                  onDelete={props.onDelete}
                />{" "}
              </>
            );
          })}
          
    </div>
  );
        }
