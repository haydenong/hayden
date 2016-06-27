/**
 * Created by HF on 27/6/2016.
 */
var express = require("express");

var app = express();

app.use(
    process.agrv[2] || express.static(__dirname + "/public")
);

console.info("__dirname: %s", __dirname);


//set a port
app.set("port",
    process.argv[2] || 3000);

//start the server on port
app.listen(
    app.get("port"),
    function() {
        console.info("Application started on port %d", app.get("port"));
    }
);