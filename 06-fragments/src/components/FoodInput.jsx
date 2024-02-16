import styles from "./FoodInput.module.css";

const FoodInput = () => {
    return (
        <input
            type="text"
            placeholder="Enter Food Item Here"
            className={styles.foodInput}
            onChange={(event) => console.log(event.target.value)}
        />
    );
};

export default FoodInput;
