const authorize=(req,res,next)=>{
    const {user}=req.query
    if(user==='ritesh'){
        req.user={name:'ritesh',id:'34'}
        next()
    }
    else{
        res.status(404).send('unauthorized')
    }
}

module.exports=authorize