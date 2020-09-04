//https://leetcode.com/problems/roman-to-integer/
var romanToInt = function(s) {
    /**
     * take a number, check if next number is greater than the present number
     * if true then negate the present number else add the present number
     */
    let l = s.length, sum=0, values={
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    };
    for(let i=0;i<l-1;i++){
      if(values[s[i]]<values[s[i+1]]){
          sum-=values[s[i]];
      }else{
          sum+=values[s[i]];
      }
    }
    // add the last number
    sum+=values[s[l-1]];
    return sum;
};

console.log(romanToInt("MCMXCIV"));

