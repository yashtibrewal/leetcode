import { it } from "mocha";

export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    // checking for null inputs
    if(l1 === null){
        if(l2 === null){
            return null;
        }
        return l2;
    }else if(l2 === null){
        return l1;
    }

    // creating list nodes for future use
    let head: ListNode;
    let iterator: ListNode = new ListNode();
    
    // initializing the first head node of result
    if(l1.val<l2.val){
        iterator = l1;
        l1 = l1.next;
    }else{
        iterator = l2;
        l2 = l2.next;
    }
    head = iterator;

    // traversing through both input lists
    while(l1!==null && l2!== null){
        if(l1.val<l2.val){
            iterator.next = l1;
            l1 = l1.next;
        }else{
            iterator.next = l2;
            l2 = l2.next;
        }
        iterator = iterator.next;
        iterator.next = null;
    }

    // combined the left of list 
    if(l1===null){
        iterator.next = l2;
    }else if(l2 === null){
        iterator.next = l1;
    }
    return head;
};

export default mergeTwoLists;