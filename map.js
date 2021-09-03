// Learning how use map in javascript
// First map
let userID = [
    {
        name: 'Luis',
        age: 16,
        country: 'Colombia'
    },    
    {
        name: 'Kalos',
        age: 17,
        country: 'Peru'
    },
    {
        name: 'Juan',
        age: 21,
        country: 'Argentina'
    }
];
function userGreeting (arr) {
    arr.map( (user) => {
        console.log(`Welcome ${user.name}!`)
    })
};
userGreeting(userID);


// Second map
let numbers = [1, 2, 3, 4, 5];
let numbersDouble = numbers.map( (n) => {
    return console.log(`Double of ${n}: ${(n * 2)}`)
});
let numbersRoot = numbers.map( function(n) {
    return console.log(`Root of ${n}: ${Math.sqrt(n)}`);
});