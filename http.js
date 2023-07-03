const http = require('http')
const server =http.createServer((req,res)=>{
    if (req.url==='/'){
        res.end('hello there')
    }
    else if (req.url==='/about'){
        res.end('about page')
    }
    else{
        res.end(`
        <h1>oops</h1> <p>xzca</p> <a href="/">home</a>
        `)        
    }
})
server.listen(2000)