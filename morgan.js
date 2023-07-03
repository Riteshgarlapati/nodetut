const express=require('express')
const app=express()
const logger=require('./logger')
const authorize=require('./authorize')
const morgan=require('morgan')

//app.use([logger,authorize])

app.use(morgan('tiny'))

app.get('/',(req,res)=>{
    res.send('home')
})
app.get('/about', (req,res)=>{
    console.log(req.user);
    res.send('about')
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000...');
})