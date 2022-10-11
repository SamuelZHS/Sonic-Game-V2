let sonic = document.querySelector('#sonic')
let pipe = document.querySelector('#pipe')

function jump (){
    if(sonic.classList != 'animar'){
        sonic.classList.add('animar')
    }
    setTimeout(function(){
        sonic.classList.remove('animar')
    }, 500)
}

var loop = setInterval( function(){

    console.log('loop')

    var SonicJump = parseInt(
     window.getComputedStyle(sonic).getPropertyValue('top')
    )
    var Pipe = parseInt(
        window.getComputedStyle(pipe).getPropertyValue('left')
       )

       if(Pipe < 120.5 && Pipe > 0 && SonicJump >= 150){
        pipe.style.animation = 'none'
        pipe.style.display = 'none'
        sonic.src = '/Animation/gif.GIF'
        sonic.style.width = '350px'
        sonic.style.top = '130px'
        sonic.style.left = '365px'
        sonic.style.margin = 'auto'

        clearInterval(loop);
    }
    

}, 10)
