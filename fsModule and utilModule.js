// const util = require("util");
const { readFile, writeFile } = require("fs").promises;

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const editFile = async () => {
  try {
    const first = await readFile("./content/newFile.txt", "utf8");
    const second = await readFile("./content/third.txt", "utf8");
    await writeFile("./content/forth.txt", `${first}${second}`);
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
editFile();
