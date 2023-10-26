const spin = require('spinnies')
const colors = require('colors')
const textAnimation = require('@kazesolo/text-animation');

const banner = require('./banner')
const { log_move } = require('../config')


// FUNCTION CONSOLE LOG FRIENDS \\
function Person(OWNER, BOT) {
  this.OWNER = OWNER;
  this.BOT = BOT;
}

var friend = {};

friend.Base = new Person("KazeDevID", "WhizBot");
friend.Friends = new Person("-", "-");
friend.Friends2 = new Person("-", "-");


function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

function Person(Owner, BotName) {
  this.Owner = Owner;
  this.BotName = BotName;
}
// -------[ END ]------- \\

// FUNCTION LOG GERAK
var spinner = { 
  "interval": 120,
  "frames": [
    "", 
    "M", 
    "Me",
    "Men",
    "Menu",
    "Menun",
    "Menung",
    "Menungg",
    "Menunggu ",
    "Menunggu P",
    "Menunggu Pes",
    "Menunggu Pesa",
    "Menunggu Pesan",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
    "Menunggu Pesan..",
    "Menunggu Pesan...",
    "Menunggu Pesan..",
    "Menunggu Pesan.",
        "Menunggu Pesan",
            "Menunggu Pesa",
                "Menunggu Pes",
                    "Menunggu Pe",
                        "Menunggu P",
                            "Menunggu",
                                "Menungg",
                                    "Menung",
                                        "Menun",
                                            "Menu", 
                                             "Men",
                                               "Me",
                                                 "M",
                                                   ""
  ]}
let globalSpinner;
var getGlobalSpinner = (disableSpins = false) => {
  if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
  return globalSpinner;
}
spins = getGlobalSpinner(false)
var forks = (id, text) => {
	spins.add(id, {text: text})
	}
// -------[ END ]------- \\

const renderLogs = () => {
	console.log(banner())
	console.table(friend);
	textAnimation.rainbow('Connecting bot, please wait...');
	forks('2',colors.bold.white(log_move)); 
}

module.exports = renderLogs
