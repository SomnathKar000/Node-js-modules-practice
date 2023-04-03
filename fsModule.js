const fs = require("fs");
const { readFileSync, writeFileSync } = fs;

const first = readFileSync("./content/subcontent/text.txt", "utf8");
const second = readFileSync("./content/first.txt", "utf8");
const third = readFileSync("./server.js", "utf8");
console.log(first);
console.log(second);

writeFileSync("./content/newFile.txt", `${third}`);
