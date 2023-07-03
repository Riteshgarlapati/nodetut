const express=require('express')
const app=express()
const path=require('path')

app.get('/',(req,res)=>{
    console.log('user hit home page');
    res.sendFile(path.resolve(__dirname,'./index.html'))
})


app.all('*',(req,res)=>{
    res.status(404).send('<h1>page not Found</h1>')
})

app.listen(5000,()=>{
    console.log('server is listening to port 5000...')
})