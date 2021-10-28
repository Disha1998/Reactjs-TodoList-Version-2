// import logo from './logo.svg';
import "./App.css";
// import Header from "Header.js";
import Header from "./Components/Header";
import { Todos } from "./Components/Todos";
import { Todoitem } from "./Components/Todoitem";
import { Addtodo } from "./Components/Addtodo";


import { Footer } from "./Components/Footer";
import React, { useState } from "react";

function App() {


  let initTodo;
  if(localStorage.getItem("todos")===null)
  {
   initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
    console.log(initTodo);
  }

  const onDelete = (todo) => {
    console.log("I am on delete of ", todo);
    // let arr = [1,2,3,4];
    // console.log(arr);
    // let newArr = arr.filter((e) => {
    //   return e !== 2;
    // })
    // console.log(newArr);

    

    settodos(
      todos.filter((e) => {
        return e !== todo;
      }));
      localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo=(title, desc)=>{
    console.log("I am adding this todo", title, desc);
    let sno;
    if(todos.length===0){
      sno = 1;
    }
    else{
   sno = todos[todos.length-1].sno + 1;
   console.log(sno);

    }
    const myTodo={
      sno:sno,
      title:title,
      desc : desc,
    }
    settodos([...todos,myTodo]);
    console.log(myTodo);


    if(localStorage.getItem("todos")){
      localStorage.setItem("todos", JSON.stringify(todos));
    };
  }

  const [todos, settodos] = useState([]);

  return (
    <>
      <Header title="My Todos List" searchbar={true} />
      <Addtodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Todoitem />
      
    
      <Footer />

     
    </>
  );
}







export default App;
