//var env = require('./.env');
//var spootify = '0e6e37b2418d434fbb7f6f1f20cf2eab';
console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
