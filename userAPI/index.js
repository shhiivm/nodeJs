const fs = require('fs');

const http = require('http');

const data = fs.readFileSync(`userAPI.json`,"utf-8");
const objData = JSON.parse(data);

const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        console.log("Hello from home");
       res.end("Hello from home");
    }
    else if(req.url=='/about'){
        console.log("hello from about us page");
        res.end("hello from about us page");
    }
    else if(req.url=='/contatc'){
        console.log("hello from contatc us page");
        res.end("hello from contatc us page");
    }
    else if(req.url=='/json'){
        res.writeHead(200,{"content-type":"application/json"});
        res.end(objData[2].name);
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>404 Error. Page not found</h1>")
    }

});
server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening to port number 8000");
});