console.log("JavaScript Function");
// Question 1:Create one function with zero parameter having a console statement;
function empty (){
    console.log("empty");
}
empty();

//Create one arrow function
const arrow = (A) => {
    console.log(A);
}
arrow("Arrow Function");

// "Print output: 
var x = 21;
var girl1 = function () {
    console.log(x);
    var x = 20;
};
girl1 ();//undefined

// "Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};


// "Print output

var x = 21;
// a();// reference error a is not defined
// b(); //reference error b is not defined
// console.log(a); commented to run other operations
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};

// Write a function that accepts parameter n and returns factorial of n

function factorial(n){
    let result = 1;
    if(n == 0 || n == 1){
        console.log(result);
    }
    else{
        for(let i = n; i >= 1; i-- ){
            result = result * i;
        }
        console.log(result);
    }
}
factorial(3);