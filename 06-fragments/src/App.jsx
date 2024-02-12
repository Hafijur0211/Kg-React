import "./App.css";
import FoodItems from "./components/FoodItems";

function App() {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
  // let foodItems = [];

  return (
    <>
      <h1>Healthy Food</h1>
      {/* Truthy Falsy Method */}
      {foodItems.length === 0 && <h3>I am still hungry.</h3>}
       <FoodItems/>
    </>
  );
}

export default App;
