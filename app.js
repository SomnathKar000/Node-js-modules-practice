const { createReadStream } = require("fs");
const http = require("http");

// stream.on("data", (data) => {
// console.log(data);
// });

// stream.on("error", (err) => console.log(err));

http
  .createServer((req, res) => {
    const stream = createReadStream("./content/forth.txt", "utf8");
    stream.on("open", () => {
      stream.pipe(res);
    });
    stream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(3000);
