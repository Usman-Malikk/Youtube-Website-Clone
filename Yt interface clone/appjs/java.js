let elm = document.getElementById("seaelmul")
let nextchange= document.getElementById("nxt")
let prevchange= document.getElementById("pre")
let flag=0;
nextchange.addEventListener("click",function()
{
    elm.style.transform="translateX(-33%)";

})
prevchange.addEventListener("click",function()
{
    elm.style.transform="translateX(23%)";

})
