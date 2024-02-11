import "./App.css";

function App() {
  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk", "Ghee"];
  // let foodItems = [];

  return (
    <>
      <h1>Healthy Food</h1>
      {/* Ternary Operator */}
      {foodItems.length === 0 ? <h3>I am still hungry.</h3> : null}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
