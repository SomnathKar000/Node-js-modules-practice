const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome");
    res.end();
  } else if (req.url === "/about") {
    res.write("About");
    res.end();
  }
});

server.listen(3000);

console.log("Listening on port 3000...");
