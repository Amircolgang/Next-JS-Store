const http = require("node:http")
const fs = require("fs")
// const url = require("url")
// const db = require("./db.json")

let port = 3030
let hostname = 'amirShirazi.ir'
const server = http.createServer((req , res ) => {

    if(req.method == "GET" && req.url.startsWith('/api/project')){
        fs.readFile("db.json" , (err) => {
            if(err){
                throw err
            }

            res.w
        })
    }
})

server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });