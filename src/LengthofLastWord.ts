/**
 * returns the index of last appearing word
 * @param { string } s
 * @return {number}
 */
function lengthOfLastWord(s: string): number {
  let letter = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ') {
      if (letter!==0) {
        break;
      }
    } else {
      if (s[i] !== ' ') {
        letter++;
      }
    }
  }
  if (letter < 0) {
    return 0;
  } else {
    return letter;
  }
}

export default lengthOfLastWord;
