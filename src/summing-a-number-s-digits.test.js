"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var summing_a_number_s_digits_1 = require("./summing-a-number-s-digits");
test("sums the digits of a number", function () {
    expect((0, summing_a_number_s_digits_1.default)(10)).toBe(1);
    expect((0, summing_a_number_s_digits_1.default)(123)).toBe(6);
    expect((0, summing_a_number_s_digits_1.default)(99)).toBe(18);
    expect((0, summing_a_number_s_digits_1.default)(-32)).toBe(5);
});
