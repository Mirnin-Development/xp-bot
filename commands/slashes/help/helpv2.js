module.exports = {
    name: "helpv2",
    code: `
$addField[1;input;$message]
$ddField[1;output;$get[finaltext]]

$let[finaltext; $djseval[
let a. = "$message"
const props = a.match(/{([^}]+)}/g).filter(x => x.startsWith("{emoji:"));
      const options = props.map((x) => x.replace("{emoji:", "").replace("}", ""));
let i = 0;
while(i < props.length) {
a = a.replace(props[i],client.emojis.cache.find(y => y.name.toLowerCase() === options[i].toLowerCase()) )
i++;
}
a;yes]]
    `
}
