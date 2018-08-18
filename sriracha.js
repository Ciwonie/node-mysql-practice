// console.log('sriracha. Goes great on... everything!')
// // Zeroth index is node's location
// // First index is location of file
// // Second index is beginning of array--the data we specify
// // console.log(process.argv);
// // process is like node's version of the window for front-end

// // Process.argv treated as strings--not ints. Must parseFloat()
// console.log('Equivalent: ' + parseFloat(process.argv[2] === process.argv[3]));
// console.log('Sum: ' + parseFloat(process.argv[2] + process.argv[3]));
// console.log('Subtract: ' + parseFloat(process.argv[2] - process.argv[3]));
// console.log('Multiply: ' + parseFloat(process.argv[2] * process.argv[3]));
// console.log('Divide: ' + parseFloat(process.argv[2] / process.argv[3]));
// console.log('Remainder: ' + parseFloat(process.argv[2] % process.argv[3]));
// console.log('Exponent: ' + parseFloat(process.argv[2] ^ process.argv[3]));

var a = parseFloat(process.argv[3]);
var b = parseFloat(process.argv[4]);


switch (process.argv[2]) {
    case "add":
        console.log(a + b);
        break;
    case "subtract":
        console.log(a - b);
        break;
    case "multiply":
        console.log(a * b);
        break;
    case "divide":
        console.log(a / b);
        break;
    case "remainder":
        console.log(a % b);
        break;
    case "exponent":
        console.log(Math.pow(a, b));
        break;
    case "algebra":
        console.log(4*a + 2);
        break;
    default:
        console.log("not valid calculation");


};