var body = document.getElementsByTagName('body')[0];
var original = [];
var seeding = JSON.stringify(original);

window.localStorage.setItem("convo", seeding);
var app = {
  nextID: 2,
  positioning: function(){
    console.log(this);
    console.log(window);
    var randomY = Math.floor(Math.random()*(window.innerHeight - 250)) + 30;
    var randomX = Math.floor(Math.random()*(window.innerWidth - 400)) + 30;
    return 'top: '+(randomY)+'px; left: '+(randomX)+'px';
  },
  addFrame: function(){
    var newFrame = document.createElement('iframe');
    newFrame.setAttribute('src', 'html/iframe.html');
    newFrame.setAttribute('id', this.nextID);
    newFrame.setAttribute('style', this.positioning());
    newFrame.setAttribute('title', this.nextID);
    body.appendChild(newFrame);
    $('#'+this.nextID).draggable();
    app.nextID++;
  }
};
document.getElementById('add-it').addEventListener('click', app.addFrame.bind(app));
$(document).ready(function(){
  $("#1").draggable();
});
