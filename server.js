//Set Express as my Http App Server
var express = require("express");
var app = express();
var port = (process.env.PORT || 5555);

//set the app to render from /public
app.use(express.static(__dirname + '/public'));

//Respond to Get request to the '/' route
app.get("/", function(req, res){
  res.render("index.html");
  })
  .listen(port, function(){
    console.log("listening on Port: "+port);
});
