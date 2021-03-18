/*
What does hoisting mean and what does it do? Think of it like opening a book with mulitiple chapters. One of the first pages in the book might an index or table of contents with a list of the various chapters you might find. We can look at this page to get an idea of what information we can expect to find in the book later.

Hoisting does this in a similar way. There are two phases that happen when we run our code: 

-Creation phase: any variable (var, let, const) and function in our code are stored in memory. 
-Execution phase: Values are assigned to the variables and functions that are in the memory during the create phase

What's on the left of the = sign is stored to memory. What's on the right is assigned during the execute phase. 
    (create)   (execute)  
let variable = 'value'

When JS runs it first reads top to bottom and stores the variables, kind of like putting the chapter names in the index. After that it reads top to bottom and in sequential order to fill out the value of each chapter.


*/
let num = 12

console.log(num);

sayHi()

function sayHi(){
    console.log('Hello')
    let hi = 'Hola';
    console.log(hi);
}

let varFunc = function (){
    console.log('Testing. Testing');
}
varFunc();