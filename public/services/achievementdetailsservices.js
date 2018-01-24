webapp.factory('AchievementServices',function($http){

 var getAllAchievement=function()
    {
       return $http.get('/AllAchievementDetails');
    }

 var postAllAchievementDetails = function(achievementdetails)
    {
       console.log(achievementdetails);
       return $http.post('/AchievementDetails',achievementdetails);
    }

 var updateAchievement=function(editdata)
    {
       return $http.post('/editAchievementBymongoId',editdata);
    }

 var deleteAchievement=function(achievementId)
    {
       return $http.delete('/AchievementBymongoId/'+achievementId);
    }

 var getAchievement=function(achievementId)
    {
       return $http.get('/AchievementBymongoId/'+achievementId);
    }

 var setProductImages=function(images)
     {
       productImages=images;
     }

 var getProductImage=function()
     {
       return productImages;
     }

 var updateMoreImages=function(mongoid,filename,fileObj)
     {
       return $http.post('/updateAchievementImages/'+mongoid+'/'+filename,fileObj);
     }
      return{
      getAllAchievement:getAllAchievement,
      postAllAchievementDetails:postAllAchievementDetails,
      updateAchievement:updateAchievement,
      deleteAchievement:deleteAchievement,
      getAchievement:getAchievement,
      setProductImages:setProductImages,
      getProductImage:getProductImage,
      updateMoreImages:updateMoreImages

            }

});