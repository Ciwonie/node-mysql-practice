// var numberArray = [];

// console.log(numberArray);

// for (var i = 2; i < process.argv.length; i++) {
//     numberArray.push(process.argv[i]);
//     console.log(numberArray);
// }

// function sorting() {

// };

// grabs everything but the first two command line arguments from Node
var nodeArg = process.argv.splice(2);

var numArray = [];

for (let i in nodeArg) {
    numArray.push(parseFloat(nodeArg[i]));
}

console.log(numArray);
console.log(numArray.sort(sortNums));

function sortNums(a, b) {
    return (a - b);
}