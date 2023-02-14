// The http.createServer() method includes request and response parameters which is supplied by nodejs.
// The request 
const http = require("http");
const server = http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url=='/'){
        console.log("Hello This is Home page");
    }
    else if(req.url=='/About'){
        console.log("Hello This is About page");
    }
    else if(req.url=='/contact'){
        console.log("Hello This is contact page");
    }

    res.end('Hello! from server Shivam');
});
server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening to port number 8000");
});
