
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function (l1, l2) {
    var current = new ListNode(), carry = 0, sum = 0, head = null, curr = null;
    while (l1 || l2) {
        if (l1 && l2) {
            sum = l1.val + l2.val + carry;
            if (sum > 9) {
                sum = sum - 10;
                carry = 1;
            }
            else {
                carry = 0;
            }
            l1.val = sum;
            current = l1;
            l1 = l1.next;
            l2 = l2.next;
        } else if (l1) {
            sum = l1.val + carry;
            if (sum > 9) {
                sum = sum - 10;
                carry = 1;
            }
            else {
                carry = 0;
            }
            l1.val = sum;
            current = l1;
            l1 = l1.next;
        } else if (l2) {
            sum = l2.val + carry;
            if (sum > 9) {
                sum = sum - 10;
                carry = 1;
            }
            else {
                carry = 0;
            }
            l2.val = sum;
            current = l2;
            l2 = l2.next;
        }
        if (head == null) {
            head = current;
            curr = current;
        } else {
            curr.next = current;
            curr = current;
        }
    }
    if (carry) {
        current = new ListNode(carry, null);
        if (head == null) {
            head = current;
            curr = current;
        } else {
            curr.next = current;
            curr = current;
        }
    }
    return head;
};

var n1 = new ListNode(2, new ListNode(4, null));
var n2 = new ListNode(5, new ListNode(6, null));
console.log(addTwoNumbers(n1, n2));
