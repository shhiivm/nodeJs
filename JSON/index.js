const fs = require('fs');
// import { readFile } from "fs";

const bioData = {
    fname : "Shivam",
    lname : "Singh",
    age : 26,
};
// console.log(bioData.lname);

// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// const objData = JSON.parse(jsonData);
// console.log(objData);


// Task 
// 1: Convert a file to JSON
// 2:Add it to another file
// 3: readFile
// 4: again convert back to js obj origin
// 5: print the data.

const jsonF = JSON.stringify(bioData);
fs.writeFile("jsonFile.json",jsonF,(err)=>{
    // console.log("done");
});
fs.readFile("jsonFile.json","utf-8",(err,data)=>{
    console.log(data);
    const origData = JSON.parse(data);
    console.log(origData);
});