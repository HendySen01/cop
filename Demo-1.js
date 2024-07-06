
/*const cricle = {
    radius : 1,
    location : {
        x: 1,
        y: 1
    },
    draw :function() {
        console.log('draw');
    }
};
cricle.draw(); */

// Factory Function
/* function createCricle(radius) {
    return {
        radius ,
        draw: function() {
            console.log('draw');
        }
    };
}

const cricle = */

//document.getElementById(`myH1`).textContent = `Hello`;
//document.getElementById(`myP`).textContent = `sweetHeart`

//variable = A container that stores a value.
//          Behaves as if it were the value it contains.
let age = 20;
let price = 10.88;
let gpa = 2.1;
let firstName = 'Bro';

console.log(typeof price);
console.log(`You are ${age} years old !`);
console.log(`The water is $${price} `);
console.log(`Your  gpa is : ${gpa}`);

document.getElementById(`P1`).textContent = (`The "${firstName}" is your firstName`);
document.getElementById(`P2`).textContent = (`The underwear is $${price}`);
document.getElementById(`P3`).textContent = (`your gpa is: ${gpa}`);