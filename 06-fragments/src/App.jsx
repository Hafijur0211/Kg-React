import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = ["Sabzi", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
  // let foodItems = [];

  let [textToShow, setTextState] = useState();
  let [foodItems, setFoodItems] = useState([
    "Salad",
    "Green Vegetable",
    "Roti",
  ]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      console.log("Food value entered is " + newFoodItem);
    } 
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems} />
        <FoodInput handleKeyDown={onKeyDown} />
        {/* <p>{textToShow}</p> */}
        <FoodItems items={foodItems} />
      </Container>

      {/* <Container>
      <p>Above is the list of healthy foods that are good for your health and well being. </p>
    </Container> */}
    </>
  );
}

export default App;
