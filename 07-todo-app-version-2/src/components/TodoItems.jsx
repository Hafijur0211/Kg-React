import styles from './TodoItems.module.css'
import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
    return (
        <div className={styles.itemsContainer}>
            {todoItems.map(item => <TodoItem todoName={item.name} todoDate={item.dueDate}></TodoItem>)}
        </div>
    );
};

export default TodoItems;
