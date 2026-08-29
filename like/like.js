const like = document.getElementById("like");
const dislike = document.getElementById("dislike");
const likeimg = document.getElementById("likeimg");
const dislikeimg = document.getElementById("dislikeimg");

let number = document.getElementById("number");
let count = 0;

like.onclick = function () {
    count++;
    number.textContent = count;
    const audio = document.getElementById('likeau');
    audio.play();
    likeimg.style.display = "block";
    setTimeout(function () {
        likeimg.style.display = "none";
    }, 1000);
}
dislike.onclick = function () {
    count--;
    number.textContent = count;
    const audio = document.getElementById('dislikeau');
    audio.play();
    dislikeimg.style.display = "block";
    setTimeout(function () {
        dislikeimg.style.display = "none";
    }, 1000);
}