import React, { FC } from "react";
// eslint-disable-next-line
import { calculateResult } from "./hooks";
// eslint-disable-next-line
import Display from "./Display";
// eslint-disable-next-line
import { Buttons } from "./Buttons";
import Logo from "./Logo"
import { CalculatorState } from './common'
import styles from './Calculator.module.css'

interface CalculatorProps {
  theme?: string;
  //onChange: (event: React.FormEvent<HTMLInputElement>, valid: boolean) => void;
}

const Calculator: FC<CalculatorProps> = ({ theme }) => {
  // eslint-disable-next-line
  const [displayValues, setDisplayValues] = React.useState<CalculatorState>({ enteredValues: "0", result: "" });

  const handleOnButtonPress = (value: string) => {
    setDisplayValues(calculateResult({
      value,
      enteredValues: displayValues.enteredValues,
    }));
  };

  return (
    <div className={styles.container}>
      <Logo />
      <Display
        enteredValues={displayValues.enteredValues}
        result={displayValues.result} />
      <Buttons onButtonPress={(value: string) => handleOnButtonPress(value)} />
    </div>
  );
};

Calculator.defaultProps = {
  realtimeValidation: false
} as Partial<CalculatorProps>;

export default Calculator;
