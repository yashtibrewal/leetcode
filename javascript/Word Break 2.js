/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {

    const result = new Set();

    function backtrack(cur, i) {

        let j = i + 1;
        while (j <= s.length) {
            if (wordDict.includes(s.substring(i, j))) {
                
                cur.push(s.substring(i, j));
                backtrack(cur, j);
                j++;
                cur.pop();
            } else {
                j++;
            }
        }

        if (cur.join("").length == s.length) {
            result.add(cur.join(" "));
        }

    }

    backtrack([], 0);
    return result;
};

/**
 * Using backtrack method, either we choose the character or we dont.
 * Complexity = O(2^N) where N = s.length;
 */