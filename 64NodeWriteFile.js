const fs = require('fs');
const content = 'Some content!';
fs.writeFile('nk.txt', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
console.log("File with name nk.txt is created");
