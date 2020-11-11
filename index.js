var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {

  switch (key) {
    case "w":
    var tom1 = new Audio("tom-1.mp3"); //sounds/
    tom1.play();
    break;

    case "a":
    var tom2 = new Audio("tom-2.mp3"); //sounds/
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio("tom-3.mp3"); //sounds/
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio("tom-4.mp3"); //sounds/
    tom4.play();
    break;

    case "j":
    var snare = new Audio("snare.mp3"); //sounds/
    snare.play();
    break;

    case "k":
    var crash = new Audio("snare.mp3"); //sounds/
    crash.play();
    break;

    case "l":
    var kick = new Audio("kick-bass.mp3"); //sounds/
    kick.play();
    break;

    default: console.log(key);
  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function()
    { activeButton.classList.remove("pressed");
  }, 1000);


}









  // document.addEventListener("keydown", function (event) {
  //
  //
  //   var keyCode = event.code;
  //
  //     switch (keyCode) {
  //
  //       case "KeyW":
  //       var tom1 = new Audio ("sounds/tom-1.mp3");
  //       tom1.play();
  //       break;
  //
  //       case "KeyA":
  //       var tom2 = new Audio ("sounds/tom-2.mp3");
  //       tom2.play();
  //       break;
  //
  //       case "KeyS":
  //       var tom3 = new Audio ("sounds/tom-3.mp3");
  //       tom3.play();
  //       break;
  //
  //       case "KeyD":
  //       var tom4 = new Audio ("sounds/tom-4.mp3");
  //       tom4.play();
  //       break;
  //
  //       case "KeyJ":
  //       var snare = new Audio ("sounds/snare.mp3");
  //       snare.play();
  //       break;
  //
  //       case "KeyK":
  //       var crash = new Audio ("sounds/crash.mp3");
  //       crash.play();
  //       break;
  //
  //       case "KeyL":
  //       var kick = new Audio ("sounds/kick-bass.mp3");
  //       kick.play();
  //       break;
  //
  //       default: console.log(keyCode);
  //
  //     }
  //
  // });
