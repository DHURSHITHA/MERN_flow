// let cname="Dhurshitha";
// let pass=true;
// console.log(pass);
// console.log(typeof(pass));//not typeOf it is typeof
// let data=null;
// console.log(typeof(data));
// let val;
// console.log(typeof(val));
// let phoneno=BigInt(987654321012347984);
// console.log(typeof(phoneno));
// let age=19;
// console.log("My name is",cname," My age is ",age);

// //operators
// let a=10;
// let b=20;
// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(a%b);
// console.log(2**3);

// //assignment 
// console.log(a+=b);
// console.log(a);


// //comparison
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a==b);
// console.log(a!=b);
// console.log('10'=== 10);
// console.log('10'==10);

// //logical
// console.log(a>b&&a==b);
// console.log(a>b || a==b);
// console.log(!(a>b&&a==b));

// //bitwise
// console.log(a&b);
// console.log(a|b);
// console.log(a^b);
// console.log(~a);
// console.log(a<<1);
// console.log(a>>1);
// console.log((1+2)*3-1/2);
// console.log(10+'5'); //output:105(only when using + it will concatenate otherwise it will work on normal operation in javascript)
// console.log(10-'5'); //output:5(in java this will show an error)
// console.log(10*'10'); //output:100
// console.log(1==true); //output:true


// //getting input form the user
// // let fname=prompt("Enter your name");
// // console.log("Your name is",fname);
// let x=prompt("Enter the number");
// let y=prompt("Enter the number2");
// console.log("Output is", x+y); //here x will be the string and y will be te string when we try to do x+y (x=1,y=2) then answer will be 12

// x=Number(x);
// y=Number(y);
// console.log("Output is:",x+y);

// //conditional statements
// let age_of_you=Number(prompt("Enter your age:"));
// if(age_of_you<18)
// {
//     console.log("You are not eligible to vote.");
// }
// else
// {
//     console.log("You are eleigible to vote");
// }

// let marks=Number(prompt("Enter your Mark"));
// if(marks>=90&&marks<=100)
// {
//     console.log("A grade");
// }
// else if(marks>=79&&marks<=89)
// {
//     console.log("B grade");
// }
// else
// {
//     console.log("C grade");
// }


// let color=prompt("Enter the color");
// if(color=="Green")
// {
//     console.log("You can Go");
// }
// else if(color=="Red")
// {
//     console.log("You should stop");
// }
// else if(color=="Yellow")
// {
//     console.log("Be ready");
// }
// else
// {
//     console.log("Please enter a valid color");
// }


// //switch
// let day=parseInt(prompt("Enter the day"));
// switch(day)
// {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid input");
// }

// //loops
// let n=parseInt(prompt("Enter the number"));
// let i=1;
// while(i<=n)
// {
//     console.log(i);
//     i++;
// }

// // do{
// //     console.log(i);
// //     i++;
// // }
// // while(i<=n);

// for(i=1;i<=n;i++)
// {
//     console.log(i);
// }

// let xint=parseInt(prompt("Enter the number to reverse"));
// let rev=0;
// while(xint>0)
// {
//     rev=(xint%10)+rev*10;
//     xint=Math.floor(xint/10);
// }
// console.log(rev);

// function check(number)
// {
//  if(number<=100&&number>=0) console.log("The input is valid");
// }

// check(100);
// check(20);

// let number2=Number(prompt("Enter the number to check"));
// if(number2%3==0&&number2%5==0) console.log("Fizzbuzz");
// else if(number2%3==0) console.log("fizz");
// else if(number2%5==0) console.log("buzz");
// else console.log("failed in all condition");

// //arrow function is nothiing but which is the function without the function name
// const arrow=(a,b,c)=>{
//     return a*b*c;
// }
// const arrows=(a,b,c)=>a*b*c //this will also work but only when there is a single line
// console.log(arrow(10,5,3));
// console.log(arrows(10,5,3));
// const arrows1=(a=2,b,c)=>a*b*c;//default values


// //callback function
// function greet(name,callback)//here callback can be any name
// {
//     console.log("Welcome", name);
//     callback(name);
// }
// function thanks(name)
// {
//     console.log("Thanks for visit",name);
// }
// greet("BIT",thanks);
// // greet is a function that takes a name and a callback function.
// // It first prints "Welcome BIT".
// // Then it calls the callback() function.
// // thanks is passed as the callback, so it runs after greet finishes its main work.
// // Output order:
// // Welcome BIT
// // Thanks for visit
// // 👉 This shows how callbacks let one function run another function after it.


// function greet(name, callback1, callback2) {
//     console.log("Welcome", name);
//     callback1(); // first callback
//     callback2(); // second callback
// }

// function thankss() {
//     console.log("Thanks for visiting!");
// }

// function offerHelp() {
//     console.log("Can I help you with something?");
// }

// // Call greet with multiple callbacks
// greet("BIT", thankss, offerHelp);


// //set timeout
// setTimeout(()=>{
//     console.log("Welcome")
// },5000) 

// setInterval(()=>console.log("Welcome"),2000);

// let count=1;
// let timer=setInterval(()=>{
//     console.log("Welcome");
//     count++;
//     if(count==5)
//     {
//         clearInterval(timer);
//     }
// },2000)

//arrays

let array=[1,2,3,"Arha",true,'a','b','c'];
console.log(array);
console.log(array[3]);
console.log(array.length);
console.log(array[array.length-1]);
array.push('d');
console.log(array);
console.log(array.pop());
console.log(array);
array.shift();//left rotation by 1 and remove 1 element which is the 1st element
console.log(array);
array.unshift("hello");//add element at first
console.log(array);
//for each
array.forEach((val)=>{
    console.log(val);
})
let arr1=[4,11,2,1];
console.log(arr1.sort());
console.log(arr1.reverse());
console.log(arr1.includes(5));
console.log(arr1.indexOf(2));
console.log(arr1.slice(1,3));//here 1 is inclusive 3 is exclusive
arr3=arr1.concat(array);
console.log(arr3);
newarray=[...arr3];//... this is teh spread opertor used to copy the array
console.log(newarray);
arr8=[1,2,3,4];
arr9=[5,6,7,8];
let arr10=[...arr8,...arr9];
console.log(arr10);

let ad=[1,2,3,4,5];
let ans=arr1.map((val)=>val*2);
console.log(ans);
let evenum=ad.filter((val)=>val%2==0);
console.log(evenum);
let totalsum=ad.reduce((acc,val)=>acc+val,0);
console.log(totalsum);

//Objects
User={
    username:"Dhurshitha",
    Age:20,
    city:"Erode",
    Login()//here we dont want to declare as function Login()
    {
        console.log("You are logged in", User.username);
    },
    Logout:function(){
        console.log("Logout");
    },
    User2:{
        username:"Arha",
        Age:"20"
    }
}
console.log(User);
console.log(User.username);
User.city="Coimbatore";
console.log(User);
User.Login();

//dom
function changeTitle()
{
    let h1=document.getElementById('h1');
    h1.innerHTML="thanks for visit"
    console.log(h1);
}
changeTitle();