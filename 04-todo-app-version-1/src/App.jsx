import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />

      <div className="container text-center">
        <div className="row">
          <div className="col-6">Go to College</div>
          <div className="col-4">09/02/2024</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-6">Buy Milk</div>
          <div className="col-4">09/02/2024</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
