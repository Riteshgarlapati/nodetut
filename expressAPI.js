const express=require('express')

const app=express()
const { products}=require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>hello express</h1> <a href="/api/products">Product</a> <a href="/api/v1/query">query</a> ')
})

app.get('/api/products',(req,res)=>{
    const newProducts=products.map((product)=>{
        const {id,name,image}=product;
        return {id,name,image}
    })
    res.send(newProducts)
})

app.get('/api/products/:productID',(req,res)=>{
    //console.log(req.params);
    const {productID}=req.params
    const singleProducts=products.find((product)=>product.id===Number(productID))
    if(!singleProducts){
        return res.status(404).send('<h1>Page not Found</h1>')
    }

    res.send(singleProducts)
})

app.get('/api/v1/query',(req,res)=>{
    const {search,limit}=req.query
    let sort=[...products]
    if (search){
        sort=sort.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if (limit){
        sort=sort.slice(0,Number(limit))
    }
    if (sort.length<1){
        return res.status(200).send('no products found')
    }
    
    return res.status(200).json(sort)
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000...');
})