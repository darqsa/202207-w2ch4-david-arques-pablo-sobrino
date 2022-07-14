import SkylabArray from "./SkylabArray";

describe("Given a function SkylabArray", () => {
  describe("When it's called and it receives the value 0", () => {
    test("Then it should return 0", () => {
      const value = 0;
      const expectedOutput = 0;

      const expectedReturn = new SkylabArray(value);
      expect(expectedOutput).toBe(expectedReturn[0]);
    });
  });
});
