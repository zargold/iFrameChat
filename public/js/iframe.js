window.onload = function(){
if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}

var storer = function(type, data){
  if(type !== "set"){
    return (window.parent.localStorage.getItem("convo"));
  } else {
    JSON.stringify(data);
    window.parent.localStorage.setItem("convo", data);
    window.parent.localStorage.setItem("length", lastLength);
  }
};
var realLength = function(){
  var chatLength = JSON.parse(storer()).length;
  return chatLength;
};
var myID = window.frameElement.id;
console.log(myID);
var chatroom = document.getElementById('chatroom'), lastLength;
var frame = {
  pushPost: function(statement){
    //console.log(window.frameElement.id);
    var convo = JSON.parse(storer());
    convo.push({
            author: "user"+myID,
            body: statement,
            time: new Date()
          });
    storer("set", JSON.stringify(convo));
    this.appendMe();
  },

  joined: function(){
    this.pushPost("has joined!");
  },
  addPost: function(){
    var comInput = document.getElementById('comment');
    this.pushPost(comInput.value);
    comInput.value = "";
  },
  appendMe: function(){
    if (realLength() !== lastLength){
      var convo = JSON.parse(storer());
      chatroom.innerHTML = "";
      console.log("What's up!");
      for (var i = 0; i < convo.length; i++){
        var line = convo[i];
        var newP = document.createElement('p');
        newP.innerHTML= "  <small>" + DateHelper.time_ago(line.time)+"</small><strong>" + line.author + "</strong>: " + line.body;
        chatroom.appendChild(newP);
      }
      lastLength = realLength();
    }
  }
};
window.parent.setInterval(frame.appendMe, 2000);
frame.joined();
document.getElementById('post-it').addEventListener('click', frame.addPost.bind(frame));
};
