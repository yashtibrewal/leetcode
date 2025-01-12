package OccuranceOfEachNumber;
// Interview Bit

import java.util.ArrayList;
import java.util.SortedMap;
import java.util.TreeMap;

public class Solution {
    public ArrayList<Integer> findOccurences(ArrayList<Integer> A) {
        
        SortedMap<Integer,Integer> frequencyMap = new TreeMap<>();

        for(int num:A){
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }
        ArrayList<Integer> result = new ArrayList<>(frequencyMap.values());

        return result;
    }

    public static void main(String args[]){
        Solution solution = new Solution();
        ArrayList<Integer> list = new ArrayList<>();
        list.add(4);
        list.add(3);
        list.add(3);
        list.add(5);
        list.add(8);
        list.add(2);
        list.add(1);
        list.add(1);

        System.out.println(solution.findOccurences(list));
    }
}