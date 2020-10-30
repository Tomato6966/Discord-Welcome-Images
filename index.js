//define the libraries
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
//when its ready log it
client.on("ready", ()=>console.log("READY"));
//define welcome "package"
const welcome = require("./welcome");
welcome(client);
//start the bot
client.login(config.TOKEN);

//NOTE:
/*
THis is the config.json File

"TOKEN"           ... is your Bot token
"CHANNEL_WELCOME" ... is the Channel ID of your welcome channel
"ROLES_WELCOME"   ... are all of the Role IDs you wanna add to the user when he joins the server, it must be an array and can be unlimited!

{
  "TOKEN":  "",
  "CHANNEL_WELCOME": "",
  "ROLES_WELCOME": ["",""]
}

*/