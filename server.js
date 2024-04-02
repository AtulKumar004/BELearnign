const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log("request has been made ");
  //write the response to the client
  res.setHeader("Content-Type", "text/html");
  // res.write('<h1>Hello Everyone</h1>');
  // res.write('<h2>How are you :)</h2>');

  let path = "./views";
  switch (req.url) {
    case "/":
      path += "/index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "/about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      
      res.statusCode=301;
      res.setHeader('Location', "/about");
      res.end();
      break;
    default:
      path += "/404.html";
      res.statusCode = 400;
      break;
  }
  fs.readFile(path, (err, fileData) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(fileData);
      res.end();
    }
  });
});
server.listen(3000, "localhost", () => {
  console.log("server is listening  on port 3000");
});
