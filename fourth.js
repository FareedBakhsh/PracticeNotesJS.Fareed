
// CHAPTER NO # 04 ==> ARRRAY [ ] METHOD OF IN JAVA SCRIPT ; it is the linear method to store the information 
 // collection of items is called "Array"
 //in it we give the same name of the collection of data,but in object ,we will give the separte name to every object
// In array ,we same or different type of data type of collection data type such we add string ,boolen,variable ,number etc...
 //Array creating Method;
//  let Heroes = ["hazoor" ,"imran","ihsan","fareed","sultan"]
//  console.log(Heroes)
//  let marks = [95,85,75,65,55]
//  console.log(marks);
//  console.log(marks.length);
 
 //(A): ARRAY INDICES IN JAVASCRIPT;

//WRIITNG FOEM TO IT 
//arr[O],arr[1],arr[2].....
//let setmarks = [90,80,70,60,50]; its indices  of will be [0,1,2,3,4]

/*interview question that can be asked from you during interviwe


               string ------>> immutable --> it mean that its values cannot  be changed by going in index;

               array ------->> mutable --> > it mean that its values can  be changed by going in index;

// Here we wil discus the about // "Function and Method "  and Array 
let num = [1,2,3,4]
console.log(num); 

//(*A*) : FUNCTION IN JAVASCRIPT :
 // it is define as that the block of code that perform the specific tasks , can be invoked /mean call whenever needed; as known as "function in the JS"
//Example ;
//==> conssole.log("hellow!")
//==>"abc".toUpperCase()
//===>[1,2,3.4].push(4);*/


// (B); LOOPING  OVER AN ARRAY ;
//It mean is that print all element of an array

// New words in js ==> loops --->iterable(string,object,arrays) (it mean is that at which we do and apply the loops);
// Applying the for loops
// for loops 

// applying strimg method on array for loop,toUpperCase;tolowerCase;

// let  cities1 = ['karachi','islamabad','lahore','multan']

// for (let city of cities1){
//     console.log(city.toUpperCase());
//     console.log(city.toLowerCase())
// }

//       let  num  =  prompt("fajir prayer is started")
//       alert("kul roza ha")

//Let's practice Question:1 Solution
//Foe a given Array with the marks of the student --> [85,97,44,37,76,60]
//Find the average marks of the entire class?
// let marks = [85,97,44,37,76,60]

// let sum =0;

// for(let val of marks){
//   console.log(marks)
//   sum +=val;
// }
// let avg = sum /marks.length;
// console.log(`avg mark of the class = ${avg}`);

//
//Let's practice Question:2 Solution
//For a given array with price of 5 items-->[200,300,400,500,600]; all items have 10 % of them.change the array to store the final price 
//after applying the offer 
// let items = [200,300,400,500,600]
// let idx = 0;
// for (let val of items ){
//   let offer = val/10;
  // items[i] = items[i] - offer;
//   {console.log('value after offer = ${items[i]}'); i++;}
//   console.log(`value at index & ${idx} = ${val}`)
//   idx++;
// }
// applyiong the for loop;
// for (let i=o;i<items.length;i++){
//   let offer = items [i]/ 10;
//   items[i]-= offer;
// }
// console.log(items);


//( C ) Array Method in JS ;
//e.g. most data of website are stored mostly in array form 

//(i) Push(): add to end  ; it explain is below by the exaples
// let array;

// let fooditems=["tomato", "potato","bangon","slice "]
// fooditems.push("apples", "bananas");
// console.log(fooditems);
 
//(ii) Pop() delete from end & return;

// Example;
// let arrays;

// let foodatoms=["tomato", "potato","bangon","slice "];

// console.log(foodatoms)

// foodatoms.pop('slice')

// foodatoms.push("corn");

// console.log(foodatoms);

//(iii).   toString() :convert array to string

// console.log(foodatoms.toString());

//let marks = ['2','3','4','5']

// console.log(marks);
// marks.pop('5');
// marks.push('786');
// console.log(marks.toString());

//(iv); concat method  : it is uesed for collecting the multiple arrays and return values of that collecting;

// let kotheroes =['zain','sohail','zohaib','saqlain','zulfiqar'];
// let rpheroes = ['usama','sumroz','usamn','bakar'];
//  let    commonheroes = kotheroes.concat(rpheroes);
//        console.log(commonheroes);

// ( vi )  unshift() : it works like the push() method but push () method add values in end but unshift() method put in start in array .

// By taking example from above 


 //let kotheroes =['zain','sohail','zohaib','saqlain','zulfiqar'];
         //basti = kotheroes.unshift("fareed");
             //kotla = ;kotheroes.shift("anas");
//console.log(kotla);
//console.log(basti);



// ( vii ) Shift()--> Method also work like the pop()  method that  delete the values and and return from last side but shift method do from 
// first side  in array ;


///basti = kotheroes.unshift("fareed"); from the aboce example 

//(viii); Slice(); this is amethod which is used to return a piece of array ;it does not change the origional array
           
 // formula ===>.  slice(startidx,endidx)
//example 

//let kotheroes =['zain','sohail','zohaib','saqlain','zulfiqar'];
//console.log(kotheroes)// 
// by putting the slice () method
//console.log(kotheroes.slice(1,3));



 //(ix) Splice(); Change the original array (add, remove ,replace);

// formula====> splice(startidx,delcount,newEl1.....) ;

//iet  kotheroes =['zain','sohail','zohaib','saqlain','zulfiqar'];
//console.log(kotheroes)// 
// by putting the splice () method
//console.log(kotheroes.splice(0,2,1));

// Second Example;
let array = [1,2,3,4,5,6,7,8,9]
   num1  = array.splice(2,2,102,102)

console.log(num1)
//. Add Element ;
array.splice(2,0,101);
// Delete Elemnet 
array.splice(3,1);
//Relplace Element
array.splice(3,1,101)

//Let's Practice test Example;
//Q1; Creat an array to store compainies --> "bloommerg","Microsoft","Uber","Uber","IBM","Netflix"

//a-- Remove First company from array 
//b-- Remove uber and add 'olaa' in its plase
//C -- Add Amazone at end ;
let cmp = ["bloommerg","Microsoft","Uber","Uber","IBM","Netflix"]
console.log( cmp.shift("Bloomberg","uber"),cmp.unshift("ola"),cmp.push("Amazon"))
;;




















































































