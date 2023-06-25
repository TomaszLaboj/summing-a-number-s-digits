"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumDigits(number) {
    var absoluteNumber = Math.abs(number);
    var splitted = splitToArray(absoluteNumber.toString());
    var digits = splitted.map(function (digit) { return Number(digit); });
    var sumOfDigits = digits.reduce(function (acc, curr) { return acc + curr; });
    return sumOfDigits;
}
console.log(sumDigits(123));
function splitToArray(sometext) {
    var splitted = sometext.split('');
    return splitted;
}
exports.default = sumDigits;
