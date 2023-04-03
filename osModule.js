const os = require("os");

const user = os.userInfo();
const type = os.type();
const upTime = os.uptime();
const relese = os.release();
const freeMemory = os.freemem();
const totalMemory = os.totalmem();
console.log(type);
console.log(`The system uptime is ${upTime} seconds`);
