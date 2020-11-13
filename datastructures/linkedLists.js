/**
 * class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error('Next node must be a member of the Node class')
    }
  }

  setPreviousNode(node) {
    if (node instanceof Node || node === null) {
      this.previous = node;
    } else {
      throw new Error('Previous node must be a member of the Node class')
    }
  }

  getNextNode() {
    return this.next;
  }

  getPreviousNode() {
    return this.previous;
  }
}

module.exports = Node;
 */

const Node = require("./Node");

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    if (currentHead) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }
    this.head = newHead;
    if (!this.tail) {
      this.tail = newHead;
    }
  }

  // Create your .addToTail() method below:
  addToTail(data) {
    const newTail = new Node(data);
    const currentTail = this.tail;
    if (currentTail) {
      //If there is a current tail to the list:
      //Set the current tail’s next node to newTail
      //Set newTail‘s previous node to the current tail
      currentTail.setNextNode(newTail);
      newTail.setPreviousNode(currentTail);
    }
    //set the list’s tail to the new tail.
    this.tail = newTail;
    // if the list doesn’t have a head, set the list’s head to the new tail.
    if (!this.head) {
      this.head = newTail;
    }
  }

  // Create your .removeHead() method below:
  removeHead() {
    const removedHead = this.head;
    /**
     * Check if removedHead has value. If not,
     * that means there’s nothing to remove, \
     * so return to end the method.
     */
    if (!removedHead) {
      return;
    }
    //set the list’s head to removedHead‘s next node.
    this.head = removedHead.getNextNode();
    if (this.head) {
      this.head.setPreviousNode(null);
    }
    //If removedHead is equal to the list’s tail, call the .removeTail()
    if (removedHead === this.tail) {
      this.removeTail();
    }
    return removedHead.data;
  }

  // Create your .removeTail() method below:
  removeTail() {
    const removedTail = this.tail;

    //Check if removedTail has value. If not,
    //that means there’s nothing to remove, so return to end the method.
    if (!removedTail) {
      return;
    }
    //set the list’s tail to removedTail‘s previous node.
    this.tail = removedTail.getPreviousNode();
    /*
     * If the tail has value, set the tail’s next node to null,
     * since the tail of the list shouldn’t have a next node.
     */
    if (this.tail) {
      this.tail.setNextNode(null);
    }

    //If removedTail is equal to the list’s head, call the .removeHead() method.
    if (removedTail === this.head) {
      this.removeHead();
    }
    return removedTail.data;
  }

  printList() {
    let currentNode = this.head;
    let output = "<head> ";
    while (currentNode !== null) {
      output += currentNode.data + " ";
      currentNode = currentNode.getNextNode();
    }
    output += "<tail>";
    console.log(output);
  }
}

module.exports = DoublyLinkedList;
