webapp.factory('CanvasServices',function($http){
    var getAllCanvas=function(){
       return $http.get('/AllCanvasDetails');
    }
   var postAllCanvasDetails = function(candidatedetails)
    {
     console.log(candidatedetails);
       return $http.post('/CanvasDetails',candidatedetails);
    }

   var updateCanvas=function(editdata)
    {
       return $http.post('/editCanvasBymongoId',editdata);
    }

    var deleteCanvas=function(canvasId)
    {
       return $http.delete('/CanvasBymongoId/'+canvasId);
    }

    var getCanvas=function(canvasId)
    {
       return $http.get('/canvasByMongoId/'+canvasId);
    }

    var setProductImages=function(images)
    {
       productImages=images;
    }

    var getProductImage=function()
    {
        return productImages;
    }

    var updateMoreImages=function(mongoid,filename, fileObj)
    {
        console.log(mongoid,filename)
        return $http.post('/updateMoreImagedata/'+mongoid+'/'+filename, fileObj);
    }
      return{
      getAllCanvas:getAllCanvas,
      postAllCanvasDetails:postAllCanvasDetails,
      updateCanvas:updateCanvas,
      deleteCanvas:deleteCanvas,
      getCanvas:getCanvas,
      setProductImages:setProductImages,
      getProductImage:getProductImage,
      updateMoreImages:updateMoreImages

}

});