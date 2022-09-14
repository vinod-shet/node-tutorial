const {readFileSync, writeFileSync, readFile} = require('fs')
 
const first = readFileSync('./content/first.txt','utf8')
// const second = readFileSync('./subcontent/second.txt','utf8')

console.log(first);

writeFileSync(
    './content/addedtext.txt',
    `here is the result : ${first}`,
    {flag: 'a'}
)


//Async
readFile('./content/first.txt','utf8',( err, result ) =>{
if(err){
    console.log(err);
    return
}
const first = result

readFile('./content/second.txt','utf8',(err, result) => {
    if(err){
        console.log(err);
        return
    }
    const second = result
})

})
