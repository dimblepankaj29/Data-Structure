// * function ListNode(val, next) {
//     *     this.val = (val===undefined ? 0 : val)
//     *     this.next = (next===undefined ? null : next)
//     * }
var mergeTwoLists = function(l1, l2) {
    // console.log(l1)
    if(l1 ==null )
        return l2
    else if (l2 == null)
        return l1
    else if (l1.val < l2.val) {
        console.log( l1.next)
        l1.next = mergeTwoLists(l1.next ,l2)
        return l1
    }
    else {
        l2.next = mergeTwoLists(l1 ,l2.next)
        return l2
    }
    
};


    let mergeTwoLists = (a, b) => {
        let sentinel = new ListNode(0), head = sentinel;
        while (a && b) {
            head.next = new ListNode(0);
            if (a.val < b.val)
                head.next.val = a.val, a = a.next;
            else
                head.next.val = b.val, b = b.next;
            head = head.next;
        }
        head.next = a || b;
        return sentinel.next;
    };
    


    // let mergeTwoLists = (a, b) => {
//     let sentinel = new ListNode(0), head = sentinel;
//     while (a && b) {
//         head.next = new ListNode(0);
//         if (a.val < b.val)
//             head.next.val = a.val, a = a.next;
//         else
//             head.next.val = b.val, b = b.next;
//         head = head.next;
//     }
//     head.next = a || b;
//     return sentinel.next;
// };

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
  }

var mergeTwoLists = function(l1, l2) {
    let list = new ListNode()
    let head = list
    
    while (l1 !== null && l2 !== null) {
	
		// Select the smallest value from either linked list,
		// then increment that list forward.
        if (l1.val < l2.val) {
            list.next = new ListNode(l1.val)
            l1 = l1.next
        } else {
            list.next = new ListNode(l2.val)
            l2 = l2.next
        }
        
        list = list.next
    }
    
	// It's possible that one linked list is shorter than the other so we just
	// add on the remainder of the last linked list. It's already sorted :)
    if (l1 !== null)
        list.next = l1
    if (l2 !== null)
        list.next = l2
    
	// return .next because this first element in the linkedlist is empty
    return head.next
};


console.log( mergeTwoLists([1,2,4]
    [1,3,4]))


    function sum (a, b){
        console.log(a+b)
    }

    sum(2,3 )