//this is the file to mess with

const Queue = require("./Queue");

const load = (flights) => {
  const runway = new Queue(3);
  flights.forEach((flight) => {
    try {
      runway.enqueue(flight);
      console.log(`${flight} taxi to runway.`);
    } catch (e) {
      console.log("Runway full!");
    }
  });

  return runway;
};

const clear = (runway) => {
  while (runway.isEmpty() === false) {
    const cleared = runway.dequeue();
    console.log("\nFlights wait...\n");
    console.log(`${cleared}, is cleared for takeoff!\n${cleared} in air.`);
  }

  console.log("\nAll planes took off, runway clear.");
};

module.exports = { load, clear };

/**
 * 1.

Let’s create and interact with queues made with our Queue class.

We want to create a program in script.js using a library of functions in the runway.js file. The program will help the air traffic control at Codecademy International Airport move planes to the runway and allow those planes to take off in a FIFO order. At the moment this program doesn’t work, so let’s fix it by adding code to the functions in runway.js to finish our program.

Inside of load() create a constant called runway and assign it a bounded queue with a maximum size of 3. This will hold all the planes waiting to be airborne. At the bottom of load(), return runway.
Checkpoint 2 Passed
2.

Inside .forEach(), enqueue each flight onto the runway.
Checkpoint 3 Passed
3.

Add error handling to load().

Inside the .forEach() loop, add code to .load() that tries to log a message after each .enqueue(). Use the following to log a success message:

console.log(`${flight} taxi to runway.`);

Otherwise, catch the error and use the following to log a message if enqueuing fails:

console.log('Runway full!');

Checkpoint 4 Passed
4.

Dequeue flights from the runway.

clear() is a function that takes a full runway as an argument and removes each plane that takes off. Find the while loop in clear().

Declare a constant called cleared before the two console.log statements. It should store the dequeued head of the runway passed to clear().
Checkpoint 5 Passed
5.

If the runway isn’t empty, it should allow each plane to take off until there are no more waiting planes on the runway.

Change the condition in the while loop of clear() so that the loop only runs while there are planes on the runway. Use one of the Queue methods to check for this condition.
Checkpoint 6 Passed
6.

Check your work.

Click on the tab in the text editor for the script.js file. Run the code and read the messages that are logged in the terminal.

Congrats on finishing your first program using queues!

 */
