import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItem todoName="Buy Milk" todoDate="12/02/204" />
        <TodoItem todoName="Go to College" todoDate="12/02/204" />
      </div>
    </center>
  );
}

export default App;
