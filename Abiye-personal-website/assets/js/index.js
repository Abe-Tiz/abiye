
 var numberofButton=document.querySelectorAll(".drum").length;

 for(var i=0;i<numberofButton;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        var n = this.innerHTML;

        makeSounds(n);
        buttonAnimation(n);

    });

}

  document.addEventListener("keypress",function(e){
      makeSounds(e.key);
      buttonAnimation(e.key);
  })
 function makeSounds(key){
     switch (key) {
         case "w":
             var audio = new Audio('assets/js/sounds/tom-1.mp3');
             audio.play();
             document.querySelectorAll(".drum").style.color="blue";
             break;
         case "a":
             var audio = new Audio('assets/js/sounds/tom-2.mp3');
             audio.play();
             this.style.color="blue";
             break;
         case "s":
             var audio = new Audio('assets/js/sounds/tom-3.mp3');
             audio.play();
             this.style.color="blue";
             break;
         case "d":
                 var audio = new Audio('assets/js/sounds/tom-4.mp3');
                 audio.play();
                 this.style.color="blue";
                 break;
         case "j":
             var audio = new Audio('assets/js/sounds/crash.mp3');
             audio.play();
             this.style.color="blue";
             break;
         case "k":
             var audio = new Audio('assets/js/sounds/kick-bass.mp3');
             audio.play();
             this.style.color="blue";
             break;
         case "l":
             var audio = new Audio('assets/js/sounds/snare.mp3');
             audio.play();
             this.style.color="blue";
             break;

     }
 }


 function buttonAnimation(currentkey){
     var activbtn=document.querySelectorAll("."+currentkey);
         activbtn.classList.add("pressed");
 }
