let userscore=0;
let compscore=0;
let drawscore=0;


const choices=document.querySelectorAll(".choose");
const msg = document.querySelector("#msg");
const u_score = document.querySelector("#you");
const com_score = document.querySelector("#comp");
const draw_score = document.querySelector("#draw");


const playGame = (userChoice)=>{
    console.log("userchoice = ",userChoice);
    //generate computer choices
    const comChoice = gencompchoice();
    console.log("computer choice",comChoice);

    if(userChoice===comChoice){
       drawgame();
       drawscore = drawscore+1;
       draw_score.innerText = drawscore;
       msg.style.backgroundColor = "rgb(8, 3, 43)";

       
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
        userWin = comChoice==="paper" ? false : true ;

        }
        else if(userChoice==="paper"){
            userWin = comChoice ==="scissors" ? false :true;

        }
        else{
            userWin = comChoice ==="rock" ? false :true ;

        }
        showWinner(userWin,userChoice,comChoice);
    }

}
const showWinner = (userWin,userChoice,comChoice) =>{
    if(userWin){
        console.log("you win");
        msg.innerText = `you win!! your ${userChoice} beats ${comChoice}`;
        userscore=userscore+1;
        u_score.innerText = userscore;
        msg.style.backgroundColor = "green";
        
    }
    else{
        console.log("you loose");
        msg.innerText = `you lose!! ${comChoice} beats your ${userChoice}`;
        compscore = compscore+1;
        com_score.innerText = compscore;
        msg.style.backgroundColor = "red";
        
    }
}




const gencompchoice = () =>{
    const comChoices=["rock","paper","scissors"];
    let r_idx=Math.floor(Math.random()*3);
    return comChoices[r_idx];

}

const drawgame = () =>{
    console.log("Game is a Draw");
    msg.innerText = "Drawn play again";
    

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
       
        playGame(userChoice );
    })
})


