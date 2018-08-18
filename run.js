const myBands = require('./bands');

 Object.entries(myBands.bands).forEach(([key, val]) => {
    console.log(key + ': ' + val);          // the name of the current key.  // the value of the current key.
});


//bonus 

if (process.argv[2])  {
    var genre = process.argv[2]
}

