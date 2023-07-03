const {writeFileSync}=require('fs')
for (let i=0;i<100;i++){
    writeFileSync('./test/big.txt',`hello ${i}\n`,{flag:'a'})
}