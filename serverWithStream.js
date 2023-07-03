const http=require('http')
const fs=require('fs')
http.createServer(function(req,res){
    // const t=fs.readFileSync('./test/big.txt','utf-8')
    // res.end(t)
    const q=fs.createReadStream('./test/big.txt','utf-8')
    q.on('open',()=>{
        q.pipe(res)
        //pipe converts the read stream into write stream
     })
}).listen(5000)