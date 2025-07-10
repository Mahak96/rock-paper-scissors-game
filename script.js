let you=0;
let comp=0;
let symbols=document.querySelectorAll(".symbols");

const userscore=document.querySelector("#you");
const compscore=document.querySelector("#comp");
const getcomputerchoice=()=>{
    const options =["rock","paper","scissors"];
    const randindx =Math.floor(Math.random()*3);
    return options[randindx];
}
const playgame=(symbolid)=>{
    console.log ("userchoice",symbolid);
    const compchoice=getcomputerchoice();
    console.log ("compchoice",compchoice);
    if(symbolid===compchoice){
        console.log ("It Was A Draw");
        let msginside=msg.innerText=" It Was A Draw.Please Try Again ";
          msg.style.backgroundColor="cornflowerblue";
 } else if (
        (symbolid === "rock" && compchoice === "scissors")||
        (symbolid === "paper" && compchoice === "rock") ||
        (symbolid === "scissors" && compchoice === "paper")
    ) {
        console.log("You Win 🎉");
        you++;
        userscore.innerText=you;
        let msginside=msg.innerText="You Win 🎉";
        msg.style.backgroundColor="green";
        console.log(you)
    } 
    else {
        console.log("You Lose 😢");
        comp++;
        compscore.innerText=comp;
        let msginside=msg.innerText="You Lose 😢";
        msg.style.backgroundColor="Red";
        console.log(comp)
    }}

symbols.forEach((symbols)=>{
    // console.log(symbols);
    symbols.addEventListener("click",() =>{
    const symbolid=symbols.getAttribute("id");
        // console.log(symbolid,"clicked")
        playgame(symbolid);
    })
})



 



