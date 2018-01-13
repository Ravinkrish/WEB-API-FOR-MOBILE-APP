var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    ContactDetailsModel = mongoose.model('contact');

    module.exports = function (app){
        app.use('/', router);
    };

router.post('/ContactDetails', function(req, res, next) {
console.log(req.body);

    var newContactDetailsModel = new ContactDetailsModel(req.body);
    ContactDetailsModel.count(function(err,offercount){
            if(offercount!=0)
            {
      newContactDetailsModel.productOfferId=offercount+1;
    newContactDetailsModel.save(function(err,result) {
        if (err){
            console.log('Error in Saving user: '+err);
        }
        res.send(result);
    });

}
else if(offercount==0)
{
newContactDetailsModel.productOfferId=1;
    newContactDetailsModel.save(function(err,result) {
        if (err){
            console.log('Error in Saving user: '+err);
        }
        res.send(result);
    });

}
});
});


router.get('/AllContactDetails', function(req, res, next) {
ContactDetailsModel.find({},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    }).skip(parseInt(req.params.start)).limit(parseInt(req.params.range))

})

router.post('/editContactBymongoId', function(req, res, next) {
console.log("******", req.body)
console.log(req.body._id);
ContactDetailsModel.findOneAndUpdate({"_id":req.body._id},req.body,{upsert: true, new: true},
function(err,result)
    {
        if(err){
            console.log(err.stack)
        }else{
            res.send(result)
        }

    });

})


router.delete('/contactBymongoId/:contactMongoid',function(req, res, next){
ContactDetailsModel.remove({"_id":req.params.contactMongoid},function(err,result)
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


router.post('/updateMoreImageDetails/:mongoid/:filename',function(req,res,next){
ContactDetailsModel.findOneAndUpdate({_id:req.params.mongoid},{ $push:{EventMoreImages:req.params.filename}},function(err,result){
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
ContactDetailsModel.findOne(function(err,result){
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
 ContactDetailsModel.find({"productOfferId":req.params.offerid},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })

})

router.get('/offerByName/:offername', function(req, res, next) {
 ContactDetailsModel.find({"productOfferName":req.params.offername},function(err,result){
        if(err){
        console.log(err.stack)
            res.send(err)

        }else{
        console.log(result);
            res.send(result)
        }

    })

})




router.get('/contactBymongoId/:contactMongoId',function(req,res,next){

ContactDetailsModel.findOne({"_id":req.params.contactMongoId},function(err,result){
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


ContactDetailsModel.find({},{productOfferId:1,productOfferName:1},function(err,result){
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





















