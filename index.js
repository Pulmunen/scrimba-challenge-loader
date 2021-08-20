const board = document.getElementById('board');
const instruction = document.getElementById('instruction')

window.addEventListener('load', () => {
    scanner.classList.add('animate-radar')
    board.classList.add('loading')
    document.body.style.cursor = "wait";
    instruction.style.transition = "all 0.5s"
    instruction.style.color = "#191f22"
});


board.addEventListener("animationend",  transitionAnim)

function transitionAnim(){
        board.classList.remove('loading')
        board.classList.add('loaded')
        document.body.style.cursor = "default"

        attribution.style.color = "#fff"
        attribution.style.transition = "all ease-in 2s"
        instruction.style.color = "#fff"
        instruction.style.transition = "all 2s ease-in 2s" 
}
