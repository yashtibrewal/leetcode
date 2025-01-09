import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

public class ConvertAnArrayInto2DArray {
    
    public List<List<Integer>> findMatrix(int[] nums) {
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        List<List<Integer>> result = new ArrayList<>();

        // Creates the frequency map
        for(int num:nums){
            if(frequencyMap.containsKey(num)){
                frequencyMap.put(num, frequencyMap.get(num)+1);
            }else {
                frequencyMap.put(num,1);
            }
        }

        List<Integer> currentGroup;
        while(!frequencyMap.isEmpty()){

            currentGroup = new ArrayList<>();
            for(Iterator<Map.Entry<Integer, Integer>> it = frequencyMap.entrySet().iterator(); it.hasNext();){
                
                Map.Entry<Integer,Integer> entry = it.next();
                
                currentGroup.add(entry.getKey());

                // decrement
                entry.setValue(entry.getValue() - 1);

                // removing exhausted keys
                if(entry.getValue() == 0){
                    it.remove();
                }
            }
            result.add(currentGroup);
        }

        return result;
    }

    public static void main(String args[]) {
        ConvertAnArrayInto2DArray obj = new ConvertAnArrayInto2DArray();
        System.out.println(obj.findMatrix(new int[]{1,2,3,4,1,2,3,1,2,1}));
    }
}
