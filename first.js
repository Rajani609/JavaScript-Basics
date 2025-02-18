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

let num= prompt("enter a number");
if(num%5==0){
    console.log("number is multiple of 5");
}
else{
    console.log("number is not multiple of 5");
}

let score= 87;
if(score>=80 && score<=100){
    console.log("grade A");

}
else if(score>=70 && score<=89){
    console.log("grade B");

}
else if(score>=60 && score<=79){
    console.log("grade C");

}
else if(score>=50 && score<=69){
    console.log("grade D");

}
else if(score>=40 && score<=59){
    console.log("grade E");

}
else if(score>=0 && score<=49){
    console.log("grade f");

}
else{
    console.log(" fail");
}



 



