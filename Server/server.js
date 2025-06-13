const http = require("node:http")
const fs = require("fs")
const url = require("url")
const db = require("./db.json")


const server = http.createServer((req , res ) => {

    if(req.method == "GET" && req.url.startsWith(''))
})