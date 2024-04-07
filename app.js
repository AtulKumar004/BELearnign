const express = require('express');
const { send } = require('express/lib/response');
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})



const authRouter = express.Router();



authRouter.route("/signup")
.get(getSignUp);
// .post(PostSignUp);

app.use("/auth" , authRouter);
function getSignUp(req , res){
  // res.sendFile('views\sign_up.html', {root: __dirname})
  const filePath = path.join(__dirname, 'views', 'sign_up.html');
  res.sendFile(filePath)

}

app.listen(3000);

