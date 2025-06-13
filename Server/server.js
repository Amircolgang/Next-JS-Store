const http = require("node:http")
const fs = require("fs")
const url = require("url")
const db = require("./db.json")

let port = 8080
let hostname = 'amirShirazi.ir'
const server = http.createServer((req , res ) => {

    if(req.method == "GET" && req.url.startsWith('/api')){
        res.end("ok")
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });