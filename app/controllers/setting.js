var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    SettingDetailsModel = mongoose.model('setting');

    module.exports = function (app){
        app.use('/', router);
    };

router.post('/setLogo', function(req, res, next) {
var newSettingDetailsModel=new SettingDetailsModel(req.body);
    newSettingDetailsModel.save(function(err,result){
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


router.post('/SettingDetails', function(req, res, next) {
//console.log(req.body);

    var newSettingDetailsModel = new SettingDetailsModel(req.body);


    newSettingDetailsModel.save(function(err,result) {
        if (err){
            console.log('Error in Saving user: '+err);
        }
        res.send(result);
    });
});


router.delete('/deleteSetting' ,function(req, res, next){
    SettingDetailsModel.remove({},function(err,result){
        if(err){
            console.log(err.stack)
        }
        else{
            res.send(result)
        }
    });
});




//router.post('/SettingDetails', function(req, res, next) {
//    SettingDetailsModel.findOneAndUpdate({},req.body,{upsert: true, new:true},function(err,result){
//            if(err){
//                console.log(err.stack)
//            }else{
//                res.send(result)
//            }
//
//        });
//    /*console.log(req.body);
//
//    var newCandidateDetailsModel = new CandidateDetailsModel(req.body);
//    CandidateDetailsModel.count(function(err,offercount){
//            if(offercount!=0)
//            {
//      newCandidateDetailsModel.productOfferId=offercount+1;
//    newCandidateDetailsModel.save(function(err,result) {
//        if (err){
//            console.log('Error in Saving user: '+err);
//        }
//        res.send(result);
//    });
//
//}
//else if(offercount==0)
//{
//newCandidateDetailsModel.productOfferId=1;
//    newCandidateDetailsModel.save(function(err,result) {
//        if (err){
//            console.log('Error in Saving user: '+err);
//        }
//        res.send(result);
//    });
//
//}
//});*/
//});


router.get('/AllSettingDetails', function(req, res, next) {
 SettingDetailsModel.findOne({},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }
    });
})

router.post('/updateSettingBymongoId', function(req, res, next) {
console.log(req.body);
console.log(req.body._id);
 SettingDetailsModel.findOneAndUpdate({"_id":req.body._id},req.body,{upsert: true, new:true},function(err,result){
        if(err){
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })

})


router.get('/SettingDetailsByMongoId/:mongoId',function(req,res,next){
SettingDetailsModel.find({"_id":req.params.mongoId},function(err,result){
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

router.post('/editSettingBymongoId', function(req, res, next) {
console.log(req.body);
console.log(req.body._id);
 SettingDetailsModel.findOneAndUpdate({"_id":req.body._id},req.body,{upsert: true, new: true},function(err,result){
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
 SettingDetailsModel.findOneAndUpdate({"_id":req.params.mongoid},{ $set:{survival_info:req.body}},function(err,result){
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
 SettingDetailsModel.findAndModify({},{ $set:{survival_info:req.body}},function(err,result){
        if(err){
            console.log(err.stack)
        }else{
            res.send(result)
        }


    })

})


router.delete('/deleteSetting' ,function(req, res, next){
    SettingDetailsModel.remove({},function(err,result){
        if(err){
            console.log(err.stack)
        }
        else{
            res.send(result)
        }
    });
});

router.delete('/SettingBymongoId/:SettingMongoId',function(req, res, next){
    SettingDetailsModel.remove({"_id":req.params.CandidateMongoId},function(err,result)
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
SettingDetailsModel.findOne(function(err,result){
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
 SettingDetailsModel.find({"productOfferId":req.params.offerid},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })

})

router.get('/offerByName/:offername', function(req, res, next) {
 SettingDetailsModel.find({"productOfferName":req.params.offername},function(err,result){
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

SettingDetailsModel.find({"_id":req.params.offerMongoId},function(err,result){
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


SettingDetailsModel.find({},{productOfferId:1,productOfferName:1},function(err,result){
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
SettingDetailsModel.find({"_id":req.params.mongoId},function(err,result){
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
SettingDetailsModel.findOneAndUpdate({"_id":req.body._id},req.body,{upsert: true, new:true},function(err,result){
        if(err){
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })

})





















