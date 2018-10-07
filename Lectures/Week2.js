var foo = 'you forgot this was up here';

// I'm going to make a message for each of us!
    const raymond = 'Raymond';
    const dreu = 'Dreu';
    const jeff = 'Jeff';
    const jon = 'Jon';
    const leon = 'Leon';
    const teacher = 'teacher';
    const student = 'student';
    console.log(`${raymond} is the ${teacher}`);
    console.log(`${dreu} is the ${student}`);
    console.log(`${jeff} is the ${student}`);
    console.log(`${jon} is the ${student}`);
    console.log(`${leon} is the ${student}`);

    // We can make this a lot smaller, just do this!
    console.log('Raymond is the teacher');
    console.log('Dreu is the student');
    console.log('Jeff is the student');
    console.log('Jon is the student');
    console.log('Leon is the student');

//Better, but there's alot of repition and it's hard to see that they all have the same format...
//If you notice, we're repeating a single line of code with small changes in each string.
//It's a single block of code recieving different strings each time.
//We can't completely eliminate the repitions (which is kinda ok, since we ARE repeating ourselves), but we can write it in a way that shows clearly what we're repeating and what is unique about each repition, it'll also make it easier to type!
//It'd be great if we could give this block a NAME so that we can just refer to it later so we can reuse it, just like we do with containers!!

// Introducing... Functions!
// Three ways to make functions:

// OLD way
// let functionName = function (parameters) {
//    BLOCK;
// }

// 2 NEW 2015 ways to make functions
// let fuctionName = (parameters) => {
//     BLOCK;
// }

// let functionName = (parameters) => BLOCK

//containers can contain blocks, like above, so they con be used later, just like variables!
//to run the blocks inside the containers

let shorterPrintNameAndRole = (name, role) => console.log(`${name} is the ${role}`);
// HINT: if there's only one parameter, the parentheses are optional, if the block is only one statement, the brackets are optional. This ISN'T true if you use the function keyword!!

shorterPrintNameAndRole(raymond, teacher); // see how calling it, we're making the parameter name set to raymond and the role parameter set to teacher?
shorterPrintNameAndRole(dreu, student);
shorterPrintNameAndRole(jeff, student);
shorterPrintNameAndRole(jon, student);
shorterPrintNameAndRole(leon, student);

// HINT:
// Parameters: the variable declared in the function definition (name and role are parameters)
// Arguments: the data assigned to the parameters when the funtion is called (aka invoked) (the arguments raymond and teacher are assigned to the parameters name and role)
// Although this is the difference between arguments and parameters, People tend to use these words interchangibly so it's not a big deal (in other words, if you correct someone on the way they use parameters and arguments, you'll look more like a dick that a genius)

// if you think about it, the role doesn't vary as much as the names (the role is only teacher when the name is Raymond, every other time, it's student), we can simplify it even more!
let shortestPrintNameAndRole = name => console.log(`${name} is the ${name === 'Raymond' ? 'teacher' : 'student'}`);
// See? One parameter, so I didn't need the parentheses! One statement, don't need brackets!
// We just put a whole function on a single line!
// Remeber Ternary if statements?? Keep up!

shortestPrintNameAndRole(raymond); // Notice it takes less mental effort to understand what this is doing when it has fewer parameters! (It will when you're used to it, I mean)
shortestPrintNameAndRole(dreu);
shortestPrintNameAndRole(jeff);
shortestPrintNameAndRole(jon);
shortestPrintNameAndRole(leon);

// Functions can also return something, returning means the fuction can pass data to another statement or block of code
let productOfTwoNumbers = function (x, y) { //Using the OLD declaration here
    return x * y;
}
const product = productOfTwoNumbers(3, 5); // product will be 15

//Check this out! Functions are data too, meaning you can pass a function as an argument to a parameter!

let illCallWhaterverFunctionYouGiveMe = function (functionPassedToMe) {
    functionPassedToMe(); // calling (i.e invoking) the function that was passed to me
}

const sayHi = () => console.log('HI!');

illCallWhaterverFunctionYouGiveMe(sayHi); // Notice I'm invoking the outer function here but NOT the inner function. I want the outer function to run now with this argument, it will invoke the inner function on it's own
// MAJOR KEY: A function passed as an argument is called a CALLBACK inside the function. In other words, INSIDE illCallWhaterverFunctionYouGiveMe, sayHi is a callback because it's an argument passed to illCallWhaterverFunctionYouGiveMe. when NOT used as an argument. it's NOT called a callback.

// Two things!
    // 1. If you use the new syntax to make functions, AND have only one statement in the block AND use the simple syntax, you don't have to type return!
    // It's implicitly returned, meaning that javascript will assume that you want to return the value
    const three = () => 3; // returns 3
    console.log(three()); // prints 3 
    // HINT: notice the function three is NOT a callback here! the function itself is NOT passed to the log function! What the function returns is passed! Remeber javascript evaluates like math statements, meaning the inner paraenthese are resolved before outer statements (PEMDAS)
    // The function is called, returns 3, and then the 3 is passed to log, NOT the function! Tricky huh??!!?!

    productOfTwoNumbers = (x, y) => x * y; // does EXACTLY the same thing as the eariler one we made above, even returns the product

    //2. The return statement is meant to send the final result of the function, it sends the finished result of what the function is supposed to do.
    // So, just like break in a loop, a return statement ends a function EVERY TIME!! NO MATTER WHAT!!

    const unreachableCodeInside = () => {
        console.log('You will see me in the console!');
        return; // you can do this if you're not returning anything, but you don't have to
        console.log('You will NEVER see me in the console... NEVER!'); // this statement is unreachable, meaning it will never get run, no matter what!
    }

// Default Parameters
    let printParameter = param => console.log(param); // just returns what's assigned to it's argument
    printParameter(); // I didn't assign an argument to printParameter's parameter, it's parameter wasn't defined so it's... undefined

    //NEW in 2015, you can give parameters default assignments, to ensure they're never undefined
    printParameter = (param = 'Pass an argument idiot!!') => console.log(param); // for good syntax, I have to wrap the parameters in parentheses again :(
    printParameter();

// Scoping!
    //This can be complicated, so let's get into it!
    // Check this out!
    
    const sumOfFiveandThree = function () {
        let num = 5;
        let num2 = 3;
        return num + num2;
    }

    console.log(sumOfFiveandThree());
    console.log(num); // Will crash! num is undefined! num is out of scope!

// we made num, and it works, but not outside of the function. That's because containers declared as let or const are restricted to their SCOPE
// Scope means there is a limited area where the containers are defined
// Simply put, Javascript knows what num is inside the function, becasue you declared it there, but it doesn't know what num is outside the function, because it's outside of the function (aka the SCOPE of the function)

// NEXT check THIS out!

const x = 4;
const y = 5;

const add = function () {
    return x + y;
}

console.log(add()); //prints 9!

//WHAT! well think of the scope of x and y, it is declared outside of ANY function. all of the code we've written outside of any functions are in a main function that you can't see
//Data in the main function is in the main scope (commonly call the GLOBAL SCOPE)
//The function add is declared in the global scope, therefore it can access data in the global scope.
//Simply put, scoping goes one way (outwards) but not the other way (inwards)
//In other words think of a one-way mirrors surrounding all functions, the inner functions can see OUTSIDE of the mirror but outer functions can't see INSIDE inner functions 

//Hoisting

//Check this out... this actually works

icanCallThisFunctionBeforeIDeclareIt();

function icanCallThisFunctionBeforeIDeclareIt () {
    console.log('Can you believe this?!!??! WTF!?!?!!!?');
}

// This works because of hoisting, if you declare data with var, or with nothing at all (Javascript will assume you want a var if you don't use a keyword), Javascript will move the declaration up to the top of the file BEFORE you run it!
// This was used in old Javascript and it still works, so that older websites will still work, but it's highly NOT recommended now
// Because you can cause name collisions
var foo = 'woop';
console.log(foo); //this will print woop, but imagine that the first foo declaration was WAY up in this file, like at the top of this file... (it is) it's hard to remember if you've declared something isn't it?
// Maybe someone stored something important as foo that you've just written over!!
// You don't want to PERMENTLY delete data without knowing WHAT YOUR Deleting

// Hoisting is prevented (and you should ALWAYS prevent it) by using the new declarations (let or const)
sayHello() // Will crash (AS IT SHOULD!), because the function is defined after the invocation
const sayHello = function () {
  console.log('YYEEERR!!');
}

// Closures
// Great! now let's get into something that's REALLY confusing!!
// It took me a while to get this, but now I can explain it somewhat simply...

// Let's say you want to use some data in a local scope (aka home scope) in a different scope, you can do this with CLOSURES!
// I want to use outer in the global scope, I want to print it out in the global scope!

function outerFunction () {
    const outer = `I see the outer variable!`;

    return function innerFunction() {
        console.log(outer);
    }
}

outerFunction()(); // This will print "I see the outer variable!" Read this code VERY SLOWLY and you'll get it!

//HINT outerFunction() calls outerFunction, which returns the innerFunction, then the second () calls that function, get it? Confusing??
//HINT you can also achieve this by returning outer to the global scope, but if this function was used in a project you couldn't change, this would work.

// There's usually always a simpler way to use inner data than closures, but javascript job interviews will usually ask about them!

//IIFE Immediately-invoked function expressions
//As the name implies, these are functions that are immediatley called when they are defined
let greeting = 'Woop!'
(function () { // have to wrap them in parentheses
    let greeting = 'Hey!'
    console.log(greeting); // Prints Hey! and doesn't collide with the outer declaration, because this has it's own scope!
})();
// Let's say I'm making something that I want other developers to use in their projects, I'm going to make a bunch of container names and what not to make what I need to make
// Once I put it on the internet, ANY developer can download my work and use it! (GREAT!) but what if they want to use let and const and function names I'VE already used! that would make it hard for them to think of alternative names
// IIFEs let me wrap all of my work in a new scope, so there's no naming collisions!