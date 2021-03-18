/*
* ************
Objects

* *************


*/

// ex:
//let myself = {
    //key : value
  //  firstName: 'Jerome',
   // lastName: 'Flaherty',
  //  hairColor: 'pink',
  //  age: 22, 
  //  cool: true,
   // interests: ['games', 'fencing'],
   // friend: {
   //     firstName: 'Eric',
   //     lastName: 'Winebrenner'
  //  } ,
    //fullName: function(){
       // return this.firstName + this.lastName;
 //   }
//}

//property: a value on an object
//method: a function of an object 


//console.log(myself.interests); //interests is a property of myself
//console.log(myself.hairColor);
//console.log(myself.friend);
//console.log(myself.interest[1]);
//console.log(myself.fullName()); //fullName is a method of myself

let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                episode: 1,
                episodeName: "Pilot"
            },
            {
                episode: 2,
                episodeName: "Diversity Day"
            },
            {
                episode: 3,
                episodeName: "Health Care"
            },
            {
                episode: 4,
                episodeName: "The Alliance"
            },
            {
                episode: 5,
                episodeName: "Basketball"
            },
            ]
        }
    },
    season2: {},
    season3: {}
};
console.log(netflix.season1.seasonInfo.episodeInfo[4].episodeName);

/*
! JSON
-JSON stands for Javascript Object Notation
it is derived from the Javascript Object Notation syntax, JSON is text only
-Exists as a string
  - useful when fetchin data from a server
  - need to be converted to a native js object if we want to access the info

   JSON Data Example: 
   https://rickandmortyapi.com/api/character

   Paste the raw data into: https://jsonformatter.org

  */


  /*
* **************
! PROPERTIES
* **************

Objects are containers of properties. 
A property is an associations between key - value pair. A property's value that is a function is called a method

 * ************
 Objects Bracket Notation/Property Accessors
 * **************

 We can access the properties w/in our object using accessors like dot notation and bracket notation.

 Property Accessors: 
 -Dot notation
 - Bracket Notation

  */
//We can set/add properties to bojects using both bracket and square notation
  let user = {}; 
  console.log(user);

  user['name'] = 'Amit';
  user['age'] = 29; 
  user.coolMusic = true;
  console.log(user);

  //We can also taret specific keys we created

  console.log(user['name']);

  /*
  -All keys in objects are strings even though they are not wrapped in quotes when represented in the object itself. 

  */

  //We can see this by using the keys() method for our object

  //the .keys() returns an array of the keys in our object

  let keys = Object.keys(user);
  console.log(keys);
  console.log(typeof keys[0]);

  //Square brackets are good to use when we can't use .notation to dig through an object. Not common but something we are capable of doing if need be
  //A big reason to use square bracket notation is when spaces are in the key name of a property. 

  let spaceObj = {
      noSpaces: true,
      'Spaces Here': true, 
  }
//console.log(spacedObj.Spaces Here)    <------ Error no spaces allowed in property names
  console.log(spaceObj['Spaces Here']);