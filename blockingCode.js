const http=require('http')
const server=http.createServer((req,res)=>{
    if (req.url==='/'){
        res.end('home')
    }
    else if (req.url==='/about'){
        for (let i=0;i<100;i++){
            for (let j=0;j<100;j++){
                console.log(`${i} ${j}`)
            }
        }
        res.end('about page')
    }
    else{
        res.end(`
        <h1>oops</h1> <p>xzca</p> <a href="/">home</a>
        `)  
    }
})
server.listen(5000,()=>{
    console.log("server in 5000....");
})