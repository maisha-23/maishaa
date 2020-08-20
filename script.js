var name = prompt ("Enter your name");
      var welcome=  document.getElementById("welcome");

      welcome.innerHTML = "Welcome " + name;
      welcome.style.color = "grey";

function yourName(){
  // code here belongs to yourName function
  console.log("Function started");
  let name = prompt("Enter Your Name");
  console.log(name);
  
  var pTag = document.getElementById("name");
  
  pTag.innerHTML = name 
}
var amountOfLikes = 0
// Like Button Code
function handleLike(){
  amountOfLikes++
  console.log(amountOfLikes)
  var likesDisplay = document.getElementById("likes")
  
  likesDisplay.innerHTML = amountOfLikes
}
// Hover over picture code

function changePicture(pictureNumber){
  var image = document.getElementById("myImage");
  if(pictureNumber === 1){
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6oUKvu0RhEHHI2cfe7IjCtLhVVKS9locmJA&usqp=CAU"
  } else{
    image.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTWUp4UF2wxwJ9K0J_2hHZuZKaYgKFvgEyng&usqp=CAU"
  }
}

var myButton = document.getElementById("btn")
var myBox = document.getElementById("box")


function toggleButton(){
  myButton.innerHTML = (myButton.innerHTML == "On") ? "Off" : "On";
  myButton.style.backgroundColor = (myButton.style.backgroundColor== "white") ? "pink": "white";
}
function changeColor(){
  if(myButton.innerHTML == "On"){
    myBox.style.backgroundColor =
    (myBox.style.backgroundColor == "grey") ? "pink" : "grey";
  }
}
myBox.addEventListener('mouseover', changeColor)
myBox.addEventListener('mouseleave', changeColor)
myButton.addEventListener("click", toggleButton)