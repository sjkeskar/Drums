// const btnum = document.querySelectorAll(".drum").length;
// for(var i=0;i<btnum;i++){
// document.querySelectorAll(".drum")[i].addEventListener("click",justtried);
// }

document.addEventListener('keypress',function (event) {
    justtried(event.key);
});

function justtried( a ) {
    /*
    if(a){
        const clicked = a;
    }else{
    const clicked = this.innerText;
    }*/
    const clicked = a;
    switch(clicked){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            console.log("tom-1");
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            console.log("tom-2");
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            console.log("tom-3");
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            console.log("tom-4");
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            console.log("snare");
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            console.log("crash");
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            console.log("bass");
            break;
    }
}