import java.util.ArrayList;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Solution {
    static ArrayList<Integer> performOps(ArrayList<Integer> A) {
        ArrayList<Integer> B = new ArrayList<Integer>();
        for (int i = 0; i < 2 * A.size(); i++) B.add(0);
        for (int i = 0; i < A.size(); i++) {
                B.set(i, A.get(i));
                B.set(i + A.size(), A.get((A.size() - i) % A.size()));
        }
        return B;
    }

    public static void main(String args[]){
        int[] input = { 5, 10, 2, 1 };
        ArrayList<Integer> A = 
            new ArrayList<>(IntStream.of(input).boxed().collect(Collectors.toList()));
        ArrayList<Integer> B = performOps(A);
        for (int i = 0; i < B.size(); i++) {
                System.out.print(B.get(i) + " ");
        }
    }

}
