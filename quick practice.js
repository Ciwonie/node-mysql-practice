var a = parseFloat(process.argv[2]);
var b = parseFloat(process.argv[3]);

if (a === b) {
    console.log(a + ' & ' + b + ' are equal!');
}
else {
    console.log("They're not equal!")
}

// easy way, run the test and log it to the console immeditely
console.log(process.argv[2] === process.argv[3]);

// bonus
console.log((process.argv[2] % 7 == 0) && (process.argv[3] % 7 == 0));

