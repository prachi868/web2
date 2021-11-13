//fs->file system

const fs=require("fs");
console.log(fs);

//utf-8 -> format for plain text
//for documentation of fs go to google type fs nodejs
let f1KaData=fs.readFileSync("./f1.txt","utf8");
console.log(f1KaData);
//if you dont want to write utf-8 then write console.log(f1KaData+" ");

fs.writeFileSync("./index.txt","hello i love coding");
//fs.writeFileSync("../activity/activity.js","hiiiii");
