const http = require("node:http")
const fs = require("fs")
// const url = require("url")
// const db = require("./db.json")

let port = 3030
let hostname = 'amirShirazi.ir'
const server = http.createServer((req , res ) => {

    if(req.method == "GET" && req.url.startsWith('/api/project')){
        fs.readFile("db.json" , (err , db) => {
            if(err){
                throw err
            }
            const data = JSON.parse(db)
            res.writeHead(200 , {'Content-Type' :  "application/json" })
            res.write(JSON.stringify(data.project))
            res.end()
        })
    }

    if(req.method == "POST" , req.url.startsWith('/api/users')){
        req.on('data' , (data) => {
            console.log(JSON.parse(data))
        })
        res.write("Ok")
        res.end()
    }
})

server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });