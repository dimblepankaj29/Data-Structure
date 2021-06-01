/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 * Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]
 */
/**
 * @param {Node} head
 * @return {Node}
 */
function copyRandomList(head) {
    const map = new Map();
    
    function copy(node)   {
      if (node == null) return null;
      if (map.get(node) != null) return map.get(node);
  
      const n = new Node(node.val);
      map.set(node, n);
  
      n.next = copy(node.next);
      n.random = copy(node.random);
      return n;
    }
  
    return copy(head);
  }

  