/*
* **********

! Parameters

* ***********

-Parameters are values we haven't assigned yet.
-Passed through functions called as arguments.

ex: 

function nameFunc(parameter){
    return ...
}

nameFunc(argument);

parameters can have any kind of naming convention, but pay attention!, be intentional, use sturcture!
- naming should reflect desired data


*/

function coffeePot(filter) {
    console.log(`I brewed some ${filter}.`);
}

    coffeePot('dark roast'); // "dark roast is my argument/value being passed"

    coffeePot('medium roast');

    let kettle = coffeePot; // <-- function reference

    kettle();  // <-- returns an undefined where our value should be

    kettle('green tea');

    //! Multiple Parameters & Arguments 

    function dinner(main, side, drink) {
        console.log(`For dinner, I had ${main} and ${side}. To wash it down I had ${drink}.`)
    };

    dinner('steak', 'potatoes', 'coke');

    dinner('potatoes', 'coke', 'steak');
    
    // - arguments fall in line with parameters regarding their postion

    //! Return
// - Funciton can manipulate our data and return a new value. 

function calc(one, two, three) {
    let total = one + two + three; 
    let average = Math.round(total / 3); //Math.round() rounds the value to the nearest integer
    return average;
}

let avgWeight = calc(15,60,55);
console.log(`These three dogs weight an average of ${avgWeight} lbs.`);

