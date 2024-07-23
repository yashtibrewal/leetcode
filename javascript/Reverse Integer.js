// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (x == 0) return 0;
    let num = x.toString();

    if (x > 0) {
        // If the length is more then 10, it is automatically out of range.
        if (num.length > 10) return 0;

        num = num.split("").reverse().join("");
        if (num.length == 10) {
            if (num > (Math.pow(2, 31) - 1).toString()) {
                return 0;
            } else {
                return parseInt(num);
            }
        } else {
            // cannot go out of bounds with 9 and less digits
            return parseInt(num);
        }

    } else {

        // If the length is more then 10, it is automatically out of range.
        if (num.length > 11) return 0;

        num = num.slice(1); // removes the negative

        num = num.split("").reverse().join("");

        if (num.length == 10) {
            if (num > (Math.pow(2, 31)).toString()) {
                return 0;
            } else {
                return parseInt("-"+num);
            }
        } else {
            // cannot go out of bounds with 9 and less digits
            return parseInt("-"+num);
        }
    }
};

console.log(reverse(-1124));
console.log(reverse(145));
console.log(reverse(Math.pow(-2, 31) - 5));
console.log(reverse(Math.pow(2, 31)));
console.log(reverse(Math.pow(2, 31) - 1));