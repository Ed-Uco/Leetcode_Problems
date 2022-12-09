/**
 * Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
  class ListNode {
      constructor(val, next) {
            this.val = val === undefined ? 0 : val;
            this.next = next === undefined ? null : next;
      }
}
var mergeTwoLists = function (list1, list2) {
      let result = new ListNode();
      let head = result;
      while (list1 != null && list2 != null) {
            if (list1.val < list2.val) {
                  head.next = list1;
                  head = head.next
                 list1 = list1.next; 
            }
            else {
                  head.next = list2
                  head = head.next;
                  list2 = list2.next
            }
            
      }
      while (list1 != null) {
            head.next = list1
            head = head.next;
            list1 = list1.next
            
      }
      while (list2 != null) {
            head.next = list2
            head = head.next;
            list2 = list2.next
            
      }
      return result.next
};

list1 = [1,2,4];
list2 = [1,3,4];
console.log(mergeTwoLists(list1,list2))