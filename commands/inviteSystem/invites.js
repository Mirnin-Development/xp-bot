module.exports ={
name: "invites",
code: `
$title[$username's invite info]
$thumbnail[$authorAvatar]
$description[
Total: $sum[$userInfo[real];$userInfo[fake]]
Real: $userInfo[real]
Fake: $userInfo[fake]
---------------------
Invited By: $userTag[$userInfo[inviter]] (\`$userInfo[code]\`)]
`
}
