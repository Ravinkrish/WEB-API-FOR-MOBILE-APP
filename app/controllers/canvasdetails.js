var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    CanvasDetailsModel = mongoose.model('Canvas');

    module.exports = function (app){
        app.use('/', router);
    };

router.post('/CanvasDetails', function(req, res, next) {
console.log(req.body);

    var newCanvasDetailsModel = new CanvasDetailsModel(req.body);
    CanvasDetailsModel.count(function(err,offercount){
            if(offercount!=0)
            {
      newCanvasDetailsModel.productOfferId=offercount+1;
    newCanvasDetailsModel.save(function(err,result) {
        if (err){
            console.log('Error in Saving user: '+err);
        }
        res.send(result);
    });

}
else if(offercount==0)
{
newCanvasDetailsModel.productOfferId=1;
    newCanvasDetailsModel.save(function(err,result) {
        if (err){
            console.log('Error in Saving user: '+err);
        }
        res.send(result);
    });

}
});
});


router.get('/AllCanvasDetails', function(req, res, next) {
 CanvasDetailsModel.find({},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    }).skip(parseInt(req.params.start)).limit(parseInt(req.params.range))

})

router.post('/editCanvasBymongoId', function(req, res, next) {
console.log("******", req.body)
 CanvasDetailsModel.findOneAndUpdate({
            "_id":req.body._id},
            req.body,
            {upsert: true, new: true},
            function(err,result){
                if(err){
                    console.log("ERROR::::::::");
                    console.log(err)
                }else{
                    res.send(result)
                }

            });
 }
);


router.delete('/CanvasBymongoId/:CanvasMongoid',function(req, res, next){
CanvasDetailsModel.remove({"_id":req.params.CanvasMongoid},function(err,result)
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
CanvasDetailsModel.findOne(function(err,result){
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
 CanvasDetailsModel.find({"productOfferId":req.params.offerid},function(err,result){
        if(err){
            res.send(err)
            console.log(err.stack)
        }else{
            res.send(result)
        }

    })

})

router.get('/offerByName/:offername', function(req, res, next) {
 CanvasDetailsModel.find({"productOfferName":req.params.offername},function(err,result){
        if(err){
        console.log(err.stack)
            res.send(err)

        }else{
        console.log(result);
            res.send(result)
        }

    })

})




router.get('/canvasByMongoId/:canvasMongoId',function(req,res,next){

CanvasDetailsModel.findOne({"_id":req.params.canvasMongoId},function(err,result){
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

//updateMoreImages
router.post('/updateMoreImagedata/:mongoid/:filename',function(req,res){
console.log("GFDSA");
console.log(req.params.mongoid);
console.log(req.params.filename)
CanvasDetailsModel.findOneAndUpdate({_id:req.params.mongoid},{$push:{CanvasMoreImages:req.params.filename}},function(err,result){
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
CanvasDetailsModel.find({},{productOfferId:1,productOfferName:1},function(err,result){
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





















