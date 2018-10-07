//Syntax
//All statements should end with a semicolon, but it's optional (we'll use semicolons in this class, but to get used to it now then have to get used to it later)
//Just like in math, all parentheses and brackets should be balances (i.e. should have open brackets end with closing brackets)
//When making data, you can't name things with spaces, there are several solutions to this
//The javascript community (i.e. people that use javascript) mostly agree on camel case typing, where the first letter is lower cased and the subsequent words are capitalized (likeThis)
//ALternatives are snake_case, CAPITAL_CASE

//Comments
//I'm putting double slashes in front of all of my typing here becasue these are all comments. Comments are things in the code you DON'T want the computer to read.

/*Tip: You can
make multi-line
comments like this*/

//Keywords
//You can name your data anything, but there are some words that Javascript needs to do what it does. These words can only be used the way Javascript intends them to be used
//break, case, catch, continue, debugger, default, delete, do, else, finally, for, function, if, in, instanceof, new, return, switch, this, throw, try, typeof, var, void, while, and with.

//Resevered words
//Words that may become keywords in the future, so are restricted
// class, const, enum, export, extends, import, and super, implements, interface, let, package, private, protected, public, static, and yield.

//Statements
//A single command that you want javascript to do
console.log("Hello, World!"); //prints things to the console

//Containers
//A place to store data
//There are three ways to store data in Javascript:

//You should always store data using one of these keywords, if you don't JavaScript will assume it is var

//Var: Short for variable Oldest way to store data, not recommended because it's vulnerable to hoisting (you don't know enough to understand hoisting now, will explain hoisting later)
var varName = 'Raymond';

//Let: New (2015) alternative to var, good because it can't be hoisted
let letName = 'Raymond';

//Const: Short for Constant New (2015) just like let, but the value CAN'T be changed during runtime (i.e. while the program is running) consts CAN however be destroyed and recreated during runtime
const constName = 'Raymond';

//Primitive Data Types
    //Strings
        /*Often used for words and characters
        Has indices
        Is immutable*/
        //the three containers I made above all point to strings
        //There are three ways to declare(make) a string
        const doubleQuotes = "oldway, fine to use";
        const singleQuotes = 'old way, I prefer because it puts less quotes on the screen';
        const stringTemplate = `New way, called a string template, you can easily add data inside of these strings, there's an example of that below`;

        //Most people only use string templates when they want to put data into their string
        //If you need to use a ' or a " inside the string, just escape it
        const escapeExample = 'What\'s good!'; //the slash before the ' is an escape, it tells the computer "this isn't the end of the string! it's apart of the string!"

        //You can also access parts of a string using the indecies, indecies start with zero... MAJOR KEY: most things in computer science start with one, not zero (In the MATLAB language things start with 1, because MATLAB is stupid)
        console.log(`The third letter in cat is: ${'cat'[2]}`); //notice the third character is at the 2 index, this is because the first character is at the 0 index, get it?
        console.log(`The third, fourth, and fifth letters in Raymond are: ${varName.slice(2, 5)}`); // the slice method doesn't include the second index you give it, so it gets the characters at indecies 2, 3 and 4
        
        //You can also concatenate(add) data to single and double quoted strings too, but now that string templates are around, it's not used much anymore...
        console.log("Doubly quoted string with made by " + constName + "!");
        // Some other useful methods for strings: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#String_instances

    //Numbers
        //You know what these are...
        const sumOfFourAndFive = 4 + 5;
        console.log(`4 + 5 = ${sumOfFourAndFive}`);

        //Modulo
            //Gives you the remainder of a division statement
            console.log(5 % 3) //prints 2, 3 fits into 5 once with 2 remaining
            const evenNumber = 2;
            console.log(evenNumber % 2 === 0 ? 'Even!' : 'Odd!'); //Great way to check for even or odd numbers

        //Use the Math object for common math functions
        //The result of a math problem that is invalid is NaN
        console.log(`The square root of nine is: ${Math.sqrt(9)}`)
        console.log(`The square root of Blah is: ${Math.sqrt('Blah')}`)
        //As you would expect, NaN is useless and if you see it, you messed up

    //Boolean
        //Represents binary data (stuff that's either true or false)
        const areWeLearningJava = false
        const isThereAProgrammingLanguageCalledBrainFuck = true // seriously, look it up lol!

        //Conditional Operators
        //Used to make conditional statements
        // < > less than, greater than
        // || OR
        // ! NOT
        // && AND
        // == === EQUAL and STRICT EQUAL
        
        console.log(`Is 4 less than 5?: ${4 < 5}`) //will print true
        console.log(`Are we learning Java? ${areWeLearningJava}`);
        console.log(`Are we learning Java and is there a programming language called BrainFuck? ${areWeLearningJava && isThereAProgrammingLanguageCalledBrainFuck}`);
        console.log(`Are we not learning Java?: ${!areWeLearningJava}`);
        console.log(`Are at least one of these true?: Are we learning Java or is there a language named BrainFuck?: ${areWeLearningJava || isThereAProgrammingLanguageCalledBrainFuck}`) // Will return true if ONE of the values is truthy OR if both of the values are truthy.
        console.log(`Does 4 equal 4?: ${4 === 4}`) //will print true
        console.log(`Does 4 equal 4?: ${4 == 4}`)//will print true
        console.log(`Does 4 equal 4?: ${4 == '4'}`)//will print true, '4' is a string but it's == so it looks at the value and not the type
        console.log(`Does 4 equal 4?: ${4 === '4'}`)//will print false '4' is a string that is four, but the strict equal checks that the values AND the types match, therefore it will be false
        //HINT: Most javascript developers (like me, and everyone I've ever worked with) just ALWAYS use STRICT EQUAL and never EQUAL, so you don't have to always check for the extra =

        //Ternary Operator
        //Shorthand for if statement (if statements are explained below)
        //Syntax: LOGICAL_STATEMENT ? WILL_RUN_IF_STATEMENT_IS_TRUE : WILL_RUN_IF_STATEMENT_IS_FALSE
        console.log(`Are we learning Java?: ${areWeLearningJava ? 'Yes' : 'No'}`); //will print No, because areWeLearningJava is false, if it was true, it would print yes

        //Falesy stuff
        //Most data evaluates to true when put into logical statements, BUT there are some exceptions
        console.log(`Is 4 truthy? ${4 ? true : false}`) // will print false, because 4 is truthy
        console.log(`Is 0 truthy? ${0 ? true : false}`) // will print false, 0 is falsey
        console.log(`Is true truthy? ${true ? true : false}`) // if you can't get this one right away, you're not paying full attention to this...

        //Falsey values: false, 0, null, undefined, NaN, and '' (empty strings)

    //Null
        //Null is used when you intentionally want a container to have no value, it means nothing
        const fsIsGive = null
        const numberOfFsIGive = 0 //Notice it's best to use a number here because of the name, this is a good example of when to use 0 instead of null

        //WATCH OUT: running typeof null will tell you null is an object, it's not, this is a bug in JavaScript that's been around since it was created, but it will never be fixed because it could break older javascript software
        console.log(`Is null an object?: ${typeof null}`)//will print object, even though it isn't

    //Undefined
        //Undefined should only appear when the computer tries to find something you haven't defined (aka declared) meaning that you messed up, meaning that it should NEVER appear in complete software
        console.log(iNeverDefinedThisContainerSoItIsUndefined) //will crash the code, becasue you're asking JavaScript to access this data that doesn't exist!

//Blocks
    //Statements that are grouped together, usually because they share some sort of context, written as statements wrapped in brackets

    //IF Blocks (People call them if statements, you'll sound weird if you call them if blocks, but they are blocks)
        //takes a logical statement, if the statement is true it will execute the statements in the block, if not, it will not
        if (numberOfFsIGive > 0) { console.log('Woop!') } // the statement in the if will always run, but if the statement evaluates to false, the statements in the block will not

        if (2) {
            console.log('If statement!');
            console.log('Yeah!');
        } //2 is truthy so this will run, blocks are usually written with each statement on it's own line BTW

    //ELSE BLOCKS
        //ALWAYS comes after an if block. If the logical statement for the if block is false, the else statement will run, if it is true, it will not run
        const num = 1;
        if(num > 3) {
            console.log('Greater than 3!');
        } else {
            console.log('Less than 3!');
        } //Notice the is no scenario where both of these blocks will run

    //IF ELSE BLOCK
        //ALWAYS comes after an if block. ONLY runs it's block when it's if statement is true AND ALL of the statements before it was false
        const number = 3;
        if(num > 3) {
            console.log('Greater than 3!');
        } else if (num < 3) {
            console.log('Less than 3!');
        } else {
            console.log('Equals 3!');
        } //Notice no matter what, only one of these blocks will run

    //SWITCH BLOCK
        //Like if else statements, but different syntax
        //I personally don't like switch statements, cuz the logic is kind of funny... See, it only starts running when the case is true and it will only stop on the break statements;
        //The default case will always run UNLESS there is a truthy case above it AND one of those truthy cases has a break statement.
        var fruit = 'Papayas';
        switch (fruit) {
            case 'Oranges':
                console.log('Oranges are $0.59 a pound.');
                break;
            case 'Mangoes': // theres nothing in this block, so if the switch was 'Mangoes' it would continue down to Papayas and print 'Mangoes and papayas are $2.79 a pound.' 
            case 'Papayas':
                console.log('Mangoes and papayas are $2.79 a pound.');
                // expected output: "Mangoes and papayas are $2.79 a pound."
                break;
            default:
                console.log('Sorry, we are out of ' + fruit + '.');
        }

    //FOR BLOCK
        //Used when you want to repeat some statements, and you know how many times you want to repeat them
        // Syntax:
        /*
        for (declare iterator; the logical statement that will stop the loop; how the iterator will change after each iteration) {
            BLOCK;
        }
        */
        const repitions = 5;
        for (let iteration = 0; iteration < repitions + 1; iteration = iteration + 1) {
            console.log(`Hey! I'm iteration ${iteration + 1}!`);
            //break;
            //continue;
        } // HINT you can use break to stop a loop early, or continue to skip an iteration

    //WHILE LOOP
        //Used when you want to repeat a command, and you don't know how many times you want to repeat it
        // Syntax: while (logical statement that will stop the block from running if it is false) { BLOCK; }
        const bigAssNumber = Number.MAX_SAFE_INTEGER; // Here I'm using JavaScript's Number constructor (The thing Javascript uses to make all numbers) and getting the biggest number Javascript can make.
        //Pretend you had no way of figuring out how big bigAssNumber was...
        //if we wanted to iterate until this number hits zero
        while(bigAssNumber > 0) {
            //console.log(bigAssNumber) //if you uncomment this, it will print all of the numbers from 9007199254740991 to 0... I dare you... do it!
            bigAssNumber = bigAssNumber - 1;
        }
        //Psst...Down here... Check this out... remember that 0 is falsey... So this would work too
        while(bigAssNumber) {
            bigAssNumber = bigAssNumber - 1;
        }
        //When bigAssNumber equals 0 the logical statement will be false and the loop will stop!

    //DO WHILE LOOP
        //Same as while, but the loop checks if it needs to run again AFTER running the block, so, NO MATTER WHAT, the block will always run AT LEAST ONCE!
        do {
            bigAssNumber = bigAssNumber - 1;
        } while(bigAssNumber); // looks weird right, but, as you can see, the conditional statement is under the block, so it runs the block then checks the conditional, then repeats if necessary


// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz”
// instead of the number and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.
