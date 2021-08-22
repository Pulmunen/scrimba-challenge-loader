const board = document.getElementById('board');
const grid = document.getElementById('grid')
const instruction = document.getElementById('instruction')
const btn = document.getElementById('btn')
const radar = document.getElementById('radar')
const summary = document.getElementById('learning-summary')

function generateScale(){
    let randomScale = ((Math.random()) * (0.7-0)+1).toFixed(2);
    return randomScale
}

function createElements(n, parent, desc){
    let count = 1

    while (count <= n){
        const el = document.createElement('div')
        el.classList.add(desc)

        if (desc =='concentric__circle'){
            let size = count* 20
            el.style.width=`${size}%`;
            el.style.height=`${size}%`;
        } else if (desc == 'radial'){
            el.style.cssText = `--i:${count}`;
        } else if (desc == 'radar__obj'){
            let blobScale = generateScale()
            let revCount = 11-count
            el.classList.add(`radar__obj--${count}`)
            el.setAttribute('data-line', revCount)
            el.style.animationDelay = `${count+1}s`
            el.style.transform = `scale(${blobScale})`;     
        }    
        parent.appendChild(el)        
        count++
    }
}

function createScanner (){
    const scanner = document.createElement('div')
    scanner.setAttribute("id", "scanner")
    grid.appendChild(scanner)
}

createElements(4, grid, 'concentric__circle')
createElements(6, grid, 'radial')
createScanner()
createElements(10, grid, 'radar__obj')

const scanner = document.getElementById('scanner')
const radarObj = document.querySelectorAll('.radar__obj')

btn.addEventListener('click', startAnim)

btn.addEventListener('mouseover', function(){
    this.style.opacity="0.5"
})

btn.addEventListener('mouseout', function(){
    if(window.getComputedStyle(summary).opacity=='1'){
        this.style.opacity="1"
    }
})

 function startAnim(e){
    document.body.style.cursor = "wait";
    this.classList.add('btn-disabled')
    this.classList.remove('btn-enabled')
    board.classList.remove('shrink-board')
    scanner.classList.add('start-scanner')
    radarObj.forEach(obj =>{
        obj.classList.add('start-glow')
    })    
        if(window.getComputedStyle(summary).opacity=='1'){
            summary.style.opacity='0'
        }
    }

const finalBlip = document.querySelector('.radar__obj--5')
finalBlip.addEventListener("animationend", objectIsScanned)

function objectIsScanned(){
    document.body.style.cursor = "default"
    btn.classList.remove('btn-disabled')
    btn.classList.add('btn-enabled')
    if(window.getComputedStyle(summary).opacity=='0'){
        summary.style.opacity='1'
        scanner.classList.remove('start-scanner')
        radarObj.forEach(obj =>{
        obj.classList.remove('start-glow')
        })
    }
}
