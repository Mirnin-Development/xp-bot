module.exports = {
name: "setwelcomemsg",
 description: "Welcome channel Message",
 category: "Welcome System",
 aliases: ["wcm","swm"],
 code: `
 $onlyPerms[manageserver;You need manage server permission!]
$onlyIf[$message!=;**:x:None message provided**]
$title[1;Welcome Message Set!]
$description[1;New Welcome Message:
$message]
$footer[1;Set By $username!]
$addTimestamp[1]
$setServerVar[WelcomeMessage;$message]
 `
 }
