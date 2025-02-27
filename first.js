console.log("Hii JS");


// Variable//
age=23;
console.log(age);
isfollow=true;
console.log(isfollow);
fullname="Rajni Shrivastva";
console.log(fullname);
let a;
console.log(a);
price=null;
console.log(price);

// DataTypes  //
age=23;
console.log(age);
typeof(age);
isfollow=true;
console.log(isfollow);
typeof(isfollow);
fullname="Rajni Shrivastva";
console.log(fullname);
typeof(fullname);
a=undefined;
console.log(a);
typeof(a);
price=null;
console.log(price);
typeof(price);



// Object //

const profile={
    FullName:"Aakash Sah",
    followers:1334,
    following:1,
    post:5,
    isfollow:true,
    likes:0,
};

//Operator
// 1. Arithmetic Operator

let c = 8;
let b = 6;
console.log("c + b =",c+b);
console.log("c - b =",c-b);
console.log("c * b =",c*b);
console.log("c / b =",c/b);
console.log("c % b =",c%b);
console.log("c ** b =",c**b);

//2. Unary Operator
let d = 6;
console.log("d++ = ",d++);
console.log(d);
console.log("d-- = ",d--);
console.log(d);

// 3. Assignment Operator
 let e =8;
 e += 4;
 console.log(e);
 e -= 2;
 console.log(e);
 e *= 2;
 console.log(e);
 e /= 2;
 console.log(e);
 e **= 2;
 console.log(e);

 // 4. Comparison Operator

 let f=8;
 let g =32;
 console.log("f==g",f==g);
 console.log("f===g",f===g);
 console.log("f!=g",f!=g);
 console.log("f!==g",f!==g);
 console.log("f>=g",f>=g);
 console.log("f<=g",f<=g);
 console.log("f>g",f>g);

 // 5. Logical operator

 let h=4;
 let s=6;
 let cond1=s>h;
 let cond2=h>s;
 console.log("cond1 && cond2 =", cond1&&cond2);
 console.log("cond1 || cond2 =", cond1||cond2);
 console.log("cond1 ^ cond2 =", cond1^cond2);
 console.log("cond1 ! cond2 =", !(s>h));


 // Conditional Statement
// 1. if Statement 

let mode = 'dark';
let color;
if (mode =='dark'){
    console.log(mode);
}

//2. else -if Statement

let ages =23;
if(ages>=23){
    console.log("you van vote");
}
else{
    console.log("you cannot not");
}

// 3. else-if Statement

let colors = "red";
if(colors=="red")
{
    console.log("red");
}
else if(colors=="blue")
{
    console.log("blue");
}
else{ 
    console.log("no color matched");
}

//4. Ternary operator Statement
let mobile =67;
mobile>67? console.log("buy"):console.log("sell");

//5. Switch Statement
const fruit= "orange";
switch (fruit){
    case "orange":
       console.log("ohooo");
    break;
    case "papaya":
        console.log("ahaaa");
    break;
    default:
        console.log("nanaaaa");
}

// Operators and Conditonal Statements

// let num= prompt("enter a number");
// if(num%5==0){
//     console.log("number is multiple of 5");
// }
// else{
//     console.log("number is not multiple of 5");
// }

// let score= 87;
// if(score>=80 && score<=100){
//     console.log("grade A");

// }
// else if(score>=70 && score<=89){
//     console.log("grade B");

// }
// else if(score>=60 && score<=79){
//     console.log("grade C");

// }
// else if(score>=50 && score<=69){
//     console.log("grade D");

// }
// else if(score>=40 && score<=59){
//     console.log("grade E");

// }
// else if(score>=0 && score<=49){
//     console.log("grade f");

// }
// else{
//     console.log(" fail");
// }

//Student Marks:

// let marks = 30;
// if(marks>=35){
//     console.log("pass");
// }
// else if (marks>=31){
//     marks+=2;
//     console.log(marks);
    
//     console.log("pass by using grace number");

// }
// else{
//     console.log("fail");
// }

//function
// function checkResult() {

//     let marks = parseInt(document.getElementById("marks").value);
    
//     if (marks >= 35) {
//         console.log("pass");
//     } else if (marks >= 31) {
//         marks += 2;
//         console.log(marks);
//         console.log("pass by using grace number");
//     } else {
//         console.log("fail");
//     }
// }
// checkResult(35);


/*array methods

1.push
2.pop
3.slice
4.concat
5.join
6.splice
7.reverse
8.indexOf
9.length
*/

// const aa = [1,2,3,4,5]
// const bb = [11,22,33,44,55]
// const cc = aa.concat(bb)

//  aa.length >=5 ? console.log("You grab offer") : console.log("You have no offer")

//  aa.length >=5 ? aa.push(6) : console.log("You are not allowed to add")
//  console.log(aa)




// console.log(cc);
//  cc.length >=5 ? console.log("You grab offer") : console.log("You have no offer")

// const cc = aa.concat(bb)
// console.log("Combined Group::",cc);
// const dd = cc.splice(3,3);
// console.log("Fighters::",dd);
// console.log("Non-Fighters::",cc);

 
// console.log("This pop the Last element::",aa.pop());
// console.log(aa)

// console.log("This pop the first element::",aa.shift());
// console.log(aa)


// console.log("Combined Group::",cc);
// const dd = cc.slice(3,5);
// console.log("Fighters::",dd);
// console.log("Non-Fighters::",cc);


// console.log(aa.indexOf(3));

// console.log("Reverse of an array aa::",aa.reverse());
// console.log("Join method in an array aa::",aa.join("-"));



//array properties:

// 1. length of array

// let arr=[1,3,4,5,67,7];
// console.log(arr.length);

//2.array indices
// let arr=["w","e","d"];
// console.log(arr[2]);

 
//3.for-of-loop of array 

// let heros=["vicky","ranveer","salman","ajay"];
// for(let hero of heros){
//     console.log(heros);
// }

//4. practice
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let i of marks){
//     sum=sum+i;
    
// }
// console.log(sum);
// let avg=sum/marks.length;
// console.log(avg);




//Loops
//1.for loop

// for(let i =1; i<=10;i++){
//     console.log("i = ", i);
// }

//2. while loop
// let i =0;
// while(i<=10){
//     console.log("i = ",i)
//     i++;
// }

//3. Do-While loop
// let i=2;
// do{
//     console.log("i = ", i);
//     i++;
// }while(i<=10);

//4.For-Of-Loop

// let str="rajni";
// let size=0;
// for(let i of str){
//     console.log("i = ",i)
//     size++;
// }
// console.log("size =", size);


//5. For-in-Loop
// let student={
//     name:"rajni",
//     age:23,
//     isPass:true
// };
// for(let i in student){
//     console.log("key =",i , "value", student[i]);
// }


//practice!
//  let GameNum=65;
//  let usernum=prompt("guess your number :");
//  while(usernum != GameNum){
//     usernum=prompt("your number is incorrect, guess again :");
//  }
//  console.log("congratulation , you guess correct number");

//practice!

// for(let i = 1; i<=100;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

//String:
//String Property
//1.str.length

// let str="Rajni Shrivastva";
// console.log(str.length());

//2. string indices

// let str="Ram Kapoor";
// console.log(str[6]);

//3. Template literals 
//  let sentence = `hii maam `;
//  console.log(sentence);

//  let obj={
//     price:12,
//     item: 2
//  };
//  console.log(obj);
// let output = `the cost of ${obj.item } is ${obj.price}`;
// console.log(output);

//4. Escape characters

// String Method

//1. string Uppercase
// let r = "abcde";
// console.log(r.toUpperCase());

//2. string Lowercase
// let r = "ABCDEFGH";
// console.log(r.toLowerCase());

//3. strring remove white space

// let r = "   ABVGfr   jhyf    ";
// console.log(r.trim());

//4. string Slice
//  let sen = "ilovejs";
//  console.log(sen.slice(2,4));

//5. string concate

// let a1 = "12345";
// let a2 = "67890";
// console.log(a1.concat(a2));
// console.log(a1+a2);

//6.string replace

// let q= "queen";
// q= q.replace("q","r");
// console.log(q);

//7. character index

// let l=" ilovejs";
// let n =(l.charAt(4));
// console.log(n);

// practice 

// let fullName= prompt("enter your fullname");
// let userName = "@"+fullName+fullName.length;
// console.log(userName);