
import SkylabArray from "../index";

describe("Given a class", () => {
  describe("When it recieves as inputs 8, 9, 3", () => {
    test("Then it should return the following object: (0: 8, 1: 9, 2: 3)", () => {
      const number1 = 8;
      const number2 = 9;
      const number3 = 3;
      const expectedObject = {
        0: 8,
        1: 9,
        2: 3,
      };
      object = SkylabArray(number1, number2, number3);
      const object = expect(object).toBe(expectedObject);

    });
  });
});
