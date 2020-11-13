const LinkedList = require("./LinkedList");

class Queue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  enqueue(data) {
    //help us avoid overflow.
    /*
    If there is room in the queue, a new node should be added to the tail end of the queue and increasing its size. We’ll also log a message if successful. 
     */
    if (this.hasRoom()) {
      //adds a new node to the queue
      this.queue.addToTail(data);
      this.size++;
      console.log(`Added ${data} to queue! Queue size is now ${this.size}.`);
    } else {
      throw new Error("Queue is full!");
    }
  }
  dequeue() {
    //checks if the queue is empty.
    if (!this.isEmpty()) {
      /*
      If the queue isn’t empty, the head node should be removed and the size of the queue should decrease. We will also log a message if the dequeue was successful. 
       */
      const data = this.queue.removeHead();
      this.size--;
      console.log(
        `Removed ${data} from queue! Queue size is now ${this.size}.`
      );
      return data;
    } else {
      throw new Error("Queue is empty!");
    }
  }
}

module.exports = Queue;

const restaurantOrder = new Queue();
console.log(`restaurantOrder queue has ${restaurantOrder.size} orders.\n`);
restaurantOrder.enqueue("apple pie");
restaurantOrder.enqueue("roast chicken");
restaurantOrder.enqueue("quinoa salad");
const groceries = new Queue();
groceries.enqueue("eggs");

/**prints out 
 * 
 * restaurantOrder queue has 0 orders.

Added apple pie! Queue size is now 1.
Added roast chicken! Queue size is now 2.
Added quinoa salad! Queue size is now 3.
Added eggs! Queue size is now 1.
 */
