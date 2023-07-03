const eventemit=require('events')
const newevent=new eventemit
newevent.on('response',()=>{
    console.log('response got');
})
newevent.on('response',()=>{
    console.log('new response got');
})
newevent.on('skdn',()=>{
    console.log('resskdnponse got');
})
newevent.emit('skdn')
newevent.emit('response')