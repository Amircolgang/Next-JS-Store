// const http = require("node:http")
// const fs = require("fs")
// // const url = require("url")
// const db = require("./db.json")

// let port = 3030
// let hostname = 'amirShirazi.ir'
// const server = http.createServer((req , res ) => {

//     if(req.method == "GET" && req.url.startsWith('/api/project')){
//         fs.readFile("db.json" , (err , db) => {
//             if(err){
//                 throw err
//             }
//             const data = JSON.parse(db)
//             res.writeHead(200 , {'Content-Type' :  "application/json" })
//             res.write(JSON.stringify(data.project))
//             res.end()
//         })
//     }else if (req.method == "POST" && req.url.startsWith("/api/users")) {
//         let clientUser = ""

//         req.on("data", (data) => {
//             clientUser = clientUser + data.toString()
//         })

//         req.on("end", () => {
//             const parsClientUser = JSON.parse(clientUser)

//             const newUser = {
//                 id: global.crypto.randomUUID(), ...parsClientUser, free: 1
//             }

//             db.users.push(newUser)

//             console.log(newUser)
//             fs.writeFile("db.json", JSON.stringify(db), (err) => {
//                 if (err) {
//                     throw err
//                 }

//                 res.writeHead(200, { "Content-Type": "application/json" });
//                 res.write(JSON.stringify({ message: "New Book Is succes Fully :)" }));
//                 res.end();
//             })


//         })
//     }
// })

// server.listen(port, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
//   });


const http = require("http");
const fs = require("fs");

let port = 3030;
let hostname = "localhost"; // برای تست لوکال

const server = http.createServer((req, res) => {
    // CORS Headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Handle preflight OPTIONS request
    if (req.method === "OPTIONS") {
        res.writeHead(200);
        res.end();
        return;
    }

    if (req.method === "GET" && req.url.startsWith("/api/project")) {
        fs.readFile("db.json", (err, dbData) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "Server error" }));
                return;
            }
            const data = JSON.parse(dbData);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(data.project));
        });
    } else if (req.method === "POST" && req.url.startsWith("/api/users")) {
        let clientUser = "";

        req.on("data", (data) => {
            clientUser += data.toString();
        });

        req.on("end", () => {
            let parsClientUser;
            try {
                parsClientUser = JSON.parse(clientUser);
            } catch (e) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "Invalid JSON" }));
                return;
            }

            // هر بار db.json را بخوان
            fs.readFile("db.json", (err, dbData) => {
                if (err) {
                    res.writeHead(500, { "Content-Type": "application/json" });
                    res.end(JSON.stringify({ error: "Server error" }));
                    return;
                }
                let db = JSON.parse(dbData);

                const newUser = {
                    id: (Math.random() + 1).toString(36).substring(2), // ساده برای id
                    ...parsClientUser,
                };

                db.users = db.users || [];
                db.users.push(newUser);

                fs.writeFile("db.json", JSON.stringify(db, null, 2), (err) => {
                    if (err) {
                        res.writeHead(500, { "Content-Type": "application/json" });
                        res.end(JSON.stringify({ error: "Server error" }));
                        return;
                    }

                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.end(JSON.stringify({ message: "User added successfully", user: newUser }));
                });
            });
        });
    } else if (req.method === "POST" && req.url.startsWith("/api/login/singin")) {
        let loginData = "";

        req.on("data", (data) => {
            loginData += data.toString();
        });

        req.on("end", () => {
            let parsedLogin;
            try {
                parsedLogin = JSON.parse(loginData);
            } catch (e) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "Invalid JSON" }));
                return;
            }

            fs.readFile("db.json", (err, dbData) => {
                if (err) {
                    res.writeHead(500, { "Content-Type": "application/json" });
                    res.end(JSON.stringify({ error: "Server error" }));
                    return;
                }
                let db = JSON.parse(dbData);
                db.users = db.users || [];

                // فرض: login با username و pass
                const user = db.users.find(
                    (u) => u.email === parsedLogin.email && u.pass === parsedLogin.pass
                );

                if (user) {
                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.end(JSON.stringify({ message: "Login successful", user }));
                } else {
                    res.writeHead(401, { "Content-Type": "application/json" });
                    res.end(JSON.stringify({ error: "Username or password is incorrect" }));
                }
            });
        });
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Not found" }));
    }
});

server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});