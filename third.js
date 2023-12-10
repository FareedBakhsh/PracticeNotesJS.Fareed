// chapter# 3 ; Loops in Javascript;
//(i) Loop in java Script : defined as that loop are used to excute a piece of code again and again or to repeat the codes;
// Example
// let 
// fareed = "debugflow"
// console.log(fareed)
// console.log(fareed)
// console.log(fareed)
// console.log(fareed)
// console.log(fareed)
//the above is the example of loop in which code is repeat again and again....
// there are three type of loop that are below;
// for loop , while loop and do-while loop
//(i) For-loop. Formula For writting programm in For Loop;
// while or do or for (here will come the condition when at remain true it will runing when will fals then stops){
//    /do some work
// }
// complete formula ,for (condition ){ // do dome work};
// there are 3 type of statement in for looop parentheses() firts initial statement ,stoping staement and third is updating staement;
// let example 
//  for(let i=5;i<=9;i = i +4){
//    console.log("fareed")
// }
// the below example of madaniquiada is the best example of for loop that explain in simpe way;
//for (let i = 6; i <= 12;i++){
//
//console.log("madaniquaida")
// let take the example of  the apna college to explain more best way the for loop
// for(count = 5; count <=70; count--){
//     console.log(" Anas and Mutabassim Raza")
// it will be continously running many of thousands of time due to applying of for loop;
// for(count = 5; count <=70; count++){
//     console.log(" Anas and Mutabassim Raza")
// }
// for(count = 5; count >=70; count++){
//     console.log(" Anas and Mutabassim Raza")
// it will be not run 
//for(count = 70; count >=70; count++){
// console.log(" Anas and Mutabassim Raza")}
// this below was print 2 to 10000
/*for( let count = 2; count <=10000; count++ ){
   console.log("apna college")
}
console.log("loop has ended")
/*for( let count = 25; count >=100; count-- ){
   console.log("apna college")
}
console.log("loop has ended")*/
//Practical Example of loop programm
// Calculate the the sum of 1  tp 5, this is a complex version of code of loop,
/*let sum = 0;
for (let i = 1 ; i<= 5; i ++){
   sum = sum+i
}
console.log("sum =",sum)*/
// print 1 to 5
/*for (let i=1; i <=5 ;i++){
   console.log("i=",i)
}*/
/// print 1 to 100
/*for (var j =1; j<= 200; j++){
   console.log("j=",j)
}
console.log(j);

/*(ii);     Infinite Loop in JavaScript:

These are those looop that has never ends is called the "infinite loops"
we have already many of the example of infinte loop that cannot be ending and continously running ;
example one is below;*/
/*for (k = 3;  k >=2;k++){
   console.log(k)
}

//(iii) While Loop in the JavaScript;

// writting rule of while loop and formula :while (condition){ // do some work};
// Example ;*/
// let i = 5;
// while (i<=25){
//    console.log('i=');
//    i++
// }
// let i = 5;
// while (i<=25){
//    console.log("faizana-e-Madina");
//    i++
// }
// which thing we do with for loop can also with while loop;
//(iv)   do-while Loop in javaScript; 
//The loop in which program of loop first one time and after it condition is ture then it run , if false 
// then it will stop by runing one time iscalled " do-while loop"
// There is a small difference in do-while loop than other looop,in it condition is come at the last
// Formula of do-while loop is following 
// do  { // do some work }  while (condition) ; 
// Example 
// let j = 10
// do {console.log("Mr.Fareed");j++
// }while (j<=9);
// the above loop of do run one time then furthur while loop condition is false ,then it had stoppped,
//by modify the above programm 
// let i = 10
// do {console.log("Mr.Fareed");i++
// }while (i<=50);Noted the semicolon putting is the necessory at the end of do-while loop but not matter in anothor type loop
//(v): for-of loop in JavaScript : it is used to iterable /write the values of object
//The loop that help to us in excuted the programm of varaiable type of (string and Array) are called for-of loop
// Formula of writting: for(the value/val of str or Array){
// do some work
// }
// Example ;
//for-of loop:// it help iterator-->character
// let str = "Madina"
// for (let i of str){
//    console.log("i=",i)
// };
// let str = "JavaScript"
// let size = 0
// for (let i of str){
//    console.log("i=",i);size++
// };
// console.log("string size=",size)
//(vi): for-in loops :
// Formula : for (let key in objVar ){
//    do some work
// }
// let studen = {
//    name: "fareed",
//    cgpa: 3.5,
//    age: 20,
//    ispass: true
// };
// for (let i in studen){
// console.log("i=", i)
// };

// Practice Test Question

//Q1:Print all even number from 0 to 100

// let setA = ("1,...,100")
// console.log(setA)

// for (num =0;num<=100;num++){
//    console.log("num=",num)
// }// this solution is true of above practice test

// if we wanna to check and print the even number from 0 to 100,then it will be solved like below
// for (num =0;num<=100;num++){ 
//    if (num%2==0){//even number will be print
//    console.log("num=",num)
//    }
// }
///
// if we wanna to check and print the odd  number from 0 to 100,then it will be solved like below

// for (num =0;num<=100;num++){ 
//    if (num%2 !==0){//even number will be print
//    console.log("num=",num)
//    }
// }

//Practice  Question number Test  Qs2:  Creat a game where you can startwith any random game number.Ask user to keep
//the guesing game number untill user enter the correct values
//let 
// gameNum =25
// let userNum =  prompt('gues the game number ')
//  console.log(userNum)             //correct answer of the above PraticeQs2

//  while (userNum != gameNum){
//    userNum =prompt("you enter the wrong number,Guess again");
//  }
//  console.log("Congratulation , you enter the correct Number")

// ("vi"); String in The JavaScript;
//The sequence of the character used to represent the text is called the "String";
// Creat String 
// let str = "Fareed Alfah Tech"
// String Length
// --------.---->---<------New concept==> str.length
 // String Indices
//  str[0],str[1],str[2]
 // we can write a string with single coat or double cotation
 /* Properties in String 
 for lenth str.lenth ,for indices [1]*/
//  let str1 = "Sultan"

//  let str2 = "Anaas"

// as such we  were write the value of the object like "obj.key" similarly in casse of string we write in this way str.length, str[] this is for indecs
// Each character has its own original position
// the word " fareed " has its own position that is start from 1,2,3,4,5,6 because it has 6 character number ,these are shown by index
// index is a singular word and indices is a ploural word 
// for index example of the string
// str5 = " FAREED"// if we wana to print it 
// console.log(str5[6]);

//(a) ; Template Literal  in string of the javaScript ;A way to have embedded exprtession in string called "Template literal String"
 //These are the special type of template for  string and also writting the for variable of the JavaScript 
// These can also shown by backet word that symbol is `farred template literal `

//let specialString = `This is a Template Literal in String`;// This is wwritten in baket 

//console.log("specialtypeString")
// if wana to check the type of that we writ in Tempate literal
//console.log( typeof specialString);

// let we take an exampe to under stand  furthur it 
// let  obj; {
//    item:"markut"
//      price:10;
//    }

//      console.log("the cost of ");
     
//      let output = `the cost of ${obj.item} is ${obj.price} rupees`;
//      console.log(output)

// (b) String interpolation;
// The phenomenone i which string is created by doing substituion of placeholder is called the " String Interpolation"
/* its formula is that 
                        
                    `string text ${expession} string text`*/

//   its example we can do and explain it example explain above now more explain some more ///
// let specialString = `this is a templtae literal${1+2+3}`;
// console.log( specialString);
// Escape Character are alsop part of teh String that is shwon by the back slash n ---> /n this is also use for next and for back is used -->/t
// let  kot = "Tomb fareeed"

// console.log( kot);
// suppose we print the tomb fareed  in the escape character 

// console.log("tomb /n fareed");


// console.log("tomb /t fareed");

// let str = "tomb/tfareed"
// console.log(str.length);

//(vii) String Method in JavaScript;
// There are following buildt-in function  to manipulate a string 

//--> str.toUpperCase()

// --->  str.toLowerCase()

//--> str.trm//removes WhiteSpace (  it mean is that it remove the all white space in string )
//erxample
// let str  = "   Virtaul University       "// it remove the all these space
// console.log(str.trim());

// the above are method that are apply 

// let str = " Apna college"
//   str.toLocaleLowerCase();
//   console.log(str);
//   console.log(newstr);

//   str.toUpperCase();

//   console.log(str);
//   console.log(newstr);

// Another More metnod In JavaString string;

// -----> formula :str.slice(start,end?) // return anyone part of the string

// examples are belowing 

// let str  = "0123456789"

// console.log(str.slice(1,3))

// console.log(str.slice(1,7))
// let    str1 = " hellow World"

// console.log(str1.slice(2, 6)) // all these examples has been explaine and giving the start and end character word that we want to print 

//------->  formulan: str1.concat(str2) // join str1 with str2

// examples are belowing 

/*let str1 = "fareed"
let  str2 = "bakhsh"
console.log(str1.concat(str2))*/
// reasult fareedBakhsh will concat both fareed and bakhsh
// let we take another Examples 
/*let str3 = "23"
let str4 = "25" 
console.log(str3.concat(str4));*/ 

// in this exmple  concat just doing the add to each other in form 2325 not doing the plus 
// the above data example data can by writein an anothe way that is shown 

/*let str5 = "786"
let str6 = "madina" 
let res =(str5.concat(str6))
console.log(res);*/
// we write the above program in anothe rway 
/*let str5 = "786"
let str6 = "madina" 
let res =(str6.concat(str5))// in it we are writiting second string first and then writting first string
console.log(res);*/
// we can use the plus symbol instead of putting  and writting concat such as shown the below

/*let str5 = "786"
let str6 = "madina" 
let res =str5 + str6
console.log(res);*/
// in another we write it 

/*let str5 = "786"
let str6 = "madina" 
let res = " i am learning form "    +str5 + str6;
console.log(res)/*/

// --------->Focus on this formula --> str.replase(serachVal,newVal)
// now explain it in detail breifly and in detail
// Examples are the belowing

// let str8 = "Makkah"
// console.log(str8.replace ("kkah", "dina "))

// let str9 = "Last prophet"
// console.log(str9.replace ("Last" , "First"))


// ==---====---> str.charAt(idx) = it is used to character position where is located the any char in its index level
// Examples  are belowing
// let  str10 = "FareedBakhsh" 
// console.log(str10.charAt(2));

// let see we now another examples of all these
// let str11 = "123455"

// console.log(str11.charAt(0));
// console.log(str11.charAt(4));
// console.log(str11.charAt(3));
// console.log(str11.charAt(2));
// console.log(str11.charAt(1));

// Now we see the anither examples of str.charAt[idx]
// let str99 = "i love the Holy Prophet Muhammad PBUH"// in it we wanna to print P ,clear the concept of their logic

//  console.log(str99.charAt(16));

//+++++++______++__-----PRACTICE EXAMPLES TEST QUESTION 

 /*  Qs1 => Prompt the user to enter their Full name .  Generate a user name for them bases on the input
start the Username with @ , followed by their full Name ending with  the fullname length.
eg: username = "noorfatima", username should be "@noorfatima786"// Answer is given by below*/

// let userName = "noorafatima"
// console.log(prompt(userName));
// console.log(userName.length)// my own concept solution of above practice Question  that is wrong but i try my best 
// exact solution is below , in above in practice Qs1 will used the and solved by prompt + concat +str.length
// let 
//   fullName = prompt("enter your full Name");
//   let usernme  = "@" + fullName + fullName.length// by adding just plus sign 
  console.log(usernme)// correct solution

  // by addding the concat method // it is your responsible to solve this question by own doig research

  let 
  fullName = prompt("enter your full Name");

  let usernme  = "@" + fullName + fullName.length





































