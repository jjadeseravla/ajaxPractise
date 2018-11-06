// var pageCounter = 1;
// var button = document.getElementById("button");
// var animalContainer = document.getElementById("animal-info");
//
// button.addEventListener("click", function(){
//   var ourRequest = new XMLHttpRequest();
//
//   ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter +'.json');
//
//   ourRequest.onload = function() {
//     if(ourRequest.status >= 200 && ourRequest.status < 400) {
//       var data = JSON.parse(ourRequest.responseText);
//       // console.log(data[0]);
//       renderHTML(data);
//     } else {
//       console.log("we connect to server, but it returned an error");
//     }
//   }
//
//   ourRequest.onerror = function() {
//     console.log("Connection error");
//   };
//
//   ourRequest.send();
//   pageCounter++;
//
//   if(pageCounter > 3) {
//     button.classList.add("hide-me");
//   }
//  });
//
// function renderHTML(theData) {
//   var htmlString = "";
//   //loop through array of pet objects
//
//   for( i = 0; i < theData.length; i++) {
//     htmlString += "<p>" + theData[i].name + " is a " + theData[i].species +
//     " that liked to eat ";
//         for (j = 0; j < theData[i].foods.likes.length; j++) {
//           if (j == 0) {
//             htmlString += theData[i].foods.likes[j];
//           } else {
//             htmlString += " and " + theData[i].foods.likes[j];
//           }
//         }
//       htmlString += "</p>";
//   }
//
//   animalContainer.insertAdjacentHTML('beforeend', htmlString)
// };
