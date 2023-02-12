const path = require('path');

console.log(path.dirname("C:/Users/Shivam Singh/Desktop/NodeJs/pathMod.js"));
console.log(path.extname("C:/Users/Shivam Singh/Desktop/NodeJs/pathMod.js"));
console.log(path.basename("C:/Users/Shivam Singh/Desktop/NodeJs/pathMod.js"));
console.log(path.parse("C:/Users/Shivam Singh/Desktop/NodeJs/pathMod.js"));
const mypath = path.parse("C:/Users/Shivam Singh/Desktop/NodeJs/pathMod.js");
console.log(mypath.name);