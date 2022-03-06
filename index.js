const aoijs = require('aoi.js');

 const bot = new aoijs.Bot({
   token: "TOKEN",
   prefix: 'x!',
fetchInvites: true,
intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"]
})

bot.status({
  text: "x!help - $serverCount servers",
  type: "PLAYING",
  time: 12
})

bot.status({
  text: "$allMembersCount members",
  type: "WATCHING",
  time: 12
})



bot.onMessage() //enables bot to see messages (required for executing Commands)
bot.onGuildJoin()
bot.onGuildLeave() 

const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./commands/")

bot.variables({
prefix: "x!",
    XP: "50",
    Bank: "500",
    Wallet: "500",
    WelcomeChannel: "",
WelcomeMessage: "Welcome {user.ping} To {server}!",
 WelcomeTitle:"Welcome {user.ping}"
})

bot.command({
  name: "ping", //command name
  code: `My Ping Is \`$ping ms\` ` //code to be executed when this command is called 
 });

bot.command({
name: "invite", 
code: `
$description[[Package](https://dsc.gg/xp-bot 'click')]` 
})

bot.joinCommand({ 
 channel:"$getServerVar[WelcomeChannel]", 
 code:`$title[1;$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[WelcomeTitle];{user};$username];{user.ping};<@$authorID>];{server};$serverName];{user.tag};$userTag[$authorID]]]
 $description[1;
 
 
 $replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[WelcomeMessage];{user};$username];{user.ping};<@$authorID>];{server};$serverName];{user.tag};$userTag[$authorID]]
 
 
 
 ]
 $color[1;RED]
 $footer[1;Now $serverName Has $membersCount Members!;$serverIcon]
 $addTimestamp[1]
 
 $thumbnail[1;$userAvatar[$authorID]]`}) 
bot.onJoin()
