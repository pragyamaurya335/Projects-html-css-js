let select=document.getElementById("theme-toggle");

select.addEventListener("change",function(){
   let chosenColor = select.value;
   document.body.classList.remove("dark-theme","root","owl","candy");
//    document.body.classList.add(chosenColor);
if (chosenColor) {
    document.body.classList.add(chosenColor);
}
});