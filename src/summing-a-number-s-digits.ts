function sumDigits(number: number): number {
    const absoluteNumber = Math.abs(number);
    const splitted: string[] = splitToArray(absoluteNumber.toString());
    const digits: number[] = splitted.map((digit) => Number(digit));
    
    const sumOfDigits = digits.reduce((acc,curr) => acc+curr);
    return sumOfDigits;
}
console.log(sumDigits(123));

function splitToArray(sometext: string): string[]{
    const splitted: string[] = sometext.split('');
    return splitted;
}
export default sumDigits;