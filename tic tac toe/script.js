let music = new Audio("music.mp3")
let audioturn = new Audio("ting.mp3")
let gameOver = new Audio("gameover.mp3")
let turn = "X";

const changeTurn = () => {

    return turn === "X" ? "0" : "X"
}

const checkWin = () => {

}


let boxes = document.getElementById("box");
Array.from(boxes).forEach((boxElement) => {
    let boxtext = document.querySelector('.boxtext')
    boxElement.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext = turn;
            changeTurn();
            audioturn.play();
            checkWin();
            // document.getElementsByClassName("turn")[0].innerHTML = "Turn for" + turn;
        }
    })
})