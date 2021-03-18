/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
*/

let coffee = {
   grindType: 'arabica',
   ozs: 30,
   isGood: true, 


}
console.log(typeof coffee.grindType)
console.log(typeof coffee.ozs)


/* SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/

//switch(typeof coffee.isGood){
  //  case 'grindType':
  //      console.log('grindType');
  //      break;
  //      case 'ozs':
  //          console.log('ozs');
  //          break;
         //   default: console.log('What are you');
//
//}

let value = typeof coffee.ozs;

if(value === 'string') {
    console.log(`This value is a string`);
} else if (value === 'number'){
    console.log(`This value is a number`);
}else if (value === 'boolean') {
console.log(`This value is a boolean`);
} else if (value === 'object') {
    console.log(`This value is an object`);
} else {
    console.log('What are you?')
}
