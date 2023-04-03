const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello world");
    res.end();
  } else if (req.url === "/about") {
    res.write("About ");
    res.end();
  }
});

server.listen(3000);
