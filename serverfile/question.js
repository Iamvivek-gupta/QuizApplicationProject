router = exp.Router();

router.get("/getQuestions",function(req,res){
    connect.Questions.find().toArray((err,result)=>{
        //console.log(result.option1)
        //var Options =  [result.option1,result.option2,result.option3,result.option4]
        // result.Options = Options
        if(err)
        console.log(err)
        else{
        console.log(result)
        res.send(result)
    }
    })
})



module.exports = router;