package FirstMissingInteger;

import java.util.ArrayList;

public class Solution {
    public int firstMissingPositive(ArrayList<Integer> A) {
        
        int negativeNumbers = 0;
        int zeroes = 0;

        for(int num:A){
            if(num<0){
                negativeNumbers++;
            } else if(num == 0) {
                zeroes++;
            }
        }
        
        if(A.size() == negativeNumbers ||
           A.size() == zeroes ||
           A.size() == negativeNumbers + zeroes) {
            return 1;
        }
        
        int actualSize = A.size() - negativeNumbers - zeroes;

        ArrayList<Boolean> B = new ArrayList<>(actualSize+1);
        for(int i=0;i<=actualSize;i++){
            B.add(false);
        }
        

        for(int num:A){
            if(num<=actualSize && num >0)
                B.set(num, true);
        }

        for(int i=1;i<=actualSize;i++){
            if(!B.get(i)){
                return i;
            }
        }

        return actualSize+1;

    }
}
// Accepted