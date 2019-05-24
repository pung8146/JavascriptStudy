const title = document.querySelector("#title");

function handleClick(){
    title.style.color = "red";
}
function handleResize(){
    console.log("창이 조절될대때마다 호출되는중 ()있었다면 이벤트없어도 발생")
}
title.addEventListener("click" , handleClick); // ()없으므로 발생할때

window.addEventListener("resize" , handleResize);