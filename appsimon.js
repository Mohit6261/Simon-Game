let gameseq=[];
let userseq=[];
 let started=false;
let btns=["redorange","pink","blue","voilet"];

let level=0;


let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){

    if(started==false){
        started=true;
        levelUp();
    } 
});

function levelUp(){
    userseq=[]; 
    level++;
    h2.innerText=`Level ${level}`;

    let randomIdx=Math.floor(Math.random()*3);
    let randomcolor=btns[randomIdx];
    let randombtn=document.querySelector(`.${randomcolor}`);
    flashbtn(randombtn);
    gameseq.push(randomcolor);
}


function flashbtn(btn){
    btn.classList.add("flash");
    setTimeout(function(){
      btn.classList.remove("flash");
    },250);
}

function btnpress(){
    let btn=this;
    flashbtn(btn);

    let usercolor=btn.getAttribute("id"); 
    userseq.push(usercolor);

    check(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress)
}


function check(idx){
   
   if(gameseq[idx] === userseq[idx]){
     if(userseq.length==gameseq.length){
        setTimeout(levelUp(),1000);
     }
   }
   else{
    h2.innerText=`Game Over.Your score is ${level}.Press any key to start again...`
     document.querySelector("body").style.backgroundColor="red";

      setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
      },200);
    reset();
   }
}

function reset(){
    level=0;
    gameseq=[];
    userseq=[];
    started=false;

}