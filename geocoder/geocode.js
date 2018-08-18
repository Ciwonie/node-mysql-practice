// easy version //
var geocoder = require('geocoder');

var city = process.argv[2];
var state = process.argv[3];
 
// Geocoding
geocoder.geocode(city + ', ' + state, function ( err, data ) {
  // do something with data
  if (err) {
    console.log(err);
  }

  console.log(JSON.stringify(data, null, 2));
  
});



// harder version //
var nodeArgs = process.argv.splice(2);

var address = '';

for (let i in nodeArgs) {
    address += " " + nodeArgs[i]
}

console.log('Searching for' + address);

geocoder.geocode(address, function ( err, data ) {
    // do something with data
    if (err) {
      console.log(err);
    }
  
    console.log(JSON.stringify(data, null, 2));
    
  });
