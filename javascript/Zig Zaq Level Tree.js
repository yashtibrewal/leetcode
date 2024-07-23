/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (!root) return [];

    let symbol = Symbol('break');
    const queue = [root, symbol];
    const traversal = [];
    let flip = false;
    const result = [];
    let temp = new Array();

    while (queue.length) {

        const item = queue[0];
        queue.shift();

        if (!item) continue;

        if (typeof item == 'symbol') {

            traversal.push(symbol);
            if (queue.length == 0) {
                break;
            }
            queue.push(symbol);
            continue;
        }

        traversal.push(item);

        if (item.left) queue.push(item.left);
        if (item.right) queue.push(item.right);


    }


    for (let item of traversal) {
        if (item == symbol) {
            if (flip)
                result.push(temp.reverse());
            else
                result.push(temp);
            temp = new Array();
            flip = !flip;
        } else {
            temp.push(item.val);
        }
    }
    return result;
};

let nodeFive = new TreeNode(5, null, null);
let nodeFour = new TreeNode(4, null,);
let nodeThree = new TreeNode(3, null, nodeFive);
let nodeTwo = new TreeNode(2, nodeFour, null);
let nodeOne = new TreeNode(1, nodeTwo, nodeThree);

console.log(zigzagLevelOrder(nodeOne));
