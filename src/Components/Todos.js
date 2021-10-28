import React from "react";
import { Todoitem } from "../Components/Todoitem";

export const Todos = (props) => {
  console.log(props.todos);
  let mystyle = {
    minHeight: "70vh",
  };
  return (
    <div className="container my-5" style={mystyle}>
      <h3 className=" my-5">Todos List</h3>
      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            return (
              <>
                <Todoitem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />{" "}
                <hr />
              </>
            );
          })}
    </div>
  );
};
