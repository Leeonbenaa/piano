var numOfButtons=document.querySelectorAll(".key").length;

function getCharacter(character){
  switch(character) {
        case "c":
          var audio1=new Audio('sounds/piano-c_C_major.wav');
          audio1.play();
          break;

        case "d":
            var audio2=new Audio('sounds/608985__smstrahan__d.mp3');
            audio2.play();
            break;

        case "e":
            var audio3=new Audio('sounds/608984__smstrahan__e.mp3');
          audio3.play();
          break;

        case "f":
            var audio4=new Audio('sounds/608986__smstrahan__f.mp3');
          audio4.play();
          break;

        case "g":
            var  audio5=new Audio('sounds/piano-g-6200.mp3');
          audio5.play();
          break;

        case "a":
            var  audio6=new Audio('sounds/piano-a_A_major.wav');
          audio6.play();
          break;

        case "b":
            var audio7=new Audio('sounds/piano-b_B_major.wav');
          audio7.play();
          break;
          case "1":
            var audio7=new Audio('sounds/562758__ion__c4.mp3');
          audio7.play();
          break;
          case "2":
            var audio7=new Audio('sounds/Eb4.mp3');
          audio7.play();
          break;
          case "3":
            var audio7=new Audio('sounds/562759__ion__f3.mp3');
          audio7.play();
          break;
          case "4":
            var audio7=new Audio('sounds/334540__teddy_frost__g4.wav');
          audio7.play();
          break;
          case "5":
            var audio7=new Audio('sounds/562753__ion__as3 (1).mp3');
          audio7.play();
          break;
        default:
          alert("Not a valid input");
      }

}
    





for(var i=0;i<numOfButtons;i++){

  document.querySelectorAll(".key")[i].addEventListener("click",function(){

    var button= this.innerHTML;
    getCharacter(button);
    
});
}
document.addEventListener("keypress",function(event){
getCharacter(event.key);

})



    

