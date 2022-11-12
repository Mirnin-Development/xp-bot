 const aoijs = require("aoi.js")

const bot = new Aoijs.bot({
    sharding: true,
    shardAmount: 2,
    token: "DISCORD BOT TOKEN",
    prefix: "x!",
    fetchInvites: true,
    intents: "all",
 database: {
    db: require("dbdjs.db"),
    type: "dbdjs.db",
    path: "./database/",
    tables: ["main"]
  }
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

//new slash commands (v0.0.2)
bot.interactionCommand({
name: "ping", 
prototype : 'slash',
code: `$interactionReply[;{newEmbed:{title:Pong!}{description:🏓 Pong! $pingms}{field:Shard ID:$shardID:yes}{color:RED}}
$botTyping]`
})

bot.interactionCommand({
name: "help", 
prototype : 'slash',
code: `$interactionReply[;{newEmbed:{title:Help Menu}{description:The bots help menu}{field:**Owner**:ownerhelp}{field:**Fun**:rip}{field:**Setup**:setup, setwelcomechannel, setwelcomemsg, ticketpanel, captcharole, register}{field:**Admin**:ban, purge, slowmode}{field:**General**:avatar, invite}{field:**Core**:ping, help, stats, setprefix, resetprefix}{color:BLUE}}
$botTyping]`
})

bot.interactionCommand({
name: "invite", 
prototype : 'slash',
code: `$interactionReply[;{newEmbed:{title:Bot Invite}{description:Recommended: [Click here]($getBotInvite)}{color:BLUE}}
$botTyping
]`
})


bot.onMessage(); //enables bot to see messages (required for executing Commands)
bot.onGuildJoin(); //enables bot to do tasks when a user joins a guild (required for welcome/invite system)
bot.onGuildLeave(); //enables bot to do tasks when a user leaves a guild (required for welcome/invite system)
bot.onInteractionCreate(); //enables bot to do slash commands ex: /ping
bot.onJoin(); //enables welcome system

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

//Bot invire command if your not self hosting (v0.0.l)
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
 $thumbnail[1;$userAvatar[$authorID]]`
}) 


//External Variables (v0.0.2)
bot.variables(require(`./variables/variables.js`))

//External commands
const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./commands/")
