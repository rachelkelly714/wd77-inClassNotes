/*
* ********
! Functions

* ********

Types of Functions: 
 - Declaration
 - Expression
 - Anonymous
*/ 

//! Function Declaration

function declaration() {
    console.log('I am Function Declaration!');
}

declaration();

//are hoisted
//runs when call them (invoked)

//! Funciton Expression

let expression = function () {
    console.log('I am a Function Expression');

}

expression();
//NOT hoisted
// invoked using the variable name 