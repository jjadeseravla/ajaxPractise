window.onload=function(){ //need to put all code in here as this file is executing before the DOM fulllyloads.
  //create event listener
  var button = document.getElementById("button");

  button.addEventListener("click", function() {

    //create XMLHttpRequest
    var xhr = new XMLHttpRequest();

    //open takes in 3 parameters - type of request, the url/filename and if async or not(boolean)
    xhr.open('GET', 'sample.txt', true);

    //optional, usually used for loaders/if its loading
    xhr.onprogress = function(){
      console.log('ready state:', xhr.readyState); //would be 3 as still loading
      //can say if statement to say if 3 load a spinning wheel loader gif to show waitingin
    }

    xhr.onload = function(){ //if(xhr.status) but as in this function already, just use this
      if(this.status == 200){
        console.log(this.responseText);
        document.getElementById('text').innerHTML =
        this.responseText;
      }
    }

    xhr.onerror = function(){
      console.log('request error ...');
    }

    //sends request
    xhr.send();

  });
}

//readyState values:
//0: request not initiated
//1: server connection established
//2: request reveived
//3: processing request
//4: request finished and response is ready
