/**
 * to return the first occurance of the needle in the haystack
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack: string, needle: string): number {
  if (needle.length === 0) {
    return 0;
  } else if (haystack.length === 0 && needle.length > 0) {
    return -1;
  }
  const haystackLength = haystack.length;
  const needleLength = needle.length;
  const firstLetter = needle[0];
  for (let i = 0; i < haystackLength; i++) {
    if (haystack[i] === firstLetter) {
      if (haystack.substring(i, i + needleLength) === needle) {
        return i;
      }
    }
  }

  return -1;
};

export default strStr;
