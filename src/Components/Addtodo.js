// import React from "react";
import React, { useState } from "react";

export const Addtodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("")
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description can not be blank.!");
        }
        addTodo(title,desc);
    }

  return (
    <div className=" container my-5">
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo title
          </label>
          <input
            type="text"
            className="form-control"
            value={title} onChange={(e)=>{setTitle(e.target.value)}}
            id="title"
            aria-describedby="emailHelp"
          />
        
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description 
          </label>
          <input
            type="desc"
            value={desc} onChange={(e)=>{setDesc(e.target.value)}}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>    
        <button type="submit" className="btn btn-success btn-sm">
          Add todo
        </button>
      </form>
    </div>
  );
};
