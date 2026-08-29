let click=document.getElementById("verifybtn");
let pop=document.querySelector(".pop");
let show=document.querySelector(".show");
let age = document.getElementById("age");
let ok = document.getElementById("ok");
let notok = document.getElementById("notok");

click.onclick = function () {
    pop.style.display = "block";
};

function checkAge() {
    let ageValue = Number(age.value);

    if (ageValue >= 18) {
        ok.style.display = "block";
        notok.style.display = "none";
    } else {
        notok.style.display = "block";
        ok.style.display = "none";
    }
};