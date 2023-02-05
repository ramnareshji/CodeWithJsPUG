// Synchronous or blocking
// - line by line execution

// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire

const fs = require("fs");
fs.readFile("nk.txt", "utf-8", (err, data)=>{
    console.log(data);
});
console.log("This is a message will be published first and when file is readed ,files message will be shown later");
