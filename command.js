var fs = require('fs');



module.exports = {

    pwd: function() {
        process.stdout.write(process.cwd());
    },

    date: function() {
        var now = new Date().toString();
        process.stdout.write(now);
    },

    exit: function() {
        process.exit();
    },

    ls: function() {

        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
                process.stdout.write(file.toString() + "\n");
            });
        });

    },

    echo: function(string) {
        process.stdout.write(string);
    },

    cat: function(file) {
        fs.readFile(file, function(err, contents) {
            if (err) throw err;
            process.stdout.write(contents.toString());
        });
          process.stdout.write('\nprompt > ');

    },

    head: function(file) {

        fs.readFile(file, function(err, contents) {
            if (err) throw err;

            var contentArray = contents.toString().split('\n');

            for (var x = 0; x < 5; x++) {
                process.stdout.write(contentArray[x] + "\n");
            }
              process.stdout.write('\nprompt > ');
        });

    },

    tail : function(file){

      fs.readFile(file, function(err, contents) {
          if (err) throw err;

          var contentArray = contents.toString().split('\n');

          for (var x = contentArray.length-5; x < contentArray.length; x++) {
              process.stdout.write(contentArray[x] + "\n");
          }

      });
          process.stdout.write('\nprompt > ');
    }
};
