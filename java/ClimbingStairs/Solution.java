package ClimbingStairs;

import java.util.ArrayList;
import java.util.HashMap;

public class Solution {

    int finalSum = Integer.MAX_VALUE;
    HashMap<Integer,Integer> memo = new HashMap<>();
    public int solve(ArrayList<Integer> A) {
        if(A.size() < 2) {
            return 0;
        }

        if (A.size() == 2 || A.size() == 3) {
            return A.get(0) + A.get(1);
        }

        solve(A, 0, 0);
        return finalSum;
    }

    public void solve(ArrayList<Integer> A, int i, int sum){
        int N = A.size();

        // Case: Index out of bounds
        if(i >= N) return;

        sum += A.get(i);

        // Pruning cases which go larger then final Sum;
        if(sum >= finalSum) return;

        // if we already have a sum for i which is less then the new sum
        if(this.memo.containsKey(i) && sum >= this.memo.get(i)){
            return;
        }

        // Adding a sum for i, either it is less then exisiting, or new.
        this.memo.put(i, sum);

        // Case: When reached the final step
        if(i == N-1) {
            finalSum = Math.min(sum, finalSum);
            return;
        }

        solve(A, i+1, sum);
        solve(A, i+2, sum);
    }


    public static void main(String args[]){
        Solution solution = new Solution();
        ArrayList<Integer> A = new ArrayList<>();
        A.add(1);
        A.add(2);
        A.add(3);
        A.add(4);
        System.out.println(solution.solve(A));
    }
}
