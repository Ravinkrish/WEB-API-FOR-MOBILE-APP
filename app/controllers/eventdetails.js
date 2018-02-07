var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    EventDetailsModel = mongoose.model('event');

    module.exports = function (app){
        app.use('/', router);
    };

router.post('/EventDetails', function(req, res, next) {
console.log(req.body);

    var newEventDetailsModel = new EventDetailsModel(req.body);
    EventDetailsModel.count(function(err,offercount){
            if(offercount!=0)
            {
      newEventDetailsModel.productOfferId=offercount+1;
    newEventDetailsModel.save(function(err,result) {
        if (err){
            console.log('Error in Saving user: '+err);
        }
        res.send(result);
    });

}
else if(offercount==0)
{
newEventDetailsModel.productOfferId=1;
    newEventDetailsModel.save(function(err,result) {
        if (err){
            console.log('Error in Saving user: '+err);
        }
        res.send(result);
    });

}
});
});



router.get('/AllEventDetails', function(req, res, next) {
EventDetailsModel.find({},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    }).skip(parseInt(req.params.start)).limit(parseInt(req.params.range))

})

router.post('/editEventBymongoId', function(req, res, next) {
console.log("******", req.body)
console.log(req.body._id);
EventDetailsModel.findOneAndUpdate({"_id":req.body._id},req.body,{upsert: true, new: true},
function(err,result)
    {
        if(err){
            console.log(err.stack)
        }else{
            res.send(result)
        }

    });

})


router.delete('/eventBymongoId/:eventMongoid',function(req, res, next){
EventDetailsModel.remove({"_id":req.params.eventMongoid},function(err,result)
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


router.post('/updateEventImages/:mongoid/:filename',function(req,res){
console.log('**********************');
console.log(req.params);
console.log(req.body);
EventDetailsModel.findOneAndUpdate({_id:req.params.mongoid},
{ $push:{EventMoreImages:req.body.fileObj}},function(err,result){
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
EventDetailsModel.findOne(function(err,result){
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
 EventDetailsModel.find({"productOfferId":req.params.offerid},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })

})

router.get('/offerByName/:offername', function(req, res, next) {
 EventDetailsModel.find({"productOfferName":req.params.offername},function(err,result){
        if(err){
        console.log(err.stack)
            res.send(err)

        }else{
        console.log(result);
            res.send(result)
        }

    })

})




router.get('/eventBymongoId/:eventMongoId',function(req,res,next){

EventDetailsModel.findOne({"_id":req.params.eventMongoId},function(err,result){
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


EventDetailsModel.find({},{productOfferId:1,productOfferName:1},function(err,result){
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


router.get('/downloadBrochure/:eventMongoId',function(req,res,next){
    console.log(req.params);
    EventDetailsModel.findOne({"_id":req.params.eventMongoId},{"EventBrochures":1},function(err,result){
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






















