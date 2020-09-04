var reverse = function (x) {
    let max = Math.pow(2, 31);
    var rev = 0;
    while (x != 0) {
        rev = rev * 10 + x % 10;
        x = parseInt(x / 10);
        if(rev>max-1||rev<-1*max) return 0;
    }
    return rev;
};
console.log(reverse(15342364691));