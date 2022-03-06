module.exports = [{
    channel: "$randomChannelID",
    type: "guildJoin",
    code: `$title[1;I joined a New server!]
    $addField[1;Guild Name#COLON#;$guild;yes]
    $addField[1;Member Count#COLON#;$memberscount;yes]
    $addField[1;Guild ID#COLON#;$guildID;yes]
    $addField[1;Guild Owner#COLON#;$userTag[$ownerID];yes]
    $addField[1;Boosts#COLON#;$serverBoostCount;yes]
    $addField[1;Server Invite;$createServerInvite;yes]
    $color[1;GREEN]
    $thumbnail[1;$servericon]
    $dm[$botOwnerID]
    $wait[1ms]`
    },{
    channel: "$randomChannelID",
    type: "guildLeave",
    code: `
    $title[1;I was Removed from server]
    $addField[1;Guild Name#COLON#;$guild;yes]
    $addField[1;Member Count#COLON#;$memberscount;yes]
    $addField[1;Guild ID#COLON#;$guildID;yes]
    $addField[1;Guild Owner#COLON#;$userTag[$ownerID];yes]
    $addField[1;Boosts#COLON#;$serverBoostCount;yes]
    $color[1;RED]
    $thumbnail[1;$servericon]
    $dm[$botOwnerID]`
    }] 
