import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

function App() {
  let foodItems = ["Sabzi", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
  // let foodItems = [];

  return (
    <>
      <h1 className="food-heading" >Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
}

export default App;
