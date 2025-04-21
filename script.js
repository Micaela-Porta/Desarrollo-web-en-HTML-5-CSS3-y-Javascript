let video=document.querySelector("#video")
console.dir(video)
let mostrartactual;
const iniciar=()=>{
    video.play()
    console.log(video.duration)
    console.log(video.currentTime)
    let tiempohtml=document.querySelector(".tiempo")
    tiempohtml.textContent=video.duration
    setInterval(() => {
        let tiempoactual=document.querySelector(".actual")
        tiempoactual.textContent=video.currentTime
    },1000 );
};
const pausar=()=>{
    video.pause()
    clearInterval(mostrartactual)
};
const mutear=()=>{
    video.muted=true
    let botonmute=document.querySelector("#mute")
    botonmute.textContent="MUTE ON"
}