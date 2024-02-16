import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let foodItems = ["Sabzi", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
  // let foodItems = [];

  let textToShow = "Food Item Entered by User"

  const handleOnChange = (event) => {
    console.log(event.target.value)
    textToShow = event.target.value
}

  return (
    <>
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodInput handleOnChange={handleOnChange} />
      <p>{textToShow}</p>
      <FoodItems items={foodItems} />
    </Container>

    {/* <Container>
      <p>Above is the list of healthy foods that are good for your health and well being. </p>
    </Container> */}
    
    </>
  );
}

export default App;
