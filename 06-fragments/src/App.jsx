import "./App.css";

function App() {
  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk", "Ghee"];
  // let foodItems = [];

  return (
    <>
      <h1>Healthy Food</h1>
      {/* Logical operator */}
      {foodItems.length === 0 && <h3>I am still hungry.</h3>}
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
