const http = require('http')

const server = http.createServer((req,res)=>{
if(req.url === '/home'){
    res.end('this is your home page')
}
if(req.url === '/about'){
    res.end('This is about your organisation')
}
    
    res.end(`<h1> oops !!</h1>
    <p>Url you are searching is not visible</p>`)
})

server.listen(5000)