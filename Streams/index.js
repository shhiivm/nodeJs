// Streams => Streams are objects that let you read data from a source or write data to a destination in a continious fashion. In Node.js, there are four types of streams.
// 1) Readable => Which is used to read operations.
// 2) writable => Used for write operations.
// 3) Duplex => Used for both read and write operations
// 4) Transform => A type of duplex straem where the output is computed based on input.



// Read input.txt in a streaming manner


const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
    //Reading file in normal way
    // fs.readFile('input.txt',(err,data)=>{
    //     if(err) return console.log(err);
    //     res.end(data.toString());
    // });


    //Reading from stream, Creating a readable stream.
    //Handle stream events --> data, end, and error.

    const readSteam = fs.createReadStream('input.txt');
    readSteam.on('data',(chunkData)=>{
        res.write(chunkData);
    });
    readSteam.on("end",()=>{
        res.end();
    });
});
server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening to port number 8000");
});

