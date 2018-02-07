var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    CandidateDetailsModel = mongoose.model('election');

    module.exports = function (app){
        app.use('/', router);
    };

router.post('/CandidateDetails', function(req, res, next) {
    console.log('jf fjf fjfjf');
    console.log(req.body);
    CandidateDetailsModel.findOneAndUpdate({},req.body,{upsert: true, new:true},function(err,result){
            if(err){
                console.log(err.stack)
            }else{
                res.send(result)
            }

        });
    /*console.log(req.body);

    var newCandidateDetailsModel = new CandidateDetailsModel(req.body);
    CandidateDetailsModel.count(function(err,offercount){
            if(offercount!=0)
            {
      newCandidateDetailsModel.productOfferId=offercount+1;
    newCandidateDetailsModel.save(function(err,result) {
        if (err){
            console.log('Error in Saving user: '+err);
        }
        res.send(result);
    });

}
else if(offercount==0)
{
newCandidateDetailsModel.productOfferId=1;
    newCandidateDetailsModel.save(function(err,result) {
        if (err){
            console.log('Error in Saving user: '+err);
        }
        res.send(result);
    });

}
});*/
});


router.get('/AllCandidateDetails', function(req, res, next) {
 CandidateDetailsModel.findOne({},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }
    });
})

router.post('/updateCandidateBymongoId', function(req, res, next) {
console.log(req.body);
console.log(req.body._id);
 CandidateDetailsModel.findOneAndUpdate({"_id":req.body._id},req.body,{upsert: true, new:true},function(err,result){
        if(err){
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })

})


router.get('/candidateDetailsByMongoId/:mongoId',function(req,res,next){
CandidateDetailsModel.find({"_id":req.params.mongoId},function(err,result){
                    if(err)
                        {
                         console.log(err.stack)
                        }
                     else
                      {
                         console.log(result);
                         res.send(result);

                        }


                       })

})

router.post('/editCandidateBymongoId', function(req, res, next) {
console.log(req.body);
console.log(req.body._id);
 CandidateDetailsModel.findOneAndUpdate({"_id":req.body._id},req.body,{upsert: true, new: true},function(err,result){
        if(err){
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })

})

router.post('/updateSurveyData/:mongoid', function(req, res, next) {

//{},
//    sort: {$natural: -1}
//console.log(req.body);
//console.log(req.body._id);
 CandidateDetailsModel.findOneAndUpdate({"_id":req.params.mongoid},{ $set:{survival_info:req.body}},function(err,result){
        if(err){
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })

})

router.post('/updateSurveyDatas', function(req, res, next) {

//{},
//    sort: {$natural: -1}
//console.log(req.body);
//console.log(req.body._id);
 CandidateDetailsModel.findAndModify({},{ $set:{survival_info:req.body}},function(err,result){
        if(err){
            console.log(err.stack)
        }else{
            res.send(result)
        }


    })

})


router.delete('/deleteCandidate' ,function(req, res, next){
    CandidateDetailsModel.remove({},function(err,result){
        if(err){
            console.log(err.stack)
        }
        else{
            res.send(result)
        }
    });
});

router.delete('/CandidateBymongoId/:CandidateMongoId',function(req, res, next){
    CandidateDetailsModel.remove({"_id":req.params.CandidateMongoId},function(err,result)
{
if(err)
{
 console.log(err.stack)
}
else
{
 res.send(result)
}

});
});


router.get('/offerkey',function(req,res,next){
CandidateDetailsModel.findOne(function(err,result){
                                                            if(err)
                                                                  {
                                                                  console.log(err.stack)
                                                                }
                                                                  else
                                                                 {
                                                                 console.log(result);
                                                                 res.send(result);

                                                                 }


                                                               })

})



router.get('/offerByid/:offerid', function(req, res, next) {
 CandidateDetailsModel.find({"productOfferId":req.params.offerid},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })

})

router.get('/offerByName/:offername', function(req, res, next) {
 CandidateDetailsModel.find({"productOfferName":req.params.offername},function(err,result){
        if(err){
        console.log(err.stack)
            res.send(err)

        }else{
        console.log(result);
            res.send(result)
        }

    })

})




router.get('/offerByMongoId/:offerMongoId',function(req,res,next){

CandidateDetailsModel.find({"_id":req.params.offerMongoId},function(err,result){
                    if(err)
                        {
                         console.log(err.stack)
                        }
                     else
                      {
                         console.log(result);
                         res.send(result);

                        }


                       })

})




router.get('/getAllOfferIdAndName',function(req,res,next){


CandidateDetailsModel.find({},{productOfferId:1,productOfferName:1},function(err,result){
                    if(err)
                        {
                         console.log(err.stack)
                        }
                     else
                      {
                         console.log(result);
                         res.send(result);

                        }



          })

})



router.get('/SurveyDetailsByMongoId/:mongoId',function(req,res,next){
CandidateDetailsModel.find({"_id":req.params.mongoId},function(err,result){
                    if(err)
                        {
                         console.log(err.stack)
                        }
                     else
                      {
                         console.log(result);
                         res.send(result);

                        }


                       })

})


router.post('/updateSurveyBymongoId', function(req, res, next) {
console.log(req.body);
console.log(req.body._id);
 CandidateDetailsModel.findOneAndUpdate({"_id":req.body._id},req.body,{upsert: true, new:true},function(err,result){
        if(err){
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })

})





















