module.exports = {
    name: "members",
    code: `
    $title[1;Member Stats (IN GUILD)]
    $addField[1;Total Members in Guild; $membersCount]
    $addField[1;Total Online Members; $membersCount[$guildID;online] ]
	$addField[1;Total Idle Members; $membersCount[$guildID;idle]]
    $addField[1;Total DND Members; $membersCount[$guildID;dnd]]
    $addField[1;Total Offline Members; $membersCount[$guildID;offline]]
    $addField[1;Total Human Members; $membersCount[$guildID;all;no]]
    $footer[1;Made by ZAPP DEVELOPMENT with 💖]
    $addbutton[1;Support Server;5;https://dsc.gg/zapp-dev;enabled;]
    $addbutton[2;Bot Invite;5;https://dsc.gg/xp-bot;enabled;]
    $color[1;BLUE]
	$reply
    `
};
