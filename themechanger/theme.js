const togglebtn=document.getElementById("theme-toggle");

togglebtn.onclick=function(){
    document.body.classList.toggle("dark-theme");

    var isdark=document.body.classList.contains("dark-theme");
   
    if (isdark) {
    togglebtn.innerHTML = "☀️";
  } else {
    togglebtn.innerHTML = "🌙";
  }

}