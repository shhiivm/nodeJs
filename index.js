const fs = require("fs");

// Creating a new File
// fs.writeFileSync('read.txt',"This is my first node program");//if file is not present, then it will create one and insert the data
// fs.writeFileSync('read.txt',"Hello, Shivanand singh");//if file is present, then it will override the present data.

// fs.appendFileSync('read.txt'," How are you?");//It appends the data.



// fs.readFileSync('read.txt');
const buf_Data = fs.readFileSync('read.txt');//Displays the data of read.txt file on console.
// console.log(buf_Data);
//Node js includes an additional dataype called Buffer.
// Buffer is mainly used to store binary data
// While reading from a file or receiving packets over the network.
new_data = buf_Data.toString();
console.log(new_data);


//To rename file
fs.renameSync('read.txt','readwrite.txt');
