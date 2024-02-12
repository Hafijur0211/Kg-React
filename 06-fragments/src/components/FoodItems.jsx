import Item from "./Item";

const FoodItems = () => {
    let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
    // let foodItems = [];
    return (
        <ul className="list-group">
            {foodItems.map((item) => (
                <Item key={item} foodItem={item} />
            ))}
        </ul>
    );
};

export default FoodItems;
