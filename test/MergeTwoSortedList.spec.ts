import "mocha";
import {expect} from "chai";
import MergeTwoSortedList from '../src/MergeTwoSortedList';
import {ListNode} from '../src/MergeTwoSortedList';

describe("Testing MergeTwoSortedList", () => {

    it("should return null",()=>{
        const result:any = MergeTwoSortedList(null,null);
        expect(result).to.equal(null);
    });

    it('should return param1',()=>{
        const param1 = new ListNode(10, new ListNode(15));
        const result = MergeTwoSortedList(param1,null);
        expect(result).to.equal(param1);
    });

    it('should return param2',()=>{
        const param1 = new ListNode(10, new ListNode(15));
        const result = MergeTwoSortedList(null,param1);
        expect(result).to.equal(param1);
    });

    it('should return combined listnodes',()=>{
        const l1 = new ListNode(10, null);
        const l2 = new ListNode(12, null);
        const l3 = new ListNode(15, null);
        const l4 = new ListNode(20, null);
        l1.next = l3;
        l2.next = l4;
        const result = MergeTwoSortedList(l1,l2);
        l1.next = l2;
        l2.next = l3;
        l3.next = l4;
        expect(result).to.equal(l1);
    });

    it('should return combined listnodes',()=>{
        const l1 = new ListNode(10, null);
        const l2 = new ListNode(12, null);
        const l3 = new ListNode(15, null);
        const l4 = new ListNode(20, null);
        const l5 = new ListNode(20, null);
        l1.next = l3;
        l2.next = l4;
        l4.next = l5;
        const result = MergeTwoSortedList(l1,l2);
        l1.next = l2;
        l2.next = l3;
        l3.next = l4;
        l4.next = l5;
        expect(result).to.equal(l1);
    });

});