const clientBuilder = require('./config');
const clientBuilder = require('./config');

let clientArray = []

const configsArray = [{

login: "thesoulstar",
password: "Roma2994411q1",
sharedSecret: "U+FiiETtd+EDcHNzlwwUFZ1ijUw=",
games: [
381210 // Dead by Daylight
]
},
{
login: "login2",
password: "pass2",
sharedSecret: "token2",
games: [
570, // Dota 2
730, // Counter-Strike Global Offensive
4000, // Gmod
602960 // Barotrauma
]
}]


console.log('Bot number: ' + configsArray.length);

for (let config of configsArray) {

let client = clientBuilder.execute(config);
client.doLogin();
clientArray.push(client);
}
console.log('Running ' + configsArray.length + ' bots.');