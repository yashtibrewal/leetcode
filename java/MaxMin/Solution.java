package MaxMin;

import java.util.ArrayList;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Solution {
    public int solve(ArrayList<Integer> A) {
        
        int max = Integer.MIN_VALUE;
        int min = Integer.MAX_VALUE;
        
        for(int i=0;i<A.size();i++){
            min = Math.min(A.get(i),min);
            max = Math.max(A.get(i),max);
        }
        return min+max;
    }

    public static void main(String args[]){
        Solution solution = new Solution();
        int[] input = { -2, 1, -4, 5, 3 };
        ArrayList<Integer> list = 
            new ArrayList<>(IntStream.of(input).boxed().collect(Collectors.toList()));
        solution.solve(list);
    }
}
