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
  let [foodItems, setFoodItems] = useState(["Salad", "Green Vegetable", "Roti"])

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems} />
        <FoodInput handleOnChange={handleOnChange} />
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
