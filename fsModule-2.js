const fs = require("fs");
const { readFile, writeFile } = fs;

readFile("./content/first.txt", "utf8", (err, data) => {
  if (err) {
    return console.log(err);
  }
  const first = data;
  readFile("./content/subcontent/text.txt", "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    const second = data;

    writeFile(
      "./content/third.txt",
      `The data is : ${first} ${second}`,
      (err, data) => {
        if (err) {
          return console.log(err);
        }
        console.log(data);
      }
    );
  });
});
