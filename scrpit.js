let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");

let turno = true;
const winpattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turno) {
            box.innerText = "O";
            turno = false;
        }
        else {
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;
        checkwinner();
    }
    )
})

const checkwinner = () =>{
    for(let pattern of winpattern){
       console.log(pattern[0]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let post1 = boxes[pattern[0]].innerText;
        let post2 = boxes[pattern[1]].innerText;
        let post3 = boxes[pattern[2]].innerText;
        // console.log(post1);
       if(post1 !="" && post2 != "" && post3 != ""){
        if (post1===post2===post3){
            console.log(winner);
        }
       
       }

        
    }
}
