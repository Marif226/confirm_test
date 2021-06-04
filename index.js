const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}))


app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html")
})

app.post("/", function(req, res){
  var n1 = parseFloat(req.body.num1);
  var n2 = parseFloat(req.body.num2);
  var result = n1 + n2
  res.write("<h1>hgf</h1>")
  res.write("some message <br>")
  res.write("your result  is "+ result)
  res.send()

})


app.listen(8080, function(){
  console.log("Your port is 8080")
});
