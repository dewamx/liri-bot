require("dotenv").config('./*.env');
var keys = require("./keys.js");
var spotify = require('node-spotify-api');
var axios = require('axios');
var moment = require('moment');
var spotify = new spotify(keys.spotify);

// =================================================================================================================
App(process.argv[2], process.argv[3]);

// =================================================================================================================

function App(command, params) {
    switch (command) {
        case "spotify-this-song":
            getSpotify(params);
            break;
        case "movie-this":
            getMovie(params);
            break;
        case "concert-this":
            getConcert(params);
            break;   
        default:
            console.log("liri does not know that command, please try again.");
        
    }
}
// Spotify retrieval
function getSpotify(songName) {
    if (songName === ' ' || songName === undefined) {
        songName = "love"
    }

    spotify.search({ type: 'track', query: songName }, function (err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        };

        var songs = data.tracks.items;
        for (let i = 0; i < songs.length; i++) {

            console.log('number: ', i + 1, '/', songs.length);
            console.log('artist(s): ', songs[i].artists[0].name);
            console.log('song name: ', songs[i].name);
            console.log('preview song: ', songs[i].preview_url);
            console.log('album: ', songs[i].album.name);
            console.log('===========================================================');
        }
    });
}
// Bands retrieval
function getConcert(artistName) {
    // 
    axios.get("https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp").then(
  function(response) {
      var concerts = response.data;
      for (let i = 0; i < concerts.length; i++) {
    // Then we print out the imdbRating
    console.log("The name of concert venue is: " + concerts[i].venue.name);
    console.log("The location of venue is: " + concerts[i].venue.city);
    console.log("The date of the event is: " + concerts[i].datetime);
      }
  });
    // request('http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&r=json', function (error, response, body) {
    //     console.log('error:', error);
    //     console.log('statusCode:', response && response.statusCode);
    //     console.log('body:', body);
    // });
}

// OMDB retrieval
function getMovie(movieName) {
    var queryUrl= "https://www.omdbapi.com/?t="+movieName+"&y=&plot=short&apikey=trilogy"
    // OMDB request
    axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
  function(response) {
    // Then we print out the imdbRating
    console.log("The movie's title is: " + response.data.Title);
    console.log("The movie's release date is: " + response.data.imdbRating);
    console.log("The movie's rating is: " + response.data.imdbRating);
    console.log("The movie's rotten tomatoes rating is: " + response.data.Ratings[1].Value);
    console.log("The movie's country of origin: " + response.data.Country);
    console.log("The movie's language is: " + response.data.Language);
    console.log("The movie's plot is: " + response.data.Plot);
    console.log("The movie's actor(s) is: " + response.data.Actors);
  });
    // request('http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&r=json', function (error, response, body) {
    //     console.log('error:', error);
    //     console.log('statusCode:', response && response.statusCode);
    //     console.log('body:', body);
    // });
}

// takes in all of the command line arguments
var inputString = process.argv;
// captures the operator and gives command
var command = inputString[2];
// input being used for data-retrieval
var userInput = inputString[3];

if (command === "concert-this") {
    console.log();
} else if (command === "spotify-this-song") {
    console.log();
} else if (command === "movie-this") {
    console.log();
} else if (command === "do-what-it-says") {
    console.log();
}
