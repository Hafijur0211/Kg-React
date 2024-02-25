import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (event) => console.log(event);

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
