const fs=require('fs')
const stream=fs.createReadStream('./test/big.txt','utf8',{
    highwatermark:9000
})
stream.on('data',(result)=>{
    console.log(result);
})
//'data' is a method in read stream