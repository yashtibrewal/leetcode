package UniqueBinarySearchTrees;

import java.util.*;

/**
 * Definition for binary tree
 * class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Solution {

    private ArrayList<TreeNode> soln = new ArrayList<>();

    class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) { val = x; }

        @Override
        public String toString() {
            return " "+val;
        }
    }

    private TreeNode addNode(TreeNode root, int x) {
        if(root!=null) {
            if(root.val < x){
                if(root.right == null)
                    root.right = new TreeNode(x);
                else
                    addNode(root.right, x);
            }else{
                if(root.left == null)
                    root.left = new TreeNode(x);
                else
                    addNode(root.left, x);
            }
        }
        return root;
    }

    private void generatePossibilities(Set<Integer> addedElements, TreeNode root, int a) {
        for(int j=1;j<=a;j++){

            if(addedElements.contains(j)) continue;

            // add the jth node
            addNode(root, j);
            addedElements.add(j);
            generatePossibilities(addedElements, root, a);
        }
    }


    private void preOrderTraversal(TreeNode root) {
        System.out.print(" " +root);
        if(root == null) return;
        preOrderTraversal(root.left);
        preOrderTraversal(root.right);
    }
    
	public ArrayList<TreeNode> generateTrees(int a) {

        if(a==1){
            TreeNode one = new TreeNode(1);
            soln.add(one);
            return soln;
        }
        for(int i=1;i<=a;i++){
            Set<Integer> adddedIntegers = new HashSet<>();
            TreeNode root = new TreeNode(i);
            adddedIntegers.add(i);
            soln.add(root);
            generatePossibilities(adddedIntegers, root, a);
        }

        return soln;
	}

    public static void main(String args[]){
        Solution solution = new Solution();
        List<TreeNode> list = solution.generateTrees(Integer.parseInt(args[0]));
        for(TreeNode node:list){
            solution.preOrderTraversal(node);
            System.out.println("");
        }
    }
}

// Attempted