module.exports = {
    name: "botstats",
    code: `
    $title[1;Bot Status Menu ($username[$clientID])]
    $thumbnail[1;$userAvatar[$clientID]]
    $addField[1;Uptime;$uptime]
    $addField[1;Commands; $commandsCount]
	$addField[1;Variables; $variablesCount]
    $addField[1;Servers;$serverCount]
    $addField[1;Aoi.js Version;5.0.0]
    $addField[1;Developer;$userTag[$botOwnerID]]
    $footer[1;Made by ZAPP DEVELOPMENT with 💖]
    $addbutton[1;Support Server;5;https://dsc.gg/zapp-dev;enabled;]
    $color[1;BLUE]
    $reply
    `
}
