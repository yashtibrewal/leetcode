package ArrayRotate;

import java.util.ArrayList;

public class Solution {
	public ArrayList<Integer> rotateArray(ArrayList<Integer> A, int B) {
        // If B is greater the A's size
        B = B % A.size();
        // Asssuming B is positive
        if (B<0) return A;

        ArrayList<Integer> solution = new ArrayList<>();
        for(int i=B;i<A.size();i++){
            solution.add(A.get(i));
        }
        for(int i=0;i<B;i++){
            solution.add(A.get(i));
        }
        return solution;
	}
}
// Passed