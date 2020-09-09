/**
 * adding 1 to array and keep it a single digit
 * e.g. [1,2,3] -> [1,2,4]
 * @param {Array<number>} digits
 * @return {Array<number>}
 */
function plusOne(digits: number[]): number[] {
  let carry = 0; let res = 0;
  digits[digits.length-1]++;
  for (let i=digits.length -1; i>=0; i--) {
    res = digits[i] + carry;
    if (res>9) {
      digits[i] = res%10;
      carry=1;
    } else {
      digits[i] = res;
      carry = 0;
    }
  }
  if (carry == 1) {
    digits.unshift(1);
  }
  return digits;
};
export default plusOne;

