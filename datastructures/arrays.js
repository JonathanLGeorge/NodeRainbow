const listOfNumbers = [1, 250, -42, 0.4, 17];

const storenumber = (num) => {
  listOfNumbers.push(num);
};

const doYouHaveThisNumber = (num) => {
  listOfNumbers.includes(num);
};

/**
 * this is a way to store stuff as object insteade of array
 */

const receivedNumbers = {};

const storeNumber = (num) => {
  receivedNumbers[num] = true;
};

const doYouHaveThisNumberObj = (num) => {
  receivedNumbers[num] === true;
};

storeNumber(50);
storeNumber(40);
storeNumber(20);
storeNumber(9);

console.log(doYouHaveThisNumberObj.);

///////
/**
 * custom stack
 */
class Stack {
    constructor() {
      this._array = [];
    }
   
    push(newValue) {
      this._array.push(newValue);
    }
   
    pop() {
      return this._array.pop();
    }
  }

const stack = new Stack();
stack._array.unshift('value');


////////////////////////////////////
//workning with nodes
/////////////////////////////////

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  const firstNode = new Node(5)
  console.log(firstNode.data)
  console.log(firstNode.next)
  
  
  module.exports = Node;

  //////////////////////
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
    setNextNode(node){
      this.next = node
    }
  }
  
  const firstNode = new Node('I am an instance of a Node!');
  
  const secondNode = new Node("Im the second instance of a Node");
  firstNode.next = secondNode
  
  console.log(firstNode)
  module.exports = Node;

  ////////////////////////

  //building a linked list
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  
    setNextNode(node) {
      //making sure that we are sending a Node so we can have a legit linked list 
      if(node instanceof Node || node === null){
        this.next = node
      } else{
        throw new error("this aint a Node son!")
      }
    }
  }
  
  const firstNode = new Node('I am an instance of a Node!');
  
  
  //we are testing to see that this will throw an error because its not a node
  firstNode.setNextNode(5678)
  
  module.exports = Node;


  ///////////////////////
  //getting and setting examples

  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
    getNextNode(){
        return this.next
      }
  
    setNextNode(node) {
      if (node instanceof Node || node === null) {
        this.next = node;
      } else {
        throw new Error('Next node must be a member of the Node class.');
      }
    }
  }
  
  const firstNode = new Node('I am an instance of a Node!');
  const secondNode = new Node('I am the next Node!');
  firstNode.setNextNode(secondNode);
  
  console.log(firstNode.getNextNode(secondNode));
  
  firstNode.
  module.exports = Node;
  

  /////////////////
  //walking through the linked list

  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  
    setNextNode(node) {
      if (node instanceof Node || node === null) {
        this.next = node;
      } else {
        throw new Error('Next node must be a member of the Node class.');
      }
    }
  
    getNextNode() {
      return this.next;
    }
  }
  
  const strawberryNode = new Node('Berry Tasty');
  const vanillaNode = new Node('Vanilla');
  const coconutNode = new Node('Coconuts for Coconut');
  
  vanillaNode.setNextNode(strawberryNode);
  strawberryNode.setNextNode(coconutNode);
  
  let currentNode = vanillaNode;
  
  //here we are walking through the list
  while(currentNode) {
    console.log(currentNode.data);

    //this is how you set the next node
    currentNode = currentNode.getNextNode();
  }
  
  module.exports = Node;
  

  //another example
  const oldest = new Node('John');
const middle = new Node('Jacob');
const youngest = new Node('Jingleheimer');
 
youngest.setNextNode(middle);
middle.setNextNode(oldest);;
 
let currentSibling = youngest;
let oldestName = '';
while(currentSibling !== null) {
  oldestName = currentSibling.data;
  currentSibling = currentSibling.getNextNode();
}
 
console.log(`There goes ${oldestName} Schmidt!`);


/**
 * const node1 = new Node(5)
 * const node2 = new Node(node1)
 * node2.getNextNode();
 * 
 * //this will output null
 * because When node2 is initialized it contains no links to the next node
 */

//

//another lesson 

const Node = require('./Node');

class LinkedList {
  
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;

    //checking if there is a current head
    if (currentHead) {
        //setting the list's head's next node to currentHead
      this.head.setNextNode(currentHead);
    }
  }

}

module.exports = LinkedList;


//adding a tail
const Node = require('./Node');

class LinkedList {
  
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }
  
  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }
  
}

module.exports = LinkedList;


//
//
//
//
//removing head nodes


const Node = require('./Node');

class LinkedList {
  
  constructor() {
    this.head = null;
  }
  removeHead(){
    const removedHead = this.head

    if(!removedHead){

      //this ends excecution of this method
      return 
    }
    this.head = removedHead.getNextNode()

    return removedHead.data
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }

}

module.exports = LinkedList;




/////
/////
//printing a list of stuff
const Node = require('./Node');

class LinkedList {
  
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }

  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }

}

module.exports = LinkedList;









////////////////////////
////////////////////////
//Using the Linked List
//ues the code above
//and a node.js file 


const LinkedList = require('./LinkedList');

const seasons = new LinkedList();
seasons.printList();

seasons.addToHead('summer');
seasons.addToHead('spring');
seasons.printList();

seasons.addToTail('fall');
seasons.addToTail('winter');
seasons.printList();

seasons.removeHead();
seasons.printList();


//node.js file
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  
    setNextNode(node) {
      if (!(node instanceof Node)) {
        throw new Error('Next node must be a member of the Node class');
      }
      this.next = node;
    }
  
    getNextNode() {
      return this.next;
    }
  }
  
  module.exports = Node;





  //////
  ////////
  //what will this output?

  class LinkedList {
    constructor() {
      this.head = null;
    }
    
    addToHead(data) {/* Method that adds a node to the head of the list */}
    
    addToTail(data) {/* Method that adds a node to the tail of the list */}
    
    removeHead() {/* Method that removes the head of the list */}
  }
   
  const testList = new LinkedList();
  testList.addToHead(3);
  testList.addToHead(8);
  testList.addToTail(2);
  testList.removeHead();
  testList.addToTail(4);
  testList.removeHead();
  console.log(testList.head.data);


  //2
