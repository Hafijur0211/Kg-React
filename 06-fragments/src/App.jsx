import "./App.css";

function App() {
  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk"];
  return (
    <>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {foodItems.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
