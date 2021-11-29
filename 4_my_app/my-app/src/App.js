import "./App.css";
import { StrictMode } from "react";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState } from "react";

function App() {
  //traditional way - wont work removing items runtime
  /*let todos = [
    {
      sno: 1,
      title: "Go to market",
      desc: "You need to go to the market",
    },
    {
      sno: 2,
      title: "Go to mall",
      desc: "You need to go to the mall",
    },
    {
      sno: 3,
      title: "Go to showroom",
      desc: "You need to go to the showroom",
    },
  ];*/

  //using useState hook to remove data runtime
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to market",
      desc: "You need to go to the market",
    },
    {
      sno: 2,
      title: "Go to mall",
      desc: "You need to go to the mall",
    },
    {
      sno: 3,
      title: "Go to showroom",
      desc: "You need to go to the showroom",
    },
  ]);

  const onDelete = (todo) => {
    console.log("On delete...!!!", todo);

    //deleting using useState
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, desc) => {
    console.log("adding todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  return (
    <>
      <Header title="Todos List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
