/**
* Created in conjunction with info2180-lab4.
* User: Ongel Senior
* Date: 13-10-2016
*/
window.onload = function() { 
var youlose = false;
document.getElementById("start").onclick=startClick; 
document.getElementById("maze").onmouseleave = cheat;
    var boundaries = document.getElementById("boundary1");     
    boundaries.addEventListener("mouseover", function(){     
    this.setAttribute("class", "boundary youlose");});

    var bound = document.querySelectorAll(".boundary");
    for (var i = 0; i < bound.length- 1; i++) {
         bound[i].onmouseover = overBoundary; 
           } 
    var end = document.getElementById("end");
    end.addEventListener("mouseover",function(){
    if (youlose == false){ 
        document.getElementById("status").innerHTML="You Win Thugs!!!!!!"; 
        overEnd();
        }});      
}
function overBoundary() {
    youlose = true;
    var boundaries = document.querySelectorAll (".boundary");
    for (var i = 0; i < boundaries.length- 1; i++) {
        boundaries[i].setAttribute("class", "boundary youlose");
         }
         document.getElementById("status").innerHTML="You lose!!!! click 'S' to restart";
}
function startClick() {
    boundaries = document.getElementsByClassName("boundary");
    for (var i = 0;i<boundaries.length - 1; i++) {
         boundaries[i].setAttribute("class", "boundary")
          }
          document.getElementById("status").innerHTML= "Move your mouse over the 'S' to begin.";
           youlose= false;
}  
function cheat(){
    boundaries = document.getElementsByClassName("boundary");
         for (var i = 0;i<boundaries.length - 1; i++) {
              boundaries[i].setAttribute("class", "boundary youlose");
     }
     document.getElementById("status").innerHTML= "You lose!!!! click 'S' to restart";
}
function overEnd() {
    if(youlose) {
        alert("lol Sorry, you lose! :P");
    } else {
        alert(":O You win mi G!");
    }

}