// alert ("i'm iron man");
console.log("hi hieldra");
let a = 221;
let b = a - 5;
a = 4;
console.log(b , a);
// const a 를 사용하면 변수를 바꿀수 없음 !!
// 첫사용은 const 진짜로 필요할때만 let

const dayOfWeek = ["Mon" , "Two" , "Wen" , "Thu" , "Fri"];

console.log(dayOfWeek[2]);

// 함수 만들기 
function sayHello(){
    console.log("Hello");
}

sayHello();


// 백틱(``)

function sayHello2(name , age){
    console.log(`Hello ${name} you are ${age} years old`);
}

sayHello2("Sanghoon", 15);

// return : ex

function sayHello3(name , age){
    return `Hello ${name} you are ${age} years old`;
}

const chiken = sayHello3("박상훈" , 26);

console.log(chiken) 

// 객체 만들기 a,b 아무이름 으로사용해도됨

const calculator = {
    plus: function(a, b) {
        return a + b; 
    }
}

//  수업 내용 주석 처리console.log(chiken);
const plus = calculator.plus(5, 5)
console.log(plus)