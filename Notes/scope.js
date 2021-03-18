/*
Scope is the hiearchey of variables in our code. We call them 
- Global Scope or the Parent Scope
- Local Scope or Child Scope
*/

let global = 'Earth'

function scopeExample(){
    let local = 'Indianapolis';
    let inner = 'It has many places to visit';
    console.log(local);
    console.log(`${local} is a humble city on ${global}`);
    if(true){
        let inner = 'What a large city';
        console.log(inner);
    }
    console.log(inner);
}

scopeExample();
//not defined, blocked out by scope
// console.log(local);
//console.log(local);