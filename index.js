const board = document.getElementById('board');
const instruction = document.getElementById('instruction')
const btn = document.getElementById('btn')
const scanner = document.getElementById('scanner')
const shrinkBoard = document.querySelector('.shrink-board')
const radarObj = document.querySelectorAll('.radar__obj')

btn.addEventListener('click', startAnim)

function startAnim(e){
    document.body.style.cursor = "wait";
    this.classList.add('btn-disabled')
    this.classList.remove('btn-enabled')
    board.classList.remove('shrink-board')
    scanner.classList.add('start-scanner')
    radarObj.forEach(obj =>{
        obj.classList.add('start-glow')
    })
}

board.addEventListener("animationend",  transitionAnim)

function transitionAnim(event){
    if(event.animationName ==='blink') {
        document.body.style.cursor = "default"
        btn.classList.remove('btn-disabled')
        btn.classList.add('btn-enabled')
        board.classList.add('shrink-board')
        scanner.classList.remove('start-scanner')
        radarObj.forEach(obj =>{
        obj.classList.remove('start-glow')
        })
    }
}
