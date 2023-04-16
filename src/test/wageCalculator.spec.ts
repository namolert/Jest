import { wageCalculator } from "../wageCalculator";

describe("wageCalculator", () => {
  it("Case 1: Not a leap year, mon, wed", () => {
    expect(wageCalculator(2023, ["mon", "wed"])).toStrictEqual(170);
  });

  it("Case 2: Not a leap year, mon, thu", () => {
    expect(wageCalculator(2023, ["mon", "thu"])).toStrictEqual(170);
  });

  it("Case 3: Not a leap year, mon, tue, no work level", () => {
    expect(wageCalculator(2023, ["mon", "tue"])).toStrictEqual(180);
  });

  it("Case 4: Not a leap year, mon, tue, work level director", () => {
    expect(wageCalculator(2023, ["mon", "tue"], "director")).toStrictEqual(210);
  });

  it("Case 5: Not a leap year, mon, tue, work level manager", () => {
    expect(wageCalculator(2023, ["mon", "tue"], "manager")).toStrictEqual(190);
  });

  it("Case 6: Not a leap year, mon, fri, no work level", () => {
    expect(wageCalculator(2023, ["mon", "fri"])).toStrictEqual(310);
  });

  it("Case 7: Not a leap year, mon, fri,  have work level", () => {
    expect(wageCalculator(2023, ["mon", "fri"], "director")).toStrictEqual(190);
  });

  it("Case 8: Not a leap year, mon, sat", () => {
    expect(wageCalculator(2023, ["mon", "sat"])).toStrictEqual(300);
  });

  it("Case 9: Not a leap year, mon, sun", () => {
    expect(wageCalculator(2023, ["mon", "sun"])).toStrictEqual(300);
  });

  it("Case 10: No work days", () => {
    expect(wageCalculator(2023, [""])).toStrictEqual(0);
  });

  it("Case 11: Leap year, mon, wed", () => {
    expect(wageCalculator(2024, ["mon", "wed"])).toStrictEqual(204);
  });

  it("Case 12: Leap year, mon, thu", () => {
    expect(wageCalculator(2024, ["mon", "thu"])).toStrictEqual(204);
  });

  it("Case 13: Leap year, mon, tue, no work level", () => {
    expect(wageCalculator(2024, ["mon", "tue"])).toStrictEqual(216);
  });

  it("Case 14: Leap year, mon, tue, work level director", () => {
    expect(wageCalculator(2024, ["mon", "tue"], "director")).toStrictEqual(252);
  });

  it("Case 15: Leap year, mon, tue, work level manager", () => {
    expect(wageCalculator(2024, ["mon", "tue"], "manager")).toStrictEqual(228);
  });

  it("Case 16: Leap year, mon, fri, no work level", () => {
    expect(wageCalculator(2024, ["mon", "fri"])).toStrictEqual(372);
  });

  it("Case 17: Leap year, mon, fri,  have work level", () => {
    expect(wageCalculator(2024, ["mon", "fri"], "director")).toStrictEqual(228);
  });

  it("Case 18: Leap year, mon, sat", () => {
    expect(wageCalculator(2024, ["mon", "sat"])).toStrictEqual(360);
  });

  it("Case 19: Leap year, mon, sun", () => {
    expect(wageCalculator(2024, ["mon", "sun"])).toStrictEqual(360);
  });
});
