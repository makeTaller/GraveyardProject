var database = [
  {
    username: "Kirk",
    password: "supersecret"
  }
];

var newsFeed = [
  {
      username:"dave",
      timeline: "So tired from all this running."
  },
  {
      username:"Sally",
      timeline: "Javascript is soooo cool!"
  }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password");

function signIn(user,pass){
      if (user === database[0].username && pass=== database[1].password){
        console.log(newsFeed);
      }else {
        alert("Sorry, wrong username and password!");
      }
};

signIn(userNamePrompt, passwordPrompt);
