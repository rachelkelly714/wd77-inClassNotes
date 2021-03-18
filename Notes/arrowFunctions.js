/*
* ***************
! Arrow Functions
* ***************

- also Fat Arrow Functions
- NOT declarations
- Do NOT get hoisted


-Two Types: 
- Concise Body: return is automatic
- block body: return is NOT automatic

*/ 

//! Concise Body
//                  = >

let speak = (name) => console.log(`The ${name} goes woof!`);
speak('dog'); //error: arrow functions cannot be hoisted

// ! w REturn

let firstName = 'Jerome';
let lastName = 'Flaherty';

let concatName = (first, last) => `${first} ${last}`;
console.log(concatName(firstName, lastName));


//! Block Body
//if you have only 1 param you do not need ()
//if you have no params you need an empty ()
// if you have more than one param you need an () with commas to separate items
// uses {} 

)

let speakAgain = name => {
    console.log(`The ${name}`);
    console.log('goes woof!');
    

}
speakAgain('dog');


