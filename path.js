const path=require('path')
console.log(path.sep)
const a=path.join('/test','/test1','abc.txt')
console.log(a)
const base=path.basename(a)

console.log(base)
const v=path.resolve(__dirname,'test','test.txt')
console.log(v)