console.log("Welcome here")
let music = new Audio("music.mp3")
let Audioturn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X";
let isgameover = false;

// Function to change the turn
const changeturn = () => {
    return turn === "X" ? "0" : "X"
}
// Function to check for a  win
const checkwin = () => {
    let boxtexts = document.getElementsByClassName("box-text")
    let wins = [
        [0, 1, 2 , 5 , 5, 0],
        [3, 4, 5 , 15 , 0],
        [6, 7, 8 , 5 ,25,0],
        [0, 3, 6 , -5 , 15 , 90],
        [1, 4, 7 , 5  , 15 , 90],
        [2, 5, 8 , 15 , 15 , 90],
        [0, 4, 8 , 5 , 15 , 45],
        [2, 4, 6 , 5 , 15 , 135],
    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[1]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + "Won"
            isgameover = true;
            document.querySelector('.image-box').getElementsByTagName('img')[0].style.width = '200px';
            document.querySelector('.line').style.width =  "20vw "
            document.querySelector('.line').style.transform =  `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

// Game Logic
// music.play();
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector('.box-text')
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn
            turn = changeturn();
            Audioturn.play();
            checkwin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
            }
        }
    })
})

reset.addEventListener("click", () => {
    let boxtext = document.querySelectorAll('.box-text');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    });
    turn = "X"
    isgameover = false;
    document.querySelector('.line').style.width =  "0"
    document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
    document.querySelector('.image-box').getElementsByTagName('img')[0].style.width = '0'
})