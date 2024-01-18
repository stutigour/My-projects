let gameSqe = [];
let userSqe = [];
 
let btns = ["yellow","red","purple","green"];
 
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if ( started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }

});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
     btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
     btn.classList.remove("userflash");
    }, 250);
}
function levelUp(){
    userSqe = [];
    level++;
    h2.innerText = `Level ${level}`;

    let ranIdx = Math.floor(Math.random()* 3);
    let ranColor = btns[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);
    gameSqe.push(ranColor);
    console.log(gameSqe);
    gameFlash(ranBtn);
    

}
  function checkAns(idx){
    if(userSqe[idx] === gameSqe[idx]){
       if(userSqe.length == gameSqe.length){
        levelUp();
       }
    }else{
        h2.innerHTML= `Game Over! your score was <b>${level} </b> <br> press any key to start.`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
         document.querySelector("body").style.backgroundColor = "white";
        } ,150);
        console.log (`your higest score was ${level}`);
        reset();
    }

  }
function btnPress(){
    let btn = this;
    userFlash(btn);
    

    userColor = btn.getAttribute("id");
    userSqe.push(userColor);

    checkAns(userSqe.length-1);
}
 
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
 
function reset(){
    started = false;
    gameSqe =[];
    userSqe = [];
    level = 0;
}