let cname="Dhurshitha";
let pass=true;
console.log(pass);
console.log(typeof(pass));//not typeOf it is typeof
let data=null;
console.log(typeof(data));
let val;
console.log(typeof(val));
let phoneno=BigInt(987654321012347984);
console.log(typeof(phoneno));
let age=19;
console.log("My name is",cname," My age is ",age);

//operators
let a=10;
let b=20;
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a%b);
console.log(2**3);

//assignment 
console.log(a+=b);
console.log(a);


//comparison
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a==b);
console.log(a!=b);
console.log('10'=== 10);
console.log('10'==10);

//logical
console.log(a>b&&a==b);
console.log(a>b || a==b);
console.log(!(a>b&&a==b));

//bitwise
console.log(a&b);
console.log(a|b);
console.log(a^b);
console.log(~a);
console.log(a<<1);
console.log(a>>1);
console.log((1+2)*3-1/2);
console.log(10+'5'); //output:105(only when using + it will concatenate otherwise it will work on normal operation in javascript)
console.log(10-'5'); //output:5(in java this will show an error)
console.log(10*'10'); //output:100
console.log(1==true); //output:true


//getting input form the user
// let fname=prompt("Enter your name");
// console.log("Your name is",fname);
let x=prompt("Enter the number");
let y=prompt("Enter the number2");
console.log("Output is", x+y); //here x will be the string and y will be te string when we try to do x+y (x=1,y=2) then answer will be 12

x=Number(x);
y=Number(y);
console.log("Output is:",x+y);

//conditional statements
let age_of_you=Number(prompt("Enter your age:"));
if(age_of_you<18)
{
    console.log("You are not eligible to vote.");
}
else
{
    console.log("You are eleigible to vote");
}

let marks=Number(prompt("Enter your Mark"));
if(marks>=90&&marks<=100)
{
    console.log("A grade");
}
else if(marks>=79&&marks<=89)
{
    console.log("B grade");
}
else
{
    console.log("C grade");
}


let color=prompt("Enter the color");
if(color=="Green")
{
    console.log("You can Go");
}
else if(color=="Red")
{
    console.log("You should stop");
}
else if(color=="Yellow")
{
    console.log("Be ready");
}
else
{
    console.log("Please enter a valid color");
}


//switch
let day=parseInt(prompt("Enter the day"));
switch(day)
{
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid input");
}

//loops
let n=parseInt(prompt("Enter the number"));
let i=1;
while(i<=n)
{
    console.log(i);
    i++;
}

// do{
//     console.log(i);
//     i++;
// }
// while(i<=n);

for(i=1;i<=n;i++)
{
    console.log(i);
}

let xint=parseInt(prompt("Enter the number to reverse"));
let rev=0;
while(xint>0)
{
    rev=(xint%10)+rev*10;
    xint=Math.floor(xint/10);
}
console.log(rev);

function check(number)
{
 if(number<=100&&number>=0) console.log("The input is valid");
}

check(100);
check(20);

let number2=Number(prompt("Enter the number to check"));
if(number2%3==0&&number2%5==0) console.log("Fizzbuzz");
else if(number2%3==0) console.log("fizz");
else if(number2%5==0) console.log("buzz");
else console.log("failed in all condition");

