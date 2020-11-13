const LinkedList = require("./LinkedList");

class Queue {
  constructor() {
    this.queue = new LinkedList();
  }
}

module.exports = Queue;

// const restaurantOrders = new Queue();
// console.log(`restaurantOrders has ${restaurantOrders.size} nodes`)
