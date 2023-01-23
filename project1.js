// console.log("Welcome to spotify");
// let audioElement = new Audio('music/Salaam-E-Ishq.mp3');
// audioElement.play();
let mySong = document.getElementById("mySong")
let masterPlay = document.getElementById('masterPlay')
masterPlay.onclick = function(){
    mySong.play();
}