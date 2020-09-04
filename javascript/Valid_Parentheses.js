// https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const stack = [];
    const openSignatures = ['(', '{', '['];
    const closeSignatires = [')', '}', ']'];
    try {
        const getIndex = function(char, signatures) {
            const len = signatures.length;
            for (let i = 0; i < len; i++) {
                if (char === signatures[i]) {
                    return i;
                }
            }
            return undefined;
        };
        let index;
        const len = s.length;
        for (let i = 0; i < len; i++) {
            index = -1;
            index = getIndex(s[i], openSignatures);
            if (index !== undefined) {
                stack.push(index);
            }

            index = getIndex(s[i], closeSignatires);
            if (index !== undefined) {
                if (index !== stack.pop()) {
                    return false;
                }
            }
        }
    } catch (e) {
        return false;
    }
    if (stack.length == 0) {
        return true;
    } else {
        return false;
    }
};

console.log(isValid('[{()}]'));
