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

  // Create your .removeByData() method below:
  removeByData(data) {
    let nodeToRemove;
    let currentNode = this.head;
    while (currentNode !== null) {
      /*
       checks if currentNode‘s data matches data. If it does, that means we have found the matching node. 
       */
      if (currentNode.data === data) {
        nodeToRemove = currentNode;
        break;
      }
      //updating currentNode to be its next node.
      //This is how we will iterate through the list as we look for the matching node.
      currentNode = currentNode.getNextNode();
    }

    /*
     check if nodeToRemove has any value. If it doesn’t, that means there was no matching node in the list, so return null. 
     */
    if (!nodeToRemove) {
      return null;
    }
    /*
     check if nodeToRemove is the list’s head. If so, call .removeHead().
     */
    if (nodeToRemove === this.head) {
      this.removeHead();
      //else if nodeToRemove is the list’s tail, call .removeTail().
    } else if (nodeToRemove === this.tail) {
      this.removeTail();
      //else we know that the node is somewhere
      //in the middle of the list
      //er need to reset the pointers to remove it
    } else {
      //set equal to nodeToRemove‘s next node
      const nextNode = nodeToRemove.getNextNode();
      // set equal to nodeToRemove‘s previous node
      const previousNode = nodeToRemove.getPreviousNode();
      nextNode.setPreviousNode(previousNode);
      previousNode.setNextNode(nextNode);
    }
    return nodeToRemove;
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

/**
 * const DoublyLinkedList = require('./DoublyLinkedList.js');

const subway = new DoublyLinkedList();

subway.addToHead('TimesSquare');
subway.addToHead('GrandCentral');
subway.addToHead('CentralPark');
subway.printList();

subway.addToTail('PennStation');
subway.addToTail('WallStreet');
subway.addToTail('BrooklynBridge');
subway.printList();

subway.removeHead();
subway.removeTail();
subway.printList();

subway.removeByData('TimesSquare');
subway.printList();
 */
