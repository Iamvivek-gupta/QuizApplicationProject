router = exp.Router();

router.post("/insertParticipents", (req,res)=>{
    
    connect.participents.save(req.body,(err,result)=>{
        if(err)
        console.log(err)
        else{
        console.log(result)
        res.send(result)
    }
    })
})






module.exports = router;