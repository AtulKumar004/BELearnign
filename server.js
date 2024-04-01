
const http = require('http');
const fs = require('fs');
const server = http.createServer((req , res)=>{
    console.log("request has been made ");
    //write the response to the client
    res.setHeader('Content-Type', 'text/html');
    // res.write('<h1>Hello Everyone</h1>');
    // res.write('<h2>How are you :)</h2>');
    fs.readFile("./views/index.html" , (err , fileData)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.write(fileData);
            res.end();


        }

    })


});
server.listen(3000, "localhost" , ()=>{
    console.log("server is listening  on port 3000");
})
