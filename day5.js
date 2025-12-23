//scopes global vs local
let x=20;
function test(){
    let x=20;
    console.log(x);
}
test();
console.log(x);


//functional scopes
let a = 20; // global variable


function outer() {
    let b = 30; // local to outer
    

    function inner() {
        let c = 40; // local to inner
        console.log(a, b, c); // prints 20 30 40
    }

    inner(); // call inner from outer
}

outer(); // call outer

//hosting problems
foo();
function foo(){
    console.log("hello puka");
}

//nested hoisting
function outer1() {
    var x = 10;            // assign before logging
    console.log(x);        // prints 10

    function inner1() {
        var y = 20;        // assign before logging
        console.log(y);    // prints 20
    }

    inner1(); 
    inner1();             // call inner function
}

outer1(); 
outer1();                 // call outer function









