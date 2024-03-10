import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import {useState} from "react"

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "12/02/204",
    },
    {
      name: "Go to Collage",
      dueDate: "12/02/204",
    },
    {
      name: "Learn React",
      dueDate: "12/02/204",
    },
  ];

  const [] = useState(todoItems)

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
