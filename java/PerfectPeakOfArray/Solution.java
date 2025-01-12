package PerfectPeakOfArray;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.stream.Collectors;

public class Solution {

    // solved for unique numbers
    public int perfectPeak(ArrayList<Integer> A) {
        int max = A.get(0), min = A.get(A.size()-1);

        ArrayList<Integer> maxOfLeft = new ArrayList<>(A.size());
        ArrayList<Integer> minOfRight = new ArrayList<>(A.size());

        // pre computing numbers
        for(int i=0;i<A.size();i++){
            max = Math.max(max, A.get(i));
            maxOfLeft.add(max);
            min = Math.min(min,A.get(A.size()-1-i));
            minOfRight.add(min);
        }
        Collections.reverse(minOfRight);
        for(int itr = 1; itr < A.size() - 1; itr++){
            if(maxOfLeft.get(itr).compareTo(minOfRight.get(itr)) == 0) {
                // System.out.println(A.get(itr));
                return 1;
            }
        }

        return 0;
    }
    public static void main(String args[]){
        Solution solution = new Solution();
        int[] input = { 1, 2, 3, 4, 5, 4, 3, 2, 3, 10 };

        ArrayList<Integer> A = Arrays.stream(input)
                                .boxed()
                                .collect(Collectors.toCollection(ArrayList::new));
        
        System.out.println(solution.perfectPeak(A));
    }
}
