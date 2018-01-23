webapp.factory('EventServices',function($http){
var logodata;

 var getAllEvent=function()
    {
       return $http.get('/AllEventDetails');
    }

 var postAllEventDetails = function(eventdetails)
    {
       console.log(eventdetails);
       return $http.post('/EventDetails',eventdetails);
    }

 var updateEvent=function(editdata)
    {
       return $http.post('/editEventBymongoId',editdata);
    }

 var deleteEvent=function(eventId)
    {
       return $http.delete('/eventBymongoId/'+eventId);
    }

 var getEvent=function(eventId)
    {
       return $http.get('/eventBymongoId/'+eventId);
    }


 var setProductImages=function(images)
    {
      productImages=images;
    }

 var getProductImage=function()
    {
      return productImages;
    }

 var updateMoreImages=function(mongoid,filename)
    {
      return $http.post('/updateMoreImageDetails/'+mongoid+'/'+filename);
    }

 var setEventBrochuresImages=function(logo)
     {
 //        console.log(logo);
     logodata=logo;
     }
     var getEventBrochuresImages=function()
     {
     return logodata;
     }

      return{
      getAllEvent:getAllEvent,
      postAllEventDetails:postAllEventDetails,
      deleteEvent:deleteEvent,
      updateEvent:updateEvent,
      getEvent:getEvent,
      setProductImages:setProductImages,
      getProductImage:getProductImage,
      updateMoreImages:updateMoreImages,
      setEventBrochuresImages:setEventBrochuresImages,
      getEventBrochuresImages:getEventBrochuresImages

}

});