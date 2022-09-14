const path = require('path')

const filepath = path.join('/content', 'vinod', 'new.text')
console.log(filepath);

const base = path.basename(filepath)
console.log(base);

const pat = path.resolve(__dirname,'content','subcontent','test.txt')
console.log(pat);