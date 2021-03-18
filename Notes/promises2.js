// fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
// .then(res => res.json())
// .then(json => console.log(json))

// async function slowResult() {
//     await fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
//     .then(res => res.json())
//     .then(json => console.log(json))

// }

// slowResult();

async function slowResult() {
    await fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
    .then(res => res.json())
    .then(json => {json.lolProperty = 'This is a random property!'; return json;})

}

slowResult();