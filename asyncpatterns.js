const {readFile,writeFile}=require('fs').promises
// const util=require('util')
// const readFilePromise=util.promisify(readFile)
// const writeFilePromise=util.promisify(writeFile)

const start=async()=>{
    try{
        const first=await readFile('./test/test.txt','utf-8')
        const second=await readFile('./test/test2.txt','utf-8')
        await writeFile('./test/test1.txt','this is acsZvsd')
        console.log(first, second)
    }
    catch(error){
        console.log(error);
    }
}

start()

// const getText=(path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if (err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//     }
// )})
// }


//getText('./test/test.txt').then((result)=>console.log(result)).catch((err)=>console.log(err))