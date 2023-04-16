import { passwordSafety } from "../passwordSafety";

describe("passwordSafety", () => {
  it("Case 1: Password is less than 8 characters", () => {
    expect(passwordSafety("ppp")).toStrictEqual(
      "Password should more than 8 characters"
    );
  });

  it("Case 2: Password isn't contain any number", () => {
    expect(passwordSafety("@Bcdefgh")).toStrictEqual(
      "Password should contain at least 1 number"
    );
  });

  it("Case 3: Password isn't contain any uppercase character", () => {
    expect(passwordSafety("@2cdefgh")).toStrictEqual(
      "Password should contain at least 1 uppercase character"
    );
  });

  it("Case 4: Password isn't contain any lowercase character", () => {
    expect(passwordSafety("@2CDEFGH")).toStrictEqual(
      "Password should contain at least 1 lowercase character"
    );
  });

  it("Case 5: Password isn't contain any special character", () => {
    expect(passwordSafety("A2cdefgh")).toStrictEqual(
      "Password should contain at least 1 special character"
    );
  });

  it("Case 6: Password is safe", () => {
    expect(passwordSafety("@2Cdefgh")).toStrictEqual(
      "Password is safe (a little bit)"
    );
  });

});
