/**
 * checks if there exists a substring that can be repeated
    n times to make itself the input string.
 * example: ababab will return true as there exists a substring
    "ab" which cab contruct to the input string.
 * @param {string} inputString
 * @return {boolean}
 */
function repeatedSubstringPattern(inputString: string): boolean {
  let referenceString:string = '';
  let solved:boolean = false;
  let referenceStringLength:number = 1;
  let subString:string = '';
  const length:number = inputString.length;
  let i:number;
  // we do not need to iterate after the half length
  const max:number = Math.floor(length/2)+1;
  while (referenceStringLength<max && !solved) {
    if (length%referenceStringLength!==0) {
      referenceStringLength++;
      continue;
    }
    /**
     * we take a reference string and
     * compare it for the full length fo the string
     */
    referenceString = inputString.substr(0, referenceStringLength);
    for (i=referenceStringLength;
      i<=length-referenceStringLength;
      i+=referenceStringLength) {
      subString = inputString.substring(i, i+referenceStringLength);
      if (referenceString !== subString) {
        break;
      }
    }
    if (referenceString === subString) {
      solved = true;
    }
    referenceStringLength++;
  }

  return solved;
};

export default repeatedSubstringPattern;
