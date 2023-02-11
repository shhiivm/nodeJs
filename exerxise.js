// Exercise 1
// 1) Create a folder name it Ex1
// 2) Create a file into it bio.txt with some data.
// 3) add more data into it, at the end of existing data.
// 4) Read the data without getting buffer data at first.
//             //Use File encoding
// 5) Rename the file to mybio.txt
// 6) now delete both the file and folder.


const fs = require("fs");


// fs.mkdirSync('ex1');

// fs.writeFileSync('ex1/bio.txt',"Hi! my name is Shivanand Singh")

// fs.appendFileSync('ex1/bio.txt',", I am 24 and learning node js");

// const data = fs.readFileSync("ex1/bio.txt","utf-8");

// console.log(data);

// fs.renameSync('ex1/bio.txt','ex1/mybio.txt');

// fs.unlinkSync('ex1/mybio.txt');

fs.rmdirSync('ex1');
