var isPalindrome = function(x) {
    if(x<0|| x%10 ==0 || x==0)
      return false;
    let rev = 0, cp = x;
    while(x>0){
        rev = rev*10 + x%10;
        x=parseInt(x/10);
    }
    return cp==rev;
  };
console.log(isPalindrome(121));