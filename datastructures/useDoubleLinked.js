const DoublyLinkedList = require("./DoublyLinkedList.js");

const subway = new DoublyLinkedList();

subway.addToHead("TimesSquare");
subway.addToHead("GrandCentral");
subway.addToHead("CentralPark");
subway.printList();

subway.addToTail("PennStation");
subway.addToTail("WallStreet");
subway.addToTail("BrooklynBridge");
subway.printList();

subway.removeHead();
subway.removeTail();
subway.printList();

subway.removeByData("TimesSquare");
subway.printList();

/*
<head> CentralPark GrandCentral TimesSquare <tail>
<head> CentralPark GrandCentral TimesSquare PennStation WallStreet BrooklynBridge <tail>
<head> GrandCentral TimesSquare PennStation WallStreet <tail>
<head> GrandCentral PennStation WallStreet <tail>




Doubly Linked Lists: JavaScript
Doubly Linked List Review

Congratulations, you have created and implemented a doubly linked list class in JavaScript!

We did this by:

    Using our Node class to hold the data and links between nodes
    Implementing a DoublyLinkedList class to handle external operations on the list, like adding and removing nodes
    Creating an instance of our list, and using the .printList() method to track the changes we made

Instructions

Feel free to play around a bit with your code. Here are some ideas:

    Create a few nodes and add them to both ends of a new doubly linked list
    Print your doubly linked list out using your .printList() method
    Remove your doubly linked list’s head or tail node
    Print your list again — were the right nodes removed?
    Remove a specific node from somewhere in the middle of the list, then print the list again. Did it work?
    We created our .removeByData() method by iterating from the head of the list to the tail. Do you think you could start at the tail and iterate backward? Try it!


*/
