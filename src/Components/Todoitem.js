import React from "react";
// import { Todos } from './Todos'
// import { App } from "app.js";

export const Todoitem = ({ todo, onDelete }) => {
  console.log(todo);
  return (
    <div>
      {todo && (
        <div>
          <h4>{todo.title}</h4>
          <p>{todo.desc}</p>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => {
              onDelete(todo);
            }}
          >
            Delete
          </button>
        </div>
      )}
      {/* {todo === undefined ? <div>Loading..</div> : <div>
                <h4>{todo.title}</h4>
                <p>{todo.desc}</p>
                </div>} */}

      {/* <App /> */}
      {/* Todoitem Works.! */}
      {/* <h4>{todo.title}</h4> */}
      {/* <p>{todo.desc}</p> */}
    </div>
  );
};
