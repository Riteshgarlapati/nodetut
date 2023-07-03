const os=require('os')
const user=os.userInfo()
console.log(user)
console.log(`the uptime is ${os.uptime}`)
const cos={
    name:os.type(),
    release:os.release(),
    total:os.totalmem(),
    free:os.freemem(),
}
console.log(cos)