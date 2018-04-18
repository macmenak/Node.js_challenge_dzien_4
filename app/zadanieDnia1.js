//Twój kod
const http = require("http");

const srv = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("Witaj świecie, z backendu!");
});

srv.listen(3000, () => {
    console.log("server listening on localhost:3000");
});