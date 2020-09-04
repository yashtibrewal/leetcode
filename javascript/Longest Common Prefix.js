//https://leetcode.com/problems/longest-common-prefix/
var longestCommonPrefix = function(strs) {
    let l=strs.length,prefix = "",j=0,mismatch=false;
    if(l==0||strs[0].length==0) return "";
    while(!mismatch)
    {
        char = strs[0][j];
        for(let i=0;i<l;i++){
            if(strs[i].length==j){
                mismatch=true;
                break;
            }
            if(char!=strs[i][j]){
                mismatch = true;
                break;
            }
        }
        if(!mismatch){
            prefix+=char;
            j++;
        }
    }
    return prefix;
};

console.log(longestCommonPrefix(["c"]));
