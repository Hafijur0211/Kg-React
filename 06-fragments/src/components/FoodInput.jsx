import styles from "./FoodInput.module.css";

const FoodInput = () => {
    return (
        <input
            type="text"
            placeholder="Enter Food Item Here"
            className={styles.foodInput}
        />
    );
};

export default FoodInput;