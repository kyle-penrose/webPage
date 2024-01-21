
createLinkBar = function(){
  var htmlEl_linkBar = document.getElementById("links-bar");

  htmlEl_linkBar.innerHTML = '<a href="index.html">Home</a> || <a href="aboutme.html">About Me</a> || <a href="projects.html">Projects</a> || <a href="games.html">Games</a> || <a href="art.html">Art</a> || <a href="devlog.html">Dev Log</a>';
  console.log("I BUILT THE LINKS BAR!");
}

var i = 0;
var messages = ["Welcome to my shitty website",
                "How's it going?",
                "Could it really be you!!!!?!",
                "OMG it is totally you, jeeeeez"];

var change_element_to_random_color = function(_element){
  var color_array = ["red","green","blue"];
  _element["color"] = color_array[Math.floor(Math.random() * color_array.length)];
  console.log("i'm a function and i'm running");
}

var change_welcome_sign = function() {
        var welcome_sign = document.getElementById("welcome");
        
        if (welcome_sign!=null){
           welcome_sign.innerHTML = messages[i];
           if (i >= messages.length-1)
           {
              i = 0;
           }
           else {
              i++;
           }
        }
        console.log("i'ma changin'");
      }

  

createLinkBar();
setInterval(change_welcome_sign,1000);
setInterval(change_element_to_random_color,100);
