// 아래랑 같음 console.log(document.getElementById);

const title = document.getElementById("title");

console.log(title);
console.dir(title);
console.error("fuck")

title.innerHTML = "Hi! From JS";
title.style.color = "red";
document.title = "I own you now" 

// quertSelector 는 노드의 첫번째 자식을 반환
// 의미는 ("#원하는아이디")or(".class") # or .이 무조건 붙어있어야함 !!