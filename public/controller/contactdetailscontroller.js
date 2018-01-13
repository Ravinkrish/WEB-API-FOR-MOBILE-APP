webapp.controller("ContactCtrl",function($scope,ContactServices,fileUpload){

$scope.contactDetails = {};

// Get candidate detail
$scope.getContactDetail = function () {
     ContactServices.getAllContactDetails().then(function (res) {
         $scope.contactDetail = res.data[0];
         console.log(res.data[0]);

     });
};

// Save/update Contact detail
$scope.saveContactDetails = function(){
//    $scope.contactDetail.CandidateLogo=ContactServices.getCompanyLogoImages();
    console.log($scope.contactDetails);
    ContactServices.postAllContactDetails($scope.contactDetails)
        .then(function (resultDetails) {
            $scope.disableAddBtn = true;
            console.log(resultDetails.data);
            console.log("candidate datail saved successfully");
            $scope.getContactDetail();
            },
            function error(errResponse) {
              console.log(errResponse)
            }
        );
}

// Delete Contact
$scope.deleteContactDetails=function(){
    ContactServices.deleteContact().then(function (resultDetails) {
        $scope.disableAddBtn = false;
        $scope.getContactDetail();
    });
}

// Delete survival detail
$scope.deleteSurvivalDetails=function(){
    $scope.candidateDetail.survival_info = {};
    ContactServices.postAllCandidateDetails($scope.candidateDetail)
        .then(function (resultDetails) {
            $scope.disableAddBtn = true;
            console.log("Survival info successfully");
            $scope.getCandidateDetail();
            },
            function error(errResponse) {
              console.log(errResponse)
            }
        );
}

// Delete election history
$scope.deleteElectionHistoryDetails=function(){
    $scope.candidateDetail.Election_history = {};
    ContactServices.postAllCandidateDetails($scope.candidateDetail)
        .then(function (resultDetails) {
            $scope.disableAddBtn = true;
            console.log("Election history successfully");
            $scope.getCandidateDetail();
            },
            function error(errResponse) {
              console.log(errResponse)
            }
        );
}


// ******************************
// unwanted code below
 $scope.getCandidatename = function () {
     CandidateServices.getAllCandidateDetails().then(function (res) {
         $scope.CandidateDetailsdata = res.data || {};
         $scope.candidateEditdetails=res.data
//             $scope.surveyEditdetails=res.data

     });
 };


$scope.uploadfile=function(fliedata)
{
console.log(fliedata);
//console.log(fliedata);
//console.log("i am here")
//var data;
data=fliedata.base64;
//console.log(data);
ContactServices.setCompanyLogoImages(data);
}








$scope.showSaveDetails=false;

/*$scope.getUserEditDetails = function(candidateDetails){
    $scope.showSaveDetails=true;

console.log(candidateDetails)
CandidateServices.getCandidateDetailsByMongoId(candidateDetails._id).then(function (resultDetails) {
console.log("u827398277467325342")
                                               console.log(resultDetails.data);
                                               $scope.candidate=resultDetails.data[0]


})

}*/
$scope.updateCandidateDetails=function(candDetails){
CandidateServices.updateCandidateDetailsByMongoId(candDetails).then(function (resultDetails) {
                        console.log("u827398277467325342")
                                               console.log(resultDetails.data);
                                               $scope.candidate=resultDetails.data

$scope.getCandidatename();
})

}


$scope.updateSurvey=function(mongodid,editdata)
{
CandidateServices.updateSurveyDataDetails(mongodid,editdata).then(function(result){
console.log(result.data);

})
}


//$scope.disableAddBtn = false;
/*$scope.saveCandidateDetails = function(){
    //console.log(candidatedetails);
    $scope.CandidateDetailsdata.CandidateLogo=CandidateServices.getCompanyLogoImages();
    CandidateServices.postAllCandidateDetails($scope.CandidateDetailsdata)
        .then(function (resultDetails) {
            $scope.disableAddBtn = true;
            console.log("candidate datails added successfully");
            console.log(resultDetails);
            $scope.getCandidatename();
            },
            function error(errResponse) {
              console.log(errResponse)
            }
        );
        // $('btnClose').click();
}*/





//$scope.showSaveDetails=false;
//
//$scope.getsurveyEditDetails=function(surveyDetails){
//    $scope.showSaveDetails=true;
//    console.log(surveyDetails)
//    CandidateServices.getSurveyDetailsByMongoId(candidateDetails._id).then(function (resultDetails) {
//        console.log("u827398277467325342")
//        console.log(resultDetails.data);
//        $scope.survey=resultDetails.data[0]
//    });
//}
//$scope.updatesurveyDetails=function(survDetails){
//CandidateServices.updatesurveyDetailsByMongoId(survDetails).then(function (resultDetails) {
//                        console.log("u827398277467325342")
//                                               console.log(resultDetails.data);
//                                               $scope.survey=resultDetails.data
//
//$scope.getCandidatename();
//})
//
//}
//
//$scope.deleteCandidateDetails=function(surveyDetails){
//   CandidateServices.deleteSurveybyMongoId(candidateDetails._id).then(function (resultDetails) {
//   $scope.getCandidatename();
//})
//}


function init(){
 $scope.getContactDetail ();
}
init()
});