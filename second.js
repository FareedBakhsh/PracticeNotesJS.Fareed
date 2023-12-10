
// (2) Date starting the Programming 26- 11 november -2023

//Apna College , the Chapter # 2

//Here we will the discuss the Topic in the Java "Script Series" that are Below;
;// Variables & DAta Type
//;'Operators and Data Type 
//Loop and String ..
//. Array and Fucnction
//.,Object and the API Calls
//DOM  & Events
// *COMMENTS IN THE JAVASCRIPT 

// *Comment and Multilines Comments

//"comment in the jave Script that cannot be excuted"
 //all above line that are the single and multilines comments that are not excuted*/

 /* Operators in JavaScript =
 
 "" used to perform some operation/ tasks on data"

 1 ==--Arithmaric operators
 
 (these help in the math)
 .(+,-,*,/)
 .Modulus
 .Exponention
 . Increment
 .Decrement
  Example ,a+b , in this a and b are operands and symbol + is operator the add  or operand to a and b,

  let a = 5;
  let b =2;
when we write in the string in form the console.log to print or executed ,it print as it ,
  console.log*/

//   let a = 5;
//   let b =2;
//   let num1 = 5
//   console.log(num1)
// console.log("a + b=",a + b);
// console.log("a - b=",a -  b);
// console.log("a - b=",a + b);
// console.log("a + b=",a - b);
// console.log("a ** b=",a ** b);('here the double star  mean is taht 5 power is 2 that write in such form in math 5^2')
// console.log("a / b=",a / b);
// console.log("a % b=",a % b);
// console.log("a * b=",a * b);

// Unary Operators

/* there two type of "unary operator" in just javaSript
 1- Increment shown by the Symbol +
 : Example a++ mean a = a +1 , it mean we want to increase */

//   let a = 5;
//   let b =2;

//   a = a + 1;// 6
   
  //to write in simple way to above code and statement 
  

//to write in simple way to above code and statement 
  
//   a ++;
//   console.log(a)
//   console.log("a = ", a);

/*2- Decrement shown by the Symbol - -,
  : Example =b- - mean a = a- 1 , if we want to Decrease */
  
//   a = a - 1;
   
  //to write in simple way to above code and statement 
  
//   a --;
//   b--;
//   console.log("a = ", a, " & b = ", b);

// ------>--->--> uniary Operators
//  let a = 7;
//  let  b = 10;
//  console.log("a  =", a, "& b = ", b); 

 //Here we discuss the pre operators such as (++a,--a ) it mean that it will  first change the values or data type  in doing the programm then print

//  console.log (" ++ a =" , ++ a );
 
//  console.log (" --a =" , -- a );

 // Now discuss the "post operator" shown such as (b--, b++) mean that it will change the values after the doing programm;

//  console.log (" a -- =" , a ++);
//  console.log (" --a =" ,++a);
//  console.log("a = ", a );

 /* 2 == Assignment  operators 
  such as ( = , +=  , -= , %= , **=, /= );
 += it meann that is if we write a += 1, it mean that*/  

// Those operators that assign values to another such as given the below with practical examples 
// let  
//    a = 5; 
//    b = 6;
//       a -= 4;    // a = a-4

//    console.log("a =", a);

//    console.log(a);
// a -= 6; //("it mean is that ") ;a = a -6;
// console.log( "a=", a);

//    a += 3;//("it mean is that"); a = a + 3;
// console.log("a =", a);

//    a /= 7;//("it mean is that");  a = a / 7;
// console.log( "a= ",a);

//    b %=9;//("it mean is that"); b = b %9; 
// console.log("b = ", b);

//    b **= 2;//("it mean is that"); b = b ^2;
// console.log("b= ^", b);



 
/* 3 == Comparisiom operators in java Script;


 = Those which are used to compares two or more than two values,
1 = Equal to (== )- it just check the values ,
2 = Equal to & Type (===)this check the values and also check the data type that may be string , boolen, null , number ,undefine  etc..
3 = Not Equal To(!=) 
4 =  Not Equal to and Type  ( !===);
5 = Less than (<)
6 = Greater Than(>)
7 = Greater than or Equal to (>=)
8 = less than or Equal to (<=)*/
// in below programm , boolen is used 
//let a =5 ;
//   b = 5;
//   console.log("a==b", a ==b);// false 
//   console.log("a!=b", a !=b);// false 
//   console.log("a<=b", a <=b);// true 
//   console.log("a>=b", a >=b);// true 

// let 
//     c = 5// number 
//    b  ="5"// string (implecement change it into )->(number ) wheen a programm is run like it , then implcement in javascript convert this string into number then it will be the compare to above number 
//    console.log("a===b", a===b);

//    console.log("a!===b", a===b);


/* 4 = Logic operators in javaScript ;

(i) Logic AND(&&)
                      it says that i will give the true logic when. both conditaion will be true ,if on true and another will fallse 
                      then also will give the false ;*/
                    //   let  
                    //   x = 6;
                    //   y = 9;
                      
                    //   let cond1 = x > y
                    //   let cond2  = x== y
                    //   console.log("cond1 && cond2 =", cond1 && cond2);
                    //     console.log(x >5 && y <10);// true 
                    //     console.log(x >5 && y >10);// false

/* (ii) Logic OR (||)
                         it says that if condition  from both , anyone will be true ,i will give the true reasult 
                         
                         */  
//                          let  
//                          f = 6;
//                         b = 9;
                         
//                          let cond3 = f > b
//                          let cond9  = f== b
//                          console.log("cond3 || cond9 =", cond3 || cond9);
//                            console.log(f >5 || b <10);
//                            console.log(f>5 || b >10);

// /*(iii)  Logic NOT(!) 
//               it says that i will make coditaion false if it is true and will make true if it is false */
//               let  
//                          i= 6;
//                         m = 9;
                         
//                          let cond4 = i> m
//                          let cond98 = i== m
//                          console.log("cond4 ! cond8 =",);
//                            console.log(i !=5 );
//                            console.log(m!=7);

/*  5 == Conditional Statement in JavaScript;
To implement some condition in code programm is called Conditional Statement ., e.g. for voting ,age should be the 18 years +, for passing subjects , marks should be greater than 33%
Exam[ple :if we want to change the website colour mode into dark mode and white mode , can done all things by just apply the condtition  
  let Colour ;
   if ( mode == " dark-mode "){
    colour =" black "
//    }*?

There are three type of the conditional statement 


 (i) If condition statement  , it depend upon the condition, if condition will br true then it will be run otherwise it will be print the part of else conditoon ;*/

  //  let age = 24;
  //  if (age >=18 ){
  //   console.log("you can vote")

// let age1 = 5
//        if ( age1 <6) {
//         console.log("you are child")
//        }  
       
//        let mode = "dark "
//        let colour 
//        if (mode == "dark"){
//         colour =" black"
//        }
//        else if (mode= " light "){colour =" white "}
//         console.log( colour )
// ;
// ;let age = 40 ;

// if (age <18 ){
//   console.log("you can vote ")
// }
// else {
//   console.log(' you cannot vote ')

// here one point is noted that else is always come with If and it cannot be come alone.//

// let num1 = 9
// if (num1+7){
//   console.log("num comes  even")
// }
// else{
//   console.log("num comes odd")
// };
// //
// let num = 12
// if (num %4){
//   console.log (num,"is odd")
// }
// else{
//   console.log(num,"is even")
// };
// (Noted) Syntax: when we write and speak the english , then we follow its grammaticlly rules like Tenses and fullstop(.)and question marks (?)
/*when we ask some question , similarly when we write any programming lagunage in computure we follow the its rules during writting in the 
computure is called Syntax,*/

/*(ii) else-if Statement :*/

// let mode = "blue"
// let colour
// if (mode === "dark"){
// colour =" black"
// }
// else if(mode === "pink"){
//   colour = "pink"
// } else if(mode === " blue "){ colour = " blue"}
// else{
//   colour =" white"
// }
// console.log(colour);

// if (mode === "blue")
//  console.log(mode);

// All above,we  have discuss and perform unary operator bsed on two operands 
// Now we will discuss the three operands

//(B) : Ternary Operators in javaScript;
// These are those that are work on the three opreands 
// one condition ? secon true output ? third false output
// Example ;
// let age = 16;
// let reasult = age >= 18 ? "adult" : "not adult"
// console.log(reasult);


//let age = 15
  //age >= 18 ? 
 // console.log("adult" ): console.log("not adult");// These are the simple and compact of if - else condition;

 // Switch Statement  in JavaScript; These are those which are used to check the condition , it perform some fuction or task on the base of condition
// These are not more use in programming laguages;
//Example; //
//const foo = 0;
//switch (foo) {
  //case -1:
   // console.log("negative 1");
   /// break;
  //case 0: // Value of foo matches this criteria; execution starts from here
   // console.log(0);
  // Forgotten break! Execution falls through
  //case 1: // no break statement in 'case 0:' so this case will run as well
   // console.log(1);
  //  break; // Break encountered; will not continue into 'case 2:'
  //case 2:
   // console.log(2);
    //break;
  //default:
   // console.log("default");}

// (MDN). Mobile Directory Number ,go on google and research about more 

// Practice Programm example //. Q1 ; Get user to input a number using prompt("Enter a Numer "). Check if the number is a muliple of 5 or not .

// ------> Alert word is used in the javaScript , to convey and guve the message that shown on the webpages  ,Example is below

// alert("numaz ka time ho giya ha !");// one time popup = this is a small banner or window that is used for giveing message like alert  or used marketing in webpage like creat free acount 

// prompt is also used to giving the message like popup and laert but it has one more feature , it give also one input when it give message on page 
// also used to take input from user 
// Example below
// prompt("namaz ka time hony wala ha! ")// explain it another way 

// let name = prompt("namaz ka time hony wala ha! ")// now try to print it 

// console.log(name);

// Practice Programm example //. Q1 ; Get user to input a number using prompt("Enter a Numer "). Check if the number is a muliple of 5 or not 
// let 
// name  = prompt (" enter a number: ")
// console.log(nam);
//Program For practice
// let 
// num  = prompt (" enter a number: ")
// if (num %5===0){
//     console.log("num is multiple of 5")
// } else {
//     console.log("num is not multiple of 5")
// }
//similarly 
//let 
// num  = prompt (" enter a number: ")
// if (num %3===0){
//     console.log(num," is multiple of 3")
// } else {
//     console.log(num,"is not multiple of 3")
// }///

//------------>>>> Practice Assignment Q2;
/* Write a program or code which can give the grade to the students according to their scores.
 80 to 100, A
 70 to 79 , B
60 to 69 ,C 
 50 t0 59, D
 0 to 49, F*/
// let  score = 49
// let grade ;
//  if (score >=80 && score<=100){
//     grade = "A "
//  }else if (score >= 70 && score<= 79){
//     grade = "B"
//  }else if(score >= 60 && score <= 69){
//     grade = "C"
//  }else if (score>=50 && score <=59){
//     grade ='D'

//  } else {grade ="Fail"}
// console.log("according to your score , your grade is :",grade )
// By writting in pompt form ;

// let  score = prompt("enter your score")
// let grade ;
//  if (score >=80 && score<=100){
//     grade = "A "
//  }else if (score >= 70 && score<= 79){
//     grade = "B"
//  }else if(score >= 60 && score <= 69){
//     grade = "C"
//  }else if (score>=50 && score <=59){
//     grade ='D'

//  } else {grade ="Fail"}
// console.log(grade )








              
              







   








































































 























































































































































































































































































































