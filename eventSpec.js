const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const dotenv = require('dotenv');
const { strict } = require('assert');
const fPath = "./"
//one time declare files
const fileFunc = require(fPath + "fileFunc.js");

var botData = JSON.parse(fs.readFileSync("./main.json", "utf-8", function(e){
   console.log("error" + e.toString("utf-8"))
    
    
    
    
}))
console.log(`botdata = ${botData}`)
const colors = {
    Reset: "\x1b[0m",
BOLD: "\x1b[1m",
Faint: "\x1b[2m",
ITALIC: "\x1b[3m",
Underscore:  "\x1b[4m",
Blink: "\x1b[5m",
Reverse: "\x1b[7m",
Hidden: "\x1b[8m",

Black: "\x1b[30m",
//red
ERROR: "\x1b[31m",
//green
SYSTEM: "\x1b[32m",
//yellow
YELLOW: "\x1b[33m",
//blue
USERDATA: "\x1b[34m",
magenta: "\x1b[35m",
cyan: "\x1b[36m",
white: "\x1b[37m",

BgBlack: "\x1b[40m",
BgERROR: "\x1b[41m",
BgSYSTEM: "\x1b[42m",
BgWARN: "\x1b[43m",
BgUSERDATA: "\x1b[44m",
BgMagenta: "\x1b[45m",
BgCyan: "\x1b[46m",
BgWhite: "\x1b[47m"

};

   /* var uniquei657575 = 0;
    while(uniquei657575 < requiredF.length){
        var name = requiredF[uniquei657575];
        console.log(requiredF[uniquei657575])
        console.log("const " + requiredF[uniquei657575] + " = " + "require(fPath + requiredF[" + uniquei657575 + "]);")
        eval("const " + requiredF[uniquei657575] + " = " + "require(fPath + requiredF[" + uniquei657575 + "])")
        console.log()
        
        uniquei657575++;
    }
*/



dotenv.config();
//--------------------------------ONE TIME TOGGLE FOR BETA------------------------------------
var betaTesting = true;
//--------------------------------------------------------------------------------------------
var PREFIX;
var token;
if(betaTesting === false){
     PREFIX = "ev";
    token = process.env.TOKEN;
    console.log("alpha login")
} else {
   PREFIX = "beta";
   token = process.env.BETA_TOKEN;
   console.log("beta login")
}


client.on('ready', function(){
   
    console.log(colors.SYSTEM, "Logged in!")
    client.user.setActivity("Type " + PREFIX + " tutorial to learn how to set up an event!", { type: 'PLAYING' })
    
 
 
});








/* ----------------------END OF ADMIN ---------------------*/

    var message;

   var value;
        //stay alive

      client.on('message', function (message) {
        try{
        let serverPath = "../EVdata/server" + message.guild.id + ".json";
          try{
       
        var serverData = JSON.parse(fs.readFileSync(serverPath, "utf-8"))
          var serverPrefix = serverData.PREFIX;
        } catch (e){
           var serverPrefix = PREFIX; 
        }
    if(message.startsWith(serverPrefix)){
        var allParams = msg.split(" ");
            var command = allParams[1];
    
       // var commandArgs = msg.substr(msg.indexOf(" "), msg.lastIndexOf(" ")).trim();
       // var commandVals = msg.substr(msg.lastIndexOf(" ")).trim();
          var commandArgs = allParams[2];
         var taggedUser = message.mentions.users.first();
          
       
          var sender= message.author.id;
          exports.taggedUser = taggedUser;
          exports.sender = sender;
          //command specific values
          try{
         if(serverData.modrole == undefined){
             serverData.modrole = message.guild.roles.everyone.id;
         }} catch (e) {
            serverData= {
                modrole: message.guild.roles.everyone.id,
                lockout: "password",
            }
         }
          
        console.log(command)
        var dataExists = true;
        try {
            if (fs.existsSync(serverPath)) {
              //file exists
              
              
            }
          } catch(err) {
            dataExists = false;
            console.log(colors.SYSTEM + colors.BOLD, "Server file does not exist.")
          }
    }}
})
