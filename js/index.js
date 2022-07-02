const video = document.querySelector('#video')
const backward = document.querySelector('#backward')
const play= document.querySelector('#play')
const pause = document.querySelector('#pause')
const forward = document.querySelector('#forward')

backward.addEventListener('click',handleBackward)
play.addEventListener('click',handlePlay)
pause.addEventListener('click',handlePause)
forward.addEventListener('click',handleForward)

function handleBackward (){
    video.currentTime = video.currentTime - 10;
}
function handlePlay (){
    video.play()
    play.hidden= true
    pause.hidden=false
}
function handlePause(){
    video.pause()
    pause.hidden=true
    play.hidden=false
}
function handleForward (){
    video.currentTime = video.currentTime + 10;
}

const progress = document.querySelector('#progress')
video.addEventListener('loadedmetadata',handleLoaded)
video.addEventListener('timeupdate',handleTimeUpdate)

function handleLoaded (){
    progress.max = video.duration
}
function handleTimeUpdate (){
    progress.value=video.currentTime
}

progress.addEventListener('input', handleInput)

function handleInput(){
    video.currentTime = progress.value
}