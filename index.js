const board = document.getElementById('board');
const instruction = document.getElementById('instruction')

window.addEventListener('load', (event) => {
    scanner.classList.add('animate-radar')
    document.body.style.cursor = "wait";
    instruction.style.transition = "all 0.5s"
    instruction.style.color = "#191f22"
});


board.addEventListener("animationend",  transitionAnim)

function transitionAnim(){
    setTimeout(()=>{
        board.style.display = "none"
        attribution.style.color = "#fff"
        attribution.style.transition = "all 2s"
        instruction.style.color = "#fff"
        instruction.style.transition = "all 2s"
        document.body.style.cursor = "default"
    },2800)    
}
