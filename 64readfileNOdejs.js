const fs = require("fs");
let text = fs.readFileSync("64example.txt", "utf-8");
text = text.replace("browser", "Rohan");

console.log("The content of the file is")
console.log(text);

console.log("Creating a new file...")
fs.writeFileSync("64naresh.txt", text);
 
//  Here i am practising

