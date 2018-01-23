webapp.factory('IndexServices',function($http){
var logodata;

    var setSettingLogoImages=function(logodetails)
   {
//  console.log(logodetails)
   setlogo={}
    setlogo.SettingLogo=logodetails
  return $http.post('/setLogo',setlogo);
   }
    var getSettingLogoImages=function()
    {
    return logodata;
    }
     var getAllSettingDetails=function()
    {
    return $http.get('/AllSettingDetails');
    }

    var postAllSettingDetails = function()
    {
     return $http.post('/SettingDetails');
    }


//    var getSurveyDetailsByMongoId=function(mongodbId)
//    {
//       return $http.get('/SurveyDetailsByMongoId'+'/'+mongodbId);
//    }
//
//    var updateSurveyDetailsByMongoId=function(editdata)
//    {
//       return $http.post('/updateSurveyBymongoId',editdata);
//    }
//
//    var deleteSurveybyMongoId=function(mongoid)
//    {
//       return $http.delete('/CandidateBymongoId/'+mongoid);
//    }

//    var updateSurveyDataDetails=function(mongoid,editdata)
//    {
//       return $http.post('/updateSurveyData/'+mongoid,editdata)
//    }

      return{
      setSettingLogoImages:setSettingLogoImages,
      getSettingLogoImages:getSettingLogoImages,
      getAllSettingDetails:getAllSettingDetails

//      updateSurveyDataDetails:updateSurveyDataDetails
}

});