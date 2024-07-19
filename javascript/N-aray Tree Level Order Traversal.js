/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {

    if (!root) return [];

    const levels = {};

    levels[0] = [root.val];
    let maxLevel = 0;

    function dfs(node, level) {
        if (maxLevel < level) {
            maxLevel = level;
        }
        const children = node.children;

        if (children) {

            if (levels[level] === undefined) {
                levels[level] = [];
            }
            for (let child of children) {
                levels[level].push(child.val);

                dfs(child, level + 1);

            }


        }

    }

    dfs(root, 1)

    const result = [];

    for (let i = 0; i < maxLevel; i++) {

        const level = levels[i];

        result.push(level);

    }

    return result;

};


function _Node(val, children) {
    this.val = val;
    this.children = children;
};

let node8 = new _Node(8, null);

let node7 = new _Node(7, [node8]);
let node6 = new _Node(6, null);
let node5 = new _Node(5, null);

let node4 = new _Node(4, [node5, node6]);
let node3 = new _Node(3, [node7]);
let node2 = new _Node(2, null);

let node1 = new _Node(1, [node2, node3, node4]);

console.log((levelOrder(node1)));
