import React, { FC } from "react";
import styles from "./Display.module.css";

interface DisplayProps {
  enteredValues: string;
  result: string;
  theme?: string;
}

const Display: FC<DisplayProps> = ({ theme, enteredValues, result }) => {
  return (
    <div className={styles.container} data-testid="display">
      <div className={styles.enteredValues}>{enteredValues}</div>
      <div className={styles.result}>{result}</div>
    </div>
  );
};

export default Display;
