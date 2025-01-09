import java.util.Arrays;

class MinimumNumberOfOperationsToMoveAllBallsToEachBox {

    public int[] minOperations(String boxes) {
        int[] intBoxes = Arrays
                         .stream(boxes.split(""))
                         .mapToInt(Integer::parseInt)
                         .toArray();

        int[] result = new int[intBoxes.length];
        for(int i=0;i<result.length;i++){
            result[i] = 0;
        }

        for(int pos=0; pos<intBoxes.length; pos++) {
            int temp = 0, distance;
            while(temp != pos) {
                distance = pos - temp;
                result[pos] += distance * intBoxes[temp];
                temp++;
            }
            temp = pos + 1;

            while(temp < intBoxes.length){
                distance = temp - pos;
                result[pos] += distance * intBoxes[temp];
                temp++;
            }
        }
        return result;
    }

    public static void main(String args[]){
        MinimumNumberOfOperationsToMoveAllBallsToEachBox obj = new MinimumNumberOfOperationsToMoveAllBallsToEachBox();
        System.out.println(Arrays.toString(obj.minOperations(args[0])));
    }

}