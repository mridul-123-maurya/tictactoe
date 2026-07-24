let btn=document.querySelectorAll(".btn1")
let reset=document.querySelector("#reset-btn")
let win=document.querySelector(".win")
let msg=document.querySelector("#msg")
let newgame=document.querySelector("#newgame")
const winpatterns=[[0,1,2],[0,3,6],[0,4,8],[6,7,8],[2,5,8],[3,4,5],[1,4,7],[2,4,6]];
let turn=true;
btn.forEach(btns => {
    btns.addEventListener("click",() =>{
        if(turn){
            btns.textContent="X";
            turn=false;
        }
        else{
            btns.textContent="O";
            turn=true;
        }
        btns.disabled=true;
        checkwinner()
    })
});
function start(){
    turn=true;
    for(z of btn){
        z.innerText="";
        z.disabled=false;
    }
    win.classList.add("win");
}
const alldisable=()=>{
    for(k of btn){
        k.disabled=true;
    }
}
let m=false;
const checkwinner = () => {
    for(let pattern of winpatterns){
        let pos1val=btn[pattern[0]].innerText;
        let pos2val=btn[pattern[1]].innerText;
        let pos3val=btn[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != "" ){
            if(pos1val===pos2val &&pos2val===pos3val){
                msg.innerText=`Winner is ${pos1val}`;
                win.classList.remove("win");
                alldisable();
                m=true;
            }
        }
    }
    if(!m){
        msg.innerText="there is tie between X and O";
    }
    
}
newgame.addEventListener("click",start);
