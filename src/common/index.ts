export interface ButtonConfig {
  label: string;
  value: string;
}
export interface ButtonProps extends ButtonConfig {
  onPress: Function;
}

export interface CalculatorState {
  enteredValues: string;
  result: string;
}

export const getCalculatorState = (
  enteredValues: string,
  result: string
): CalculatorState => {
  return { enteredValues, result };
};
