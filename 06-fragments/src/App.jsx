import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";

function App() {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
  // let foodItems = [];

  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage />
      <FoodItems />
    </>
  );
}

export default App;
