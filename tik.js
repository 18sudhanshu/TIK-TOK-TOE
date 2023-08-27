console.log("welcome");

let turn=X;
//Function for change the turn:--
const changeTurn =()=>{
    return turn==="X"?"0":"x"
}

//Function for change to win:---
const checkwin =()=>{
    let win
}


//Game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext')
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText = turn;
            turn=changeTurn;
            checkwin();
            document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
        }
    })
})