const btnum = document.querySelectorAll(".drum").length;
for(var i=0;i<btnum;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",texttried);
}

document.addEventListener('keypress',function (event) {
    justtried(event.key);
    console.log(event.key);
});

function texttried() {
    var clicked = this.innerText;
    justtried(clicked);
}

function justtried( a ) {
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
        default:
            console.log("Nothing");
            break;
    }
    anime(clicked);
}

function anime( a ){
    if(a != null){
    const yup = document.querySelector("."+a);
    yup.classList.add("pressed");
    setTimeout(function(){
        yup.classList.remove("pressed");
    },100);
}
}