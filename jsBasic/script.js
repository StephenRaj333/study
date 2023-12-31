// call by value 

var a = 15; 
var b = a;
console.log(a);
console.log(b);
b = 20; 
console.log(a);
console.log(b);

// call by reference 

var arr = [10,20,30]; 
var brr = a;
console.log(arr);
console.log(brr);
b[0] = 25; 
console.log(arr);
console.log(brr);

// deep value 

var arr = [10,20,30]; 
var brr = a;
console.log(arr);
console.log(brr);
b = [25,45,67]; 
console.log(arr);
console.log(brr);

// Xml HTTP Method Basic 
var xml = new XMLHttpRequest();

xml.open("GET", "https://restcountries.com/v3.1/all");

xml.send();

xml.onload = function () {
    let xmlData = JSON.parse(xml.response);
    console.log(xmlData[0].name.common); 
}   



// Gloabl Exexution scope   
console.log(a); 
var a  = 15;    
console.log(a); 
saymyName();    
// working of the javascript engine is called hoisting  
// also known as Global Execution Context.  

// local execution scrope   
// console.log(b);  
let b = 25; 
console.log(b); 


// functions are first citizen's of the js code     

function saymyName () {     // function declaration     
    console.log(a)  
    // var a = 30; 
    var b = 10; 
    console.log(a + b);     
}   

// saymyName();   // function declaration 

// function will create a separate local scope and delete it 


// parameters and arguements  

function sumofTwo (num1,num2) {
    // num1  and num2 is paramerters
   const value = num1 + num2;
    console.log("Value of the sum",value);
}

// sumofTwo(5,10);
sumofTwo(30,40);


// returnable functions 
// using return function you can use the value in another place 

function multipleofThree (num) {
    return num * 3
}

const value = multipleofThree(3)
console.log(value);

let result  = 10 * multipleofThree(3);

console.log(result);


// executable function 

function menJob () {
    return console.log("Mentor")
}

function myData (name,fn) {
    console.log("My Name is ",name);
    fn();
}

myData("Stephen",menJob)


// anonymous function 

let AnonymousFunction = function (name) {
    console.log("I'm an Anonymous function",name);
}

AnonymousFunction("Syntax");

// arrow Function 

const ArrowFunction = (num1,num2) => console.log(num1 + num2)

ArrowFunction(3,5);

// IIFE (immediatly invoked function execution)

(function getBatchName (batch) {
    console.log("The Batch Name is",batch)
})("English");



let values = "FSD";
console.log("before IIFE" ,values);

(function changetoLowerCase (data) {
    console.log("after IIFE ",data.toLocaleLowerCase());
})(values); 


//  problem solving 
// odd number is an array   
const printOdd = function (arr) {
    for(let i=0;i<arr.length;i++) {
        if(arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
}

printOdd([1,2,3,4,5,6,7,8,9,10]);   

// odd number is an array   using IIFE  

(function printOddonIIFE (arr) {    
    console.log("-----IIFE");   
    for(let i=0;i<arr.length;i++) { 
        if(arr[i] % 2 !== 0) {  
            console.log(arr[i]);    
        }   
    }   
})([1,2,3,4,5,6,7,8,9,10]);     
