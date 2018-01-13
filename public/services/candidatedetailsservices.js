webapp.factory('CandidateServices',function($http){
var logodata;
    var getAllCandidateDetails=function()
    {
       return $http.get('/AllCandidateDetails');
    }
    var postAllCandidateDetails = function(candidatedetails)
    {
     console.log(candidatedetails);
       return $http.post('/CandidateDetails',candidatedetails);
    }

    var getCandidateDetailsByMongoId=function(mongodbId)
    {
       return $http.get('/candidateDetailsByMongoId'+'/'+mongodbId);
    }
    var updateCandidateDetailsByMongoId=function(editdata)
    {
       return $http.post('/updateCandidateBymongoId',editdata);
    }

    var deleteCandidate=function()
    {
       return $http.delete('/deleteCandidate');
    }

    var deleteCandidatebyMongoId=function(mongoid)
    {
       return $http.delete('/CandidateBymongoId/'+mongoid);
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
      getAllCandidateDetails:getAllCandidateDetails,
      postAllCandidateDetails:postAllCandidateDetails,
      getCandidateDetailsByMongoId:getCandidateDetailsByMongoId,
      updateCandidateDetailsByMongoId:updateCandidateDetailsByMongoId,
      deleteCandidatebyMongoId:deleteCandidatebyMongoId,
      deleteCandidate: deleteCandidate,
      setCompanyLogoImages:setCompanyLogoImages,
      getCompanyLogoImages:getCompanyLogoImages

//      updateSurveyDataDetails:updateSurveyDataDetails
}

});