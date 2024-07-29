/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {

    let totalTeams = 0;
    let head = new Node(rating[0]);


    /**
     * 
     * @param {Node} root 
     * @param {Node} insertionNode 
     */
    function insertElement(root, insertionNode){

        if(root.val > insertionNode.val){
            // it will go to left
            root.letfCount++;
            if(root.left!=null){
                insertElement(root.left, insertionNode);
            }else{
                root.left = insertionNode;
            }
        }else{
            root.rightCount++;
            if(root.right!=null){
                insertElement(root.right, insertionNode);
            }else{
                root.right = insertionNode;
            }
        }

    }

    // Constructing a binary tree
    for(let i=1;i<rating.length;i++){
        
        let node = new Node(rating[i]);
        insertElement(head,node);
    }


    return totalTeams;
};

class Node{  

    /**
     *
     * @param {number} val 
     * @param {Node} left 
     * @param {Node} right 
     */
    constructor(val, left = null, right = null){
        this.val = val;
        this.left = left;
        this.right = right;
        this.letfCount = 0;
        this.rightCount = 0;
    }

}

numTeams([2, 5, 3, 4, 1]);