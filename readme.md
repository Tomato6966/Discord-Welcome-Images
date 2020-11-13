# Discord-Welcome-Images

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Tomato6966/)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/Tomato6966/Ask-Me-Anything)
[![Support Server](https://img.shields.io/discord/591914197219016707.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.gg/fS6qBSm)

An easy to setup and easy to use Welcome System Bot for Discord.js with the package `canvas`

## Installation | How to use the Bot

 **1.** Install [node.js v12](https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode) or higher

 **2.** Download this repo and unzip it    |    or git clone it
 
 **3.** Install all of the packages with **`npm install`**     |  the packages are   **`npm install node.js discord.js canvas`**
 
 **3.1** Fill in everything in config.json
 
 **4.** start the bot with **`node index.js`**

### Usage - index.js

```javascript
const Discord = require("discord.js");         //load the Discord.js Library
const client = new Discord.Client();           //make a new Client
const config = require("./config.json");       //load in all of the config files
client.on("ready", ()=>console.log("READY"));  //log when the bot gets ready
const welcome = require("./welcome");          //load the transcript.js file
welcome(client);                               //call the transcript file with the client, the COMMAND, and the maximum of messages to fetch 
client.login(config.TOKEN);                    //start the bot with the bot token
```

### Usage - config.json
- "TOKEN"           ... is your Bot token
- "CHANNEL_WELCOME" ... is the Channel ID of your welcome channel
- "ROLES_WELCOME"   ... are all of the Role IDs you wanna add to the user when he joins the server, it must be an array and can be unlimited!

```json
{
  "TOKEN":  "",
  "CHANNEL_WELCOME": "",
  "ROLES_WELCOME": ["",""]
}
```

#### **NOTE:**

*You can edit the Welcome image, but make sure it is in the same layout or else it will mess up the placing, if you know how to code with canvas you can fix this if not i suggest you to not change the layout, and dont rename the image file*

*If you are having errors/problems with starting delete the package.json file and do, before you install the packages `npm init`*



## SUPPORT ME

You can always Support me by inviting one of my **own Discord Bots**

[![Musicium Music Bot](https://cdn.discordapp.com/attachments/742446682381221938/770055673965707264/test1.png)](dc.musicium.eu)
[![Milrato Muslti Bot](https://cdn.discordapp.com/attachments/742446682381221938/770056826724679680/test1.png)](https://bit.ly/Milrato)

[| fork my repository  |](https://github.com/user/repository/fork)
[watch this repo  |](https://github.com/user/repository/subscription)
[create issue |](https://github.com/user/repository/issues/new)

*Both bots are still in Development, and will always be in development, this means always uptodate and always online and always improving!*
