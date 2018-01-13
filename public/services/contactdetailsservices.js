webapp.factory('ContactServices',function($http){
var logodata;
    var getAllContactDetails=function()
    {
       return $http.get('/AllContactDetails');
    }
    var postAllContactDetails = function(contactdetails)
    {
//     console.log(contactdetails);
       return $http.post('/ContactDetails',contactdetails);
    }

    var getContactDetailsByMongoId=function(mongodbId)
    {
       return $http.get('/ContactDetailsByMongoId'+'/'+mongodbId);
    }
    var updateContactDetailsByMongoId=function(editdata)
    {
       return $http.post('/updateContactBymongoId',editdata);
    }

    var deleteContact=function()
    {
       return $http.delete('/deleteContact');
    }

    var deleteContactbyMongoId=function(mongoid)
    {
       return $http.delete('/ContactBymongoId/'+mongoid);
    }

    var setCompanyLogoImages=function(logo)
    {
//        console.log(logo);
    logodata=logo;
    }
    var getCompanyLogoImages=function()
    {
    return logodata;
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
      getAllContactDetails:getAllContactDetails,
      postAllContactDetails:postAllContactDetails,
      getContactDetailsByMongoId:getContactDetailsByMongoId,
      updateContactDetailsByMongoId:updateContactDetailsByMongoId,
      deleteContactbyMongoId:deleteContactbyMongoId,
      deleteContact: deleteContact,
      setCompanyLogoImages:setCompanyLogoImages,
      getCompanyLogoImages:getCompanyLogoImages

//      updateSurveyDataDetails:updateSurveyDataDetails
}

});