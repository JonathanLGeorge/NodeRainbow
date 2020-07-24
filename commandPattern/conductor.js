class Conductor {
//will add more code tomorrow that will add to the commands
    run(command) {
        console.log(`Executing command: ${command.name}`);
        command.execute();
    }

}

module.exports = new Conductor();
