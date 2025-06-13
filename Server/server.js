const http = require("node:http")
const fs = require("fs")
// const url = require("url")
const db = require("./db.json")

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

    if (req.method == "POST" && req.url.startsWith("/api/users")) {
        let clientBook = ""

        req.on("data", (data) => {
            clientBook = clientBook + data.toString()
        })

        req.on("end", () => {
            const parsClientBooks = JSON.parse(clientBook)

            const newBook = {
                id: global.crypto.randomUUID(), ...parsClientBooks, free: 1
            }

            db.books.push(newBook)

            console.log(newBook)
            fs.writeFile("db.json", JSON.stringify(db), (err) => {
                if (err) {
                    throw err
                }

                res.writeHead(200, { "Content-Type": "application/json" });
                res.write(JSON.stringify({ message: "New Book Is succes Fully :)" }));
                res.end();
            })


        })
    }
})

server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });