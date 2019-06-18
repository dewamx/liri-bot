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

// OMDB retrieval
var getMovie = function (movieName) {
    // OMDB request
    request('http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&r=json', function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
    });
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
