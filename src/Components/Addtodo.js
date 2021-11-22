// import React from "react";
import React, { useState } from "react";
// import { Todoitem } from "./Todoitem";

// import moment from "moment";

export const Addtodo = ({ addTodo }) => {
  
  const [title, setTitle] = useState("");
  // const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Title or Description can not be blank.!");
    }else
     addTodo(title);

     
     setTitle("")
  };


  // time
 

  return (
    <div className=" container my-5">
      <form onSubmit={submit}>
      
        <div className="mb-3">
          <label htmlFor="title" className="form-label" >
            <h4 >Todo title</h4>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Todo Title here..."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }
          }
            id="title"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Add todo
        </button>
        <br />
      </form>
      

      <label></label>
    </div>
  );
};
