const $humburgerButton = document.getElementById('hamburger-button')
const $nav = document.getElementById('nav')

let menuToggle = false

$humburgerButton.addEventListener('click',function(){

    if (menuToggle === false){
        $nav.style.display = 'block'
        menuToggle = true 
    } else if(menuToggle === true){
        $nav.style.display = 'none'
        menuToggle = false
    }
   
})

window.addEventListener('resize',function(){
    // console.log(window.innerWidth)
    if(window.innerWidth >= 768) {
        $nav.style.display = 'none'
        menuToggle = false
    }
})