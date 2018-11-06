window.onload=function(){ //need to put all code in here as this file is executing before the DOM fulllyloads.
//create event listener
var button = document.getElementById("button");

button.addEventListener("click", function() {

  //create XMLHttpRequest
  var xhr = new XMLHttpRequest();

  //open takes in 3 parameters - type of request, the url/filename and if async or not(boolean)
  xhr.open('GET', 'sample.txt', true);

  xhr.onload = function(){ //if(xhr.status) but as in this function already, just use this
    if(this.status == 200){
      console.log(this.responseText);
    }
  }

  //sends request
  xhr.send();

});
}
