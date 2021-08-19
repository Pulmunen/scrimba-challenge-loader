window.addEventListener('load', (event) => {
    scanner.classList.add('animate-radar')
    document.body.style.cursor = "wait";
});

let board = document.getElementById('board');

board.addEventListener("animationend",  transitionAnim)

function transitionAnim(){
    setTimeout(()=>{
        board.style.display = "none"
        attribution.style.color = "#fff"
        attribution.style.transition = "all 2s"
        document.body.style.cursor = "default"
    },2800)    
}
