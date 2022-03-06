module.exports = ({
    name: "purge",
    code: `
    $clear[100]
    $title[1;MESSAGE CLEAR IN PROCESS]
    $addField[1;Cleared;100 Messages]
    $footer[1;Made by ZAPP DEVELOPMENT ™]
    $color[1;BLUE]`
    
});
