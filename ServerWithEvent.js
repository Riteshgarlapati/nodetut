const http=require('http')
const server=http.createServer()
server.on('request',(req,res)=>{
    res.end('hello there')
})
//on is function of event emitter
//here the req and res both are must
server.listen(5000)