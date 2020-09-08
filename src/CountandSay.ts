/**
 * pattern based function
 * 1 -> one one
 * 11 -> two one
 * 21
 * 1211
 * 111221
 * 312211
 * 13112221
 * 1113213211
 * 31131211131221
 * 13211311123113112211
 * 11131221133112132113212222
 * @param {number} n
 * @return {string} res
 */
export function countAndSay(n: number): string {
  let counter: string = '1';
  let result: Array<{ num: number, str: string }>;
  for (let i = 1; i < n; i++) {
    result = toFrequency(counter);
    counter = toCount(result);
  }
  return counter;
};

/**
 * convert the number to frequency chart format
 * example 1 => [{num:1,str:'1'}] , 11-> [{num:2.str:'1}]
 * @param {string} numberString
 * @return {Array<{num:number,str:string}>}
 */
export function toFrequency(
    numberString: string): Array<{ num: number, str: string }> {
  let digits = 0;
  const frequency = [{num: 1, str: numberString[0]}];
  for (let i = 1; i < numberString.length; i++) {
    if (numberString[i] !== numberString[i - 1]) {
      frequency.push({num: 1, str: numberString[i]});
      digits++;
    } else {
      frequency[digits].num++;
    }
  }
  return frequency;
}

/**
 * count the frequency chart function function
 * example [{num:1,str:'1'}] -> 11,  [{num:2.str:'1}] -> 21
 * @param {Array<{num:number,str:string}>} arr
 * @return {string}
 */
export function toCount(
    arr: Array<{ num: number, str: string }>): string {
  let count: string = '';
  arr.forEach((subarr) => {
    count = count + subarr.num.toString() + subarr.str;
  });
  return count;
}

export default countAndSay;
