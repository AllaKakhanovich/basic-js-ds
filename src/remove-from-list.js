const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {  
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(value) {
    if (this.length === 0) {
      this.head = new Node(value);
    } else {
      let current = this.head; 

      while(current.next) { 
        current = current.next;
      }
      current.next = new Node(value);
    }
    this.length++;
  }

  remove(element) {
    this.removeAt( this.indexOf(element) );
  }
  
  removeAt(position) {
    if (position < 0 || position >= this.length) {
      return null;
    }
    let current = this.head;

    if (position === 0) {
      this.head = current.next;
    } else {
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }
      prev.next = current.next;
    }
    this.length--;
    return current.value;
  }

   indexOf(element) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === element) {
        return index;
      }
      current = current.next;
      index++;
    }

    return -1;
  }
}

function removeKFromList( l, k ) {

  const linkedList = new LinkedList();
  let current = l;
  // for (let i = 0; i < l.length; i++) {
  //   linkedList.add(l[i]);    
  // }
  while (current.next !== null) {
    linkedList.add(current.value);
    current = current.next;
    // linkedList.add(); 
  }
  linkedList.add(current.value);

  linkedList.remove(k);
  return linkedList.head;
}

module.exports = {
  removeKFromList
};
