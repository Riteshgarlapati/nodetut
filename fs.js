//sync
const {readFileSync,writeFileSync} = require("fs")

const a=readFileSync('./test/test.txt','utf8')
const b=readFileSync('./test/test2.txt','utf8')

writeFileSync('./test/result.txt',`the result text is : ${a} ,${b}`,{flag :'a'})

//async
//we use the nested read and write
const {readFile,writeFile} = require("fs")
readFile('./test/test.txt','utf8',(err,result)=>{
    if (err){
        console.log(err)
        return;
    }
    console.log(result)
})
