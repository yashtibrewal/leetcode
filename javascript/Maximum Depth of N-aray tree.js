/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {

    if (!root) {
        return 0;
    }

    let max = 0;

    function dfs(node, depth) {
        if (depth > max) max = depth;
        const children = node.children;

        for (let child of children) {
            if (!child) continue;
            dfs(child, depth + 1);
        }

    }

    dfs(root,1);

    return max;

};