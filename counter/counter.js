const add=document.getElementById("add");
const reset=document.getElementById("reset");
const sub=document.getElementById("sub");
let number=document.getElementById("number");
let count=0;

add.onclick=function(){
  count++;
  number.textContent=count;
}

reset.onclick=function(){
  count=0;
  number.textContent=count;
}

sub.onclick=function(){
  count--;
  number.textContent=count;
}