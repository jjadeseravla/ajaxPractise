window.onload=function(){

  var button = document.getElementById("button");

  button.addEventListener("click", function loadUsers() { //load github users

    var xhr = new XMLHttpRequest();


    xhr.open('GET', 'https://api.github.com/users', true);

    xhr.onload = function(){
      if(this.status == 200){
        var users = JSON.parse(this.responseText);

        var output = "";

        for(var i in users) {
        output += '<div id="githubUsers">' +
            '<img src="'+users[i].avatar_url+'" width="70" height="70">' +
            '<ul>' +
              '<li>id: '+users[i].id+'</li>' +
              '<li>login: '+users[i].login+'</li>' +
            '</ul>' +
          '</div>'
        }

        document.getElementById('githubUsers').innerHTML = output;
      }
    }

    xhr.onerror = function(){
      console.log('request error ...');
    }

    xhr.send();

  });
}
