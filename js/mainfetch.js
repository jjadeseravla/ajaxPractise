window.onload=function(){

  var button1 = document.getElementById("button1");
  var button2 = document.getElementById("button2");

  button1.addEventListener("click", function loadUser() {

    var xhr = new XMLHttpRequest();


    xhr.open('GET', 'user.json', true);

    xhr.onload = function(){
      if(this.status == 200){
        var user = JSON.parse(this.responseText);
        //console.log(user.name);

        var output = "";

        output = '<ul>' +
          '<li> User: ' + user.name + '</ul>' +
          '</ul>'

        document.getElementById('user').innerHTML = output;
      }
    }

    xhr.onerror = function(){
      console.log('request error ...');
    }

    xhr.send();

  });

  button2.addEventListener("click", function loadUser() {

    var xhr = new XMLHttpRequest();


    xhr.open('GET', 'users.json', true);

    xhr.onload = function(){
      if(this.status == 200){
        var users = JSON.parse(this.responseText);
        //console.log(user.name);

        var output = "";

        for(var i in users) {
        output += '<ul>' +
          '<li> User: ' + users[i].name + '</ul>' +
          '</ul>'
        }

        document.getElementById('users').innerHTML = output;
      }
    }

    xhr.onerror = function(){
      console.log('request error ...');
    }

    xhr.send();

  });
}
