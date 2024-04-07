const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');


// const sign_up  = require("./views/sign_up.html")
const { send } = require('express/lib/response');

const app = express()
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'views')));

app.get('/', function (req, res) {
  res.send('Hello World')
})



const authRouter = express.Router();



authRouter.route("/signup")
.get(getSignUp)
.post(postSignUp);

app.use("/auth" , authRouter);
function getSignUp(req , res){
  // res.sendFile('views\sign_up.html', {root: __dirname})
  // const filePath = path.join(__dirname, 'views', 'sign_up.html');
  fs.readFile('./views/sign_up.html', (err , fileData) =>{
    if(err){
      console.log(`Error in Sending File : ${err}`);
    }
    else{
      res.end(fileData);
    }

  })

}


function postSignUp(req , res){
  let obj = req.body;
  console.log("postSignUp = =>" , obj);
  res.json({
    'message' : "User signup",
    data : obj
  });


}


app.listen(3000);

