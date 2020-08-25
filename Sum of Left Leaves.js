/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}
var sumOfLeftLeaves = function(root) {
    if(!root)
      return 0;
    let sum = 0;
    function traverse(root, l){
        root.left && traverse(root.left, true);
        root.right && traverse(root.right, false);
        if(!root.left && !root.right && l)
            sum += root.val;
    }
    traverse(root,false);
    return sum;
};

var l1 = new TreeNode(3, new TreeNode(9,null,null), new TreeNode(20, new TreeNode(15,null,null), new TreeNode(7,null,null)))
console.log(sumOfLeftLeaves(l1));