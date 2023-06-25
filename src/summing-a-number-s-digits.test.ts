import sumDigits from "./summing-a-number-s-digits";


test("sums the digits of a number", () => {
  expect(sumDigits(10)).toBe(1);
  expect(sumDigits(123)).toBe(6);
  expect(sumDigits(99)).toBe(18);
  expect(sumDigits(-32)).toBe(5);
});

