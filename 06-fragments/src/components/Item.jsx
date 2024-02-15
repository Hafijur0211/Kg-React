import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles['kg-span']}>{foodItem}</span>
      <button className={`${styles.button} btn btn-info`} >Buy</button>
    </li>
    
  );
};

export default Item;
