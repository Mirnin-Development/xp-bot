 const aoijs = require("aoi.js")

const bot = new Aoijs.bot({
    sharding: true,
    shardAmount: 2,
    token: "DISCORD BOT TOKEN",
    prefix: "x!",
    fetchInvites: true,
    intents: ["GUILDS", "GUILD_MESSAGES"]
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
  code: `$title[1;🏓 Pong!]
  $description[1;My Ping is **$ping ms**]
  $footer[1;🔹 Shard # - $shardID]
  $color[1;RED]`
 });

bot.command({
name: "invite", 
code: `
$description[1;[Invite](https://mirnindev.cf/xpbot 'click')]` 
})

bot.joinCommand({ 
 channel:"$getServerVar[WelcomeChannel]", 
 code:`$title[1;$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[WelcomeTitle];{user};$username];{user.ping};<@$authorID>];{server};$serverName];{user.tag};$userTag[$authorID]]]
 $description[1;$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[WelcomeMessage];{user};$username];{user.ping};<@$authorID>];{server};$serverName];{user.tag};$userTag[$authorID]]]
 $color[1;RED]
 $footer[1;Now $serverName Has $membersCount Members!;$serverIcon]
 $addTimestamp[1]
 
 $thumbnail[1;$userAvatar[$authorID]]`}) 
bot.onJoin()
