import java.util.*;

public class Solution {
    // DO NOT MODIFY THE LIST. IT IS READ ONLY
    public int majorityElement(final List<Integer> A) {
        
        Map<Integer,Integer> frequencyMap = new HashMap<>();
        int max = 0, soln = 0;
        for(int num:A){
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0)+1);
            if(max < frequencyMap.get(num)){
                max = frequencyMap.get(num);
                soln = num;
            }
        }
        return soln;
    }
}
