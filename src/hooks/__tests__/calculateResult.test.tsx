import { calculateResult } from "../calculateResult";

describe("calculateResult", () => {
  let result: string;
  it("perform addition calculations", () => {
    result = calculateResult({ enteredValues: "1+", value: "1" }).result
    expect(result).toStrictEqual("2");
    result = calculateResult({ enteredValues: "100+", value: "1" }).result
    expect(result).toStrictEqual("101");
    result = calculateResult({ enteredValues: "1.1+", value: "1" }).result
    expect(result).toStrictEqual("2.1");
    result = calculateResult({ enteredValues: ".5+", value: "1" }).result
    expect(result).toStrictEqual("1.5");
  });
  it("perform subtraction calculations", () => {
    result = calculateResult({ enteredValues: "1-", value: "1" }).result
    expect(result).toStrictEqual("0");
    result = calculateResult({ enteredValues: "100-", value: "1" }).result
    expect(result).toStrictEqual("99");
    result = calculateResult({ enteredValues: "1.5-", value: "1" }).result
    expect(result).toStrictEqual("0.5");
    result = calculateResult({ enteredValues: ".5-", value: "1" }).result
    expect(result).toStrictEqual("-0.5");
  });
  it("perform multiplication calculations", () => {
    result = calculateResult({ enteredValues: "1*", value: "1" }).result
    expect(result).toStrictEqual("1");
    result = calculateResult({ enteredValues: "100*", value: "3" }).result
    expect(result).toStrictEqual("300");
    result = calculateResult({ enteredValues: "1.5*", value: "3" }).result
    expect(result).toStrictEqual("4.5");
    result = calculateResult({ enteredValues: ".5*", value: "5" }).result
    expect(result).toStrictEqual("2.5");
  });
  it("perform division calculations", () => {
    result = calculateResult({ enteredValues: "8/", value: "4" }).result
    expect(result).toStrictEqual("2");
    result = calculateResult({ enteredValues: "100/", value: "8" }).result
    expect(result).toStrictEqual("12.5");
    result = calculateResult({ enteredValues: "8.2/", value: "5" }).result
    expect(result).toStrictEqual("1.64");
    result = calculateResult({ enteredValues: "1200/", value: "5" }).result
    expect(result).toStrictEqual("240");
  });
  it("perform combination calculations", () => {
    result = calculateResult({ enteredValues: "100/10+", value: "1" }).result
    expect(result).toStrictEqual("11");
    result = calculateResult({ enteredValues: "100+10+1/", value: "4" }).result
    expect(result).toStrictEqual("110.25");
  });
  it("resets the entered values displaying to current total", () => {
    result = calculateResult({ enteredValues: "100/10+1", value: "=" }).enteredValues
    expect(result).toStrictEqual("11");
    result = calculateResult({ enteredValues: "100/10*2", value: "=" }).enteredValues
    expect(result).toStrictEqual("20");
  });
  it("clears the result", () => {
    result = calculateResult({ enteredValues: "100/10+1", value: "C" }).result
    expect(result).toStrictEqual("");
  });
});
