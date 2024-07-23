/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {

    s = s.trim();

    let digits = [];

    function isDigit(num) {
        if (isNaN(parseInt(num))) return false;
        return true;
    }

    let isNegative = false;

    for (let char of s) {

        if (isDigit(char)) {
            digits.push(char);
        } else {
            // if a non digit character is encountered, terminate
            if(digits.length){
                break;
            }
            if(char == '+'){
                isNegative = false;
                continue;
            }
            if(char == '-'){
                isNegative = true;
                continue;
            }
            // if a non digit character is encountered, terminate
            if(digits.length){
                break;
            }
        }
    }

    // removing leading zeros except for only zero
    while(digits.length > 1 && digits[0] == 0){
        digits.shift();
    }

    if(digits.length == 0){
        return 0;
    }

    // Rounding off

    let num = parseInt(digits.join(""));
    if(isNegative) num*=-1;

    if(isNegative && num < Math.pow(-2,31)){
        num = Math.pow(-2,31);
    }
    if(!isNegative && num > Math.pow(2,31)-1){
        num = Math.pow(2,31) -1;
    }

    return num;
};