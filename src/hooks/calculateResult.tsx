import { CalculatorState, getCalculatorState } from '../common'
interface CalculateConfig {
  value: string;
  enteredValues: string;
}

const containsZeroAtStart = RegExp(/^[0]/);
const operatorAtEnd = RegExp(/[+-/*]$/)
const equalsAtEnd = RegExp(/[=]$/)
const equalsKey = RegExp(/[=]/)
const resetKey = RegExp(/[C]/)


const calculateResult = (config: CalculateConfig): CalculatorState => {
  const { value, enteredValues } = config;
  const appendedValues = `${enteredValues}${value}`

  // the first time the calculator renders
  if (value === undefined) return getCalculatorState("0", "")
  // reset the calc
  if (resetKey.test(value)) return getCalculatorState("0", "")
  // has a zero at the start and is longer than 1
  if (containsZeroAtStart.test(enteredValues))
    return getCalculatorState(appendedValues.substr(1), "")
  // has operator at the end
  if (operatorAtEnd.test(appendedValues))
    // IMPORTANT!
    // FIXME
    // eval is a security risk. Replace with vanilla javascript
    // or 3rd party library
    // eslint-disable-next-line
    return getCalculatorState(appendedValues, eval(appendedValues.slice(0, -1)))

  // equals at the end so reset display with new total
  if (equalsAtEnd.test(appendedValues))
    return getCalculatorState(eval(appendedValues.slice(0, -1)).toString(), "")

  // IMPORTANT!
  // FIXME
  // eval is a security risk. Replace with vanilla javascript
  // or 3rd party library
  const result = eval(appendedValues).toString();

  // reset for equals
  if (equalsKey.test(value))
    return getCalculatorState(result, "")
  return getCalculatorState(appendedValues, result)

};
export { calculateResult };
