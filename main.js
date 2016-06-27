/**
 * Created by HF on 27/6/2016.
 */
var express = require("express");

var app = express();

var port = 3000;
var staticDir = __dirname + "/public";
var i = 2;
var version = 1;

while(i < process.argv.length){
    switch(process.argv[i]){
        case "-v":
            console.info("Version: %d", version);
            i++;
            break;
        case "-p":
            i++;
            port = process.argv[i];
            i++
            break;
        case "-d":
            i++;
            staticDir = process.argv[i];
            i++;
            break;
        default:
    }
    i++;
};

app.use(express.static(staticDir));

console.info("__dirname: %s", __dirname);


//set a port
app.set("port", port);

//start the server on port
app.listen(
    app.get("port"),
    function() {
        console.info("Application started on port %d", app.get("port"));
    }
);