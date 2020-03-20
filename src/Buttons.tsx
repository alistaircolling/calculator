import React, { FC } from "react";
import Button from "./Button";
import { ButtonConfig } from "./common";
import styles from './Buttons.module.css'

interface ButtonsProps {
  onButtonPress: Function;
}

export const Buttons: FC<ButtonsProps> = ({ onButtonPress }) => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonsContainer}>
        {buttonsConfig.map(button => {
          return (
            <Button
              key={button.value}
              label={button.label}
              onPress={onButtonPress}
              value={button.value}
            />
          );
        })}
      </div>

    </div>
  );
};

const buttonsConfig: Array<ButtonConfig> = [
  {
    label: "0",
    value: "0"
  },
  {
    label: "1",
    value: "1"
  },
  {
    label: "2",
    value: "2"
  },
  {
    label: "3",
    value: "3"
  },
  {
    label: "4",
    value: "4"
  },
  {
    label: "5",
    value: "5"
  },
  {
    label: "6",
    value: "6"
  },
  {
    label: "7",
    value: "7"
  },
  {
    label: "8",
    value: "8"
  },
  {
    label: "9",
    value: "9"
  },
  {
    label: ".",
    value: "."
  },
  {
    label: "+",
    value: "+"
  },
  {
    label: "-",
    value: "-"
  },
  {
    label: "÷",
    value: "/"
  },
  {
    label: "x",
    value: "*"
  },
  {
    label: "C",
    value: "C"
  },
  {
    label: "=",
    value: "="
  }
];
