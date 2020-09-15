/**
 *
 * @param {number} n
 * @return {string}
 */
export function convertToTitle(n: number): string {
  // convert number to base 26
  // change the numbers to letters
  let res = '';
  while (n != 0) {
    n--;
    res = String.fromCharCode(n % 26 + 65)+res;
    n = Math.floor(n / 26);
  }
  return res;
}
