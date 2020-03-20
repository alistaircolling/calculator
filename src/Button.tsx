import React, { FC } from "react";
import { ButtonProps } from "./common/";
import styles from "./Button.module.css";

const Button: FC<ButtonProps> = ({ label, onPress, value }) => {
  return <button className={styles.button} onClick={() => onPress(value)}>{label}</button>;
};

export default Button;
