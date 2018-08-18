var inquirer = require("inquirer");
var fs = require('fs');
var request = require('request');
var tvmaze = require("tvmaze-node");



inquirer
    .prompt([
        {
            type: "list",
            message: "Welcome to TV Maze, what would you like to search for?",
            choices: ["TV Shows", "Actors & Actresses"],
            name: "tvMaze"
        },
    ])
    .then(function (inquirerResponse) {
        if (inquirerResponse.tvMaze === 'TV Shows') {
            console.log("\nYou chose: " + inquirerResponse.tvMaze);

            inquirer
                .prompt([
                    {
                        type: "name",
                        message: "Which show is on your mind?",
                        name: "showName"
                    },
                ])
                .then(function (showChoice) {
                    tvmaze.search(showChoice.showName, function(error, response) {
                  
                            console.log('\nName: ' + JSON.parse(response)[0].show.name);
                            console.log('\nGenre: ' + JSON.parse(response)[0].show.genres);
                            console.log('\nAverage Rating: ' + JSON.parse(response)[0].show.rating.average);
                            console.log('\nNetwork Name: ' + JSON.parse(response)[0].show.network.name);
                            console.log('\nSummary: ' + JSON.parse(response)[0].show.summary);

                            var showData = [
                                '\nTV SHOW',
                                '\nName: '+ JSON.parse(response)[0].show.name,                        
                                '\nGenres: ' + JSON.parse(response)[0].show.genres,
                                '\nRating: '+ JSON.parse(response)[0].show.rating.average,                     
                                '\nNetwork: '+ JSON.parse(response)[0].show.network.name,
                                '\nSummary: '+ JSON.parse(response)[0].show.summary + '\r\n'
                            ]
                            
                            fs.appendFile("log.txt", showData, function(err) {

                                // If the code experiences any errors it will log the error to the console.
                                if (err) {
                                  return console.log(err);
                                }
                              
                                // Otherwise, it will print: "movies.txt was updated!"
                                console.log("log.txt was updated!");
                              
                              });
                    })
                });
        }

        else if (inquirerResponse.tvMaze === 'Actors & Actresses') {
            console.log("\nYou chose: " + inquirerResponse.tvMaze);

            inquirer
                .prompt([
                    {
                        type: "name",
                        message: "Who are you thinking of?",
                        name: "actName"
                    },
                ])
                .then(function (actChoice) {
                    console.log('\nActor or Actress: '+ actChoice.actName)

                    tvmaze.peopleSearch(actChoice.actName, function(error, response) {
                            console.log('\nName: '+ JSON.parse(response)[0].person.name);                        
                            console.log('\nDate of Birth(YYYY-MM-DD): '+ JSON.parse(response)[0].person.birthday); 
                            console.log('\nGender: '+ JSON.parse(response)[0].person.gender);                        
                            console.log('\nImage: '+ JSON.parse(response)[0].person.image.original);  

                            var actData = [
                                '\nActor or Actress',
                                '\nName: '+ JSON.parse(response)[0].person.name,                        
                                '\nDate of Birth(YYYY-MM-DD): ' + JSON.parse(response)[0].person.birthday,
                                '\nGender: '+ JSON.parse(response)[0].person.gender,                     
                                '\nImage: '+ JSON.parse(response)[0].person.image.original + '\r\n'
                            ]
                            
                            fs.appendFile("log.txt", actData, function(err) {

                                // If the code experiences any errors it will log the error to the console.
                                if (err) {
                                  return console.log(err);
                                }
                              
                                // Otherwise, it will print: "movies.txt was updated!"
                                console.log("log.txt was updated!");
                              
                              });
                    });
                });
        }
    })