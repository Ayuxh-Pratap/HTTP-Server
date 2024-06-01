const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} new rew recieved\n`
    fs.appendFile("log.txt", log ,(err , data) => {
        res.end("hello from server")
    } )
});

myServer.listen(8000, ()=> {console.log("server started")})

