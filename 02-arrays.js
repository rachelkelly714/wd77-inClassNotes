/*******
 Arrays
 *******
WE use arrays to store multiple values within an array






 */

//let array = ['value1', 'value2', 'value3'];
// This is how we target specific values in an array
//console.log(array[0]);
// if we don't know the length of the array, we can use the .length method to find it out
//console.log(array.length);
//We can create array objects by using the Array() constructor
/*
let test = new Array();
console.log(test);

let test2 = new Array(3);
console.log(test2);

console.log(test2.length);

let array = ['value1', 'value2', 'value3'];

for(let i = 0; i < array.length; i++){
console.log(array[i]);

}

array.forEach(value) => console.log(value))

array.forEach(value) => {
    console.log(value)
})

array.forEach(function(value)){
    console.log(value);
}
*/

//.length method returns the length of the given array
//let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
//console.log(shoppingList.length);
// shoppingList.push("salt");
//console.log(shoppingList);

//Array.pop will remove the last element from an array and return it
//let shoppingLIst = ["celery", "limes", "lemons", "grenadine", "oranges"];
//shoppingLIst.pop();
//let grenadine = shoppingList.pop();
//console.log(shoppingList);
//console.log(grenadine);

//Array.unshift will add a new element at the beginning of the array

//let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
//shoppingList.unshift("salt");
//console.log(shoppingList);

//Array.shift will remove the element at the beginning of the array
//let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
//shoppingList.shift();
// console.log(shoppingList);

//Array.map transforms the elements in the original array by 
//calling the given function once for each element in the array
//let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
//console.log(shoppingList.map(value) => value.toUpperCase());


//Array.filter creates a new array with only the elements that pass the test ina given function
//let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
//console.log(shoppingList.filter(value => value.startsWith("l")))

//Array.find returns the first element in the array that passes a test given as a function
//let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
//console.log(shoppingList.find(value => value.startsWith("l")));

//Array.reduce executes a given function for each value of the array and returns a single value
//let costs = [2.00, 3.00, 4.00, 13.00];
//console.log(costs.reduce((total, cost) => total + cost));

//let costs = [1, 1, 1, 1, 1, 1];
//console.log(costs.reduce((accumulator, currentValue) => {
 //   console.log(accumulator, currentValue);
 //   return accumulator + currentValue;

//}, 10))

//Array.includes determines whether an array has a specific element, prints true or false
//let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];

//console.log(shoppingList.includes("limes"));
//console.log(shoppingList.includes("salt"));

//Array.indexOf searches our array for a specific element and return the first index of it
//It will return -1 if it not found

//let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
//console.log(shoppingList.indexOf(("lemons")));
//console.log(shoppingList.indexOf(("salt")));

//Array.findIndex returns the index of the first element in an array that passes the test in agiven function
//REturns -1 when an element is not found 
//let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
//console.log(shoppingList.findIndex(value => value.startsWith("g")));

//Array.every checks all elements in an array pass a test given as a function. If there is 1 element that returns as false
//the function returns false and does not continue to check the rest of the elements

//let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
//console.log(shoppingList.every(value => value.length > 1));
//console.log(shoppingList.every(value => value.startsWith("c")));

//Array.concat merges two or more arrays and returns a new array 
//let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
//let anotherLIst = ["salt", "mint", "olives"];
//console.log(shoppingList.concat(anotherLIst));

//Array.slice will select a part of an array and return a new array. We can select the elements by providing a start and end
//which will be indicated by the index, everything in between, it will not include the last argument
//let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
//console.log(shoppingList.slice(1, 3));

//array.splice add/removes elements in an array and returns the removed elements. First arguemnt takes in an integer that specifies at what index to add/remove elements. 
//Second argument takes in the number of items to be removed.
//Optional third argument takes in new elements to be added to the array

//let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
//shoppingList.splice(2, 1);
//shoppingList.splice(2, 2);
//console.log(shoppingList);

//shoppingList.splice(2, 1, "cherries");
//console.log(shoppingList);

//Array.sort will sort the items in an array. The sort order can be alphabetic, numeric, or ascending or descending 
//By default, sort() orders the values as strings in alphabetical and ascending order 
//It can take in a compare function which indicates if you want it to be ascending or descending

//let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
//console.log(shoppingList.sort());



//let nums = [25, -9, 15, 1000];

//descending 

//console.log(nums.sort((a, b) => b - a)); 

//ascending order

//console.log(nums.sort((a, b) => a - b)); 

//Array.reverse will reverse the order or the elements in an array
//let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
//console.log(shoppingList.reverse());

//Array.toString will convert an array to a string
//let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
//console.log(shoppingList.toString());

//Array.join converts the elements of an array into a string. 
//Can accept an optional parameter, "separator" , which indicates how the element will be separated. 
//The default separator is a comma

//let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
//console.log(shoppingList.join("! and "));

//Spread operator: indicated by three dots, "..." 
//It expands the contents of the array and takes it out of the array structure
//let shoppingList = ["celery", "limes", "lemons", "grenadine", "oranges"];
//console.log(...shoppingList);

