var commands = require('./command');
// Output a prompt
process.stdout.write('prompt >');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {
    var line = data.toString().trim(); // remove the newline
    var cmd = "";

    if (line.indexOf(" ") === -1) {
        cmd = line;
    } else {
        cmd = line.substring(0, line.indexOf(" "));
        var other = line.substring(line.indexOf(" ")).trim();
    }


    if (commands.hasOwnProperty(cmd)) {
        commands[cmd](other);
    } else {
        process.stdout.write('You typed: ' + line);
    }

    // if (cmd !== 'head' && cmd !== 'cat' && cmd !== "tail") {
    //     process.stdout.write('\nprompt > ');
    // }

});
