/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length-1;
    let carry = 1;
    while(i>=0){

        if(digits[i]+carry == 10){
            digits[i] = 0;
            carry = 1;
        }else{
            digits[i] = digits[i]+carry;
            carry = 0;
            break;
        }

        i--;
    }
    if(carry == 1){
        digits.unshift(1);
    }
    return digits;
};