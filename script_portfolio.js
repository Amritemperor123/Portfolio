const boxes = document.querySelectorAll('.box')

const nav = document.querySelector('.nav')
const modeEl = document.getElementById('mode')
const textEl = document.querySelector('.text h1')
const text = 'WELCOME TO MY PAGE !  '
let idx = 1
let speed = 300/1 

const panels = document.querySelectorAll('.cer')


// mode button
modeEl.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML = '&#9789'
    }
    else{
        html.classList.add('dark')
        e.target.innerHTML = '&#9788;'
    }
})


// nav
window.addEventListener('scroll', fixNav)
function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    }
    else{
        nav.classList.remove('active')
    }
}


// Auto Typing Function
function writeText() {
    textEl.innerText = text.slice(0, idx)
    idx++
    if(idx > text.length){
        idx = 1
    }
    setTimeout(writeText, speed)
}
writeText()

// boxes
window.addEventListener('scroll',checkBoxes)
checkBoxes()
function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }
        else{
            box.classList.remove('show')
        }
    })
}

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active');
    })
})
function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}