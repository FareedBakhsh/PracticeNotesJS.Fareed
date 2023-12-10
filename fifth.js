// console.log("well come toward fifth lecture in java series");

// // FUNCTION IN JAVASCRIPT
// // IT CAN BE DEFINE AS THAT THE BLOCK OF THE CODE THAT PERFORMS A SPECIFIC TASKS ,CAN INVOKED WHENEVER NEEDED;
// // it can be define as that block of the code that is used to perform the specific task can be invoked (here invoked mean is taht we call )whenever needed ;
// //Example : 
// console.log("hellow");
// "abc".toUpperCase()
// //[1,2,3,4,5,6,8].push(86);==> this is the best example of function in which we write first programm and then .push() to invoked it mean call to put and add the 4

// /// it take some input and give the output 

// // Function Defination and its writting method.                   // Function Call it is represent by ==> functionName()
// //functiion/*(this is a reseverd keywords)*/ functionName({
// // do somethiong }.  we take it best example 
//   function functionName(pharm1,pharm2){
//     //do some work
//   }
//   // let take its the best example to understnd it more 
//   // myfunction
//   function  myfunction(){
//     console.log("wellcome to apna College!");
//     console.log("we are learning the javascript:")

//     console.log("wellcome to apna College!");
//     console.log("we are learning the javascript:")

// }// here it is not giving the output because it is not call due to which is not printed , now below it os called it;
// myfunction();// it is calling the above function programm,if we want to call it  more time then we repeat it again
// myfunction();
// myfunction("7");
// myfunction(20);//this is the many time calling of function
// // Here we learn one another conept that is redundency mearn repeating of the things , when aprogram is repeated then we us function method
// // in function we write the input in the parentheses() and invoked  or call by function name 
// // let we start
// function myName(fareed){
//     //parameter--> input
//     console.log(fareed);
// }// now we call it
// myName("i love the Js");// argument 

// //  Function --> 2 numbers , sum 
// function sum(x,y){
// console.log(x+y)
// }// now invoking mean  calling it
// sum(77,90);
// sum(74,34);
// sum(75,45);
// sum(4,344);
// sum(99,344);
// //one important work of functiuin 
// // it also return the vlue instead by print it, for that we use return keywords
// // use of return 
// function add(a,b){
//     add = a +b
//     console.log("before return")
//     return b;
//     console.log("after return")//it show that it is unacheiable detected, therefore no any console.log is written after return
// }
// sum(7,9)
// let val = sum(9,9);
// console.log(val);


// // Here is another main point that we need to understasnd , there are some fix parameter that remain fix 
// // fix parameters ---->like local variable and block scope of function
// // example of sum function 
// // function some(a,b){
// //     return a +b ;
// // }

// /// Division function 
// //  function  mul( f,b){
// //   return f*b;
// //  }
 // (A) :  Arrow Functions : Compact Way of writting Function is called Arrow Function and it is denoted by this symbol  => 

//formula of its  writting method
 /*const functionName=(param1,param2)=>{
 // do some work }*/
 //Example writting method:-
 /*const sum=(2,3) 
    return a +b
 }*/

// // Now we take the above example to write that in aArrow function

// function sum(a,b){
//     return a +b ;
// }
// // now above writitng in arrow function form
// const arrowsum=(a,b)=>{
//     console.log(a+b);
//     return a+b
// }
//  // Division function 
//  function  mul( f,b){
//   return f*b;
//  }
// // now above writting arrow method
// const arrowmul=(f,b)=>{
//     return f*b;
// }

//Let's take and do some Practice question
//Q1: creat a function using the "FUNCTION" keywords take a string as an argument & return the number of the vowels in string .
//let we take a string

//  function countVowels(str){
//     let count = 0;
//     for(const char of str){
//       if (  char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u" 
//             ){
//                 count++;
//             }
//     }
//     return count;
//  }

//   const countVowels=(str)=>{
// /console.log("abced")
 //  }

 ///(B)  For each loop In Array ;
/// arr.forEach(callBackFunction)
///CALLbackFunction: Here, it is a function to excute for each element in the array
// /* A callback is a function passed as an argument  to another function;

//Example and Foemula
//  arr.forEach((val)=>{
//     console.log(val)
// });//

//let write  to any program in Uppercase ;for upperCase any Value writtin in string in parenthese console.log(("fareed bakhsh").toUpperCase())
///Take an example "For Each Loop In Array"
// function abc(){
//      console.log("hello")}

//  function myFunction(abc) {
//  return abc;
//  }   
//     let arr = [1,2,3,4,5,6] ;   
//     arr.forEach((val)) => {
//         console.log(val)
//     }

// there are three parameter in array.forEach(call back function)
//these are ( val,idx and arr); it can be written as in its foemula
// arr.forEach((val,idx,arr) )=>{
// console.log(val.toUppercase(),idx,arr)
// }
// Higher order method / Funcion , it to say the forEach Loop in Array; Higher order function / method are parameter in forEach loop in Array

// Let's practice Q2;   For a given array of number , print the square of each values using the ForEach loop.
// let num1 = [2,3,4,5,6]
// num1.forEach((num1)=>{
//      console.log(num1 *num1)
// } );
// it can be written in another method way in single line  ;

//num1.forEach(calcSquare);

//(C) some More array Method;

// MAP=>creat a new array method with the result of some operation . The value its callback  return are used to form new array,
//Array.map(callbackFnx(value,index,array))
//Writting Formula 
//let newArr = arr.map((val) => {
 //   return val *4
//})

// Another Example 
// let num = [2,3,4,5,6]
// num.map((val) => {
//     console.log(val)
// })

// Writting above in another way ;
// let newArr1 =  num.map((val)=>{
//     return val *3 ;
// });
//console.log(newArr);

// let calcSquare = (num) =>{
//     console.log(num*num)
// }

//(D) Filter Array MEthod :
// Creat a new array of element that give true for a condition /. filter.
//Eg:all even elements
// Its writting Formula;
//let newArr = Arr.filter ((val)=>{
  //  return val % 2== 0;
//})

// Example: 
let are = [ 1,2,3,4,5,6,78,9,]
are.filter((val)=>{
    return val % 2 ===0;
})
//
let newArr = are.filter((val)=>{
return val % 2 ===0;
});
console.log('evenArr');

//(E).  =====> REDUCE ; It perform some operation & reduce the array to a single value. it return that single value.

// EXAMPLE :Java Sript Demo : Array.Reduce (
const array1 = [1,2,3,4];
// 0+1+2+3+4
const initivalue  = 0;
const sumwithinitial = array1.reduce((
    accumulator,currentValue
)=>accumulator+ currentValue,initivalue,
);
console.log(sumwithinitial);
// Example :
let arr = [1,2,3,4,5];
const output = arr.reduce ((res,curr)=>{

    return res + curr;
});
console.log(output);

// how we come out big value by using it 

let num = [9,8,6,4,4,56];
const output1  = num.reduce((prev ,curr)=>{
    return prev+ curr;
});
console.log(output);

// Practiec question ;Q1: We are given marks of student .Filter out the marks of the student That score 90+.

let mark = [ 57,5,7,7,88,,66,88,,99,67487];
let toppers = mark.filter ((val) =>{
    return val >90;
})
console.log(toppers);

// For Best Practice 
let n = prompt ("enter a number :")
let arr5 = [];
for (i =1; i <= n;i++){
arr [i -1] = i
};console.log(arr5)

// Practiec question ;Q2: Take a number n as input from user . Creat an array of number from 1 to n.(i) Use the reduce method to calcultate sum of all 
// numbers in array ,(ii)use the reduce method to calculate product of all numbers in the array .

//(i);
let num3 = prompt("enter a number ");
let num2 = [1,2,3,4,5,6,7,8];
let output2sum = num2.reduce((res ,curr)=>{
    return res + curr;
})

console.log(output2sum);

//(ii);

  let num5 = [1,2,3,4,5,6,7,8];
let factorail = num2.reduce((res ,curr)=>{
    return res * curr;
})
console.log("factorial");














