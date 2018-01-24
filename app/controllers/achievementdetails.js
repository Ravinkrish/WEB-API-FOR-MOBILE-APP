var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    AchievementDetailsModel = mongoose.model('Achievement');

    module.exports = function (app){
        app.use('/', router);
    };

router.post('/AchievementDetails', function(req, res, next) {
console.log(req.body);

    var newAchievementDetailsModel = new AchievementDetailsModel(req.body);
    AchievementDetailsModel.count(function(err,offercount){
            if(offercount!=0)
            {
      newAchievementDetailsModel.productOfferId=offercount+1;
    newAchievementDetailsModel.save(function(err,result) {
        if (err){
            console.log('Error in Saving user: '+err);
        }
        res.send(result);
    });

}
else if(offercount==0)
{
newAchievementDetailsModel.productOfferId=1;
    newAchievementDetailsModel.save(function(err,result) {
        if (err){
            console.log('Error in Saving user: '+err);
        }
        res.send(result);
    });

}
});
});


router.get('/AllAchievementDetails', function(req, res, next) {
AchievementDetailsModel.find({},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    }).skip(parseInt(req.params.start)).limit(parseInt(req.params.range))

})

router.post('/editAchievementBymongoId', function(req, res, next) {
console.log("******", req.body)
console.log(req.body._id);
AchievementDetailsModel.findOneAndUpdate({"_id":req.body._id},req.body,{upsert: true, new: true},
function(err,result)
    {
        if(err){
            console.log(err.stack)
        }else{
            res.send(result)
        }

    });

})


router.delete('/AchievementBymongoId/:AchievementMongoid',function(req, res, next){
AchievementDetailsModel.remove({"_id":req.params.AchievementMongoid},function(err,result)
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


router.post('/updateAchievementImages/:mongoid/:filename',function(req,res,next){
AchievementDetailsModel.findOneAndUpdate({_id:req.params.mongoid},
{ $push:{AchievementMoreImages:req.body.fileObj}},function(err,result){
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



router.get('/offerkey',function(req,res,next){
AchievementDetailsModel.findOne(function(err,result){
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
 AchievementDetailsModel.find({"productOfferId":req.params.offerid},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })

})

router.get('/offerByName/:offername', function(req, res, next) {
 AchievementDetailsModel.find({"productOfferName":req.params.offername},function(err,result){
        if(err){
        console.log(err.stack)
            res.send(err)

        }else{
        console.log(result);
            res.send(result)
        }

    })

})




router.get('/AchievementBymongoId/:AchievementMongoId',function(req,res,next){

AchievementDetailsModel.findOne({"_id":req.params.AchievementMongoId},function(err,result){
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
AchievementDetailsModel.find({},{productOfferId:1,productOfferName:1},function(err,result){
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





















