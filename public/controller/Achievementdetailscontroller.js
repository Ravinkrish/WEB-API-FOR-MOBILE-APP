webapp.controller("AchievementCtrl",function($scope,AchievementServices,$timeout,fileUpload){
    $scope.achievement = {};
    $scope.deleteAchievementId = null;

// Get all achievements
     $scope.getAllAchievement = function ()
     {
          AchievementServices.getAllAchievement().then(function (res)
          {
             $scope.achievementList = res.data;
          });
     };

 //get saved achievements details
     $scope.getAchievement = function (achievementId) {
              AchievementServices.getAchievement(achievementId).then(function (res) {
                  $scope.achievement = res.data;
              });
         };

 //   save all achievements
     $scope.saveDetails=function()
     {
         AchievementServices.postAllAchievementDetails($scope.achievement)
             .then(function (resultDetails)
             {
                  $scope.getAllAchievement();
                 console.log('Achievement detail saved successfully');
             },
              function error(err)
             {
                 console.log('Achievement save failed:', err);
             });
     };

// delete the achievements
     $scope.deleteAchievement = function(achievementId)
     {
         AchievementServices.deleteAchievement(achievementId)
             .then(function(res)
             {
                 $scope.getAllAchievement();
                 console.log('Achievement deleted.');
             },
             function error(err)
             {
                console.log('Achievement delete failed:', err);
             });
     }
// update the achievements

$scope.updateAchievement = function(){
        AchievementServices.updateAchievement($scope.achievement)
            .then(function(res){
                $scope.getAllAchievement();
                console.log('Achievement updated.');
            },
            function error(err) {
               console.log('Achievement update failed:', err);
            });
    }


$scope.showAddForm = function(){
        $scope.achievement = {};
        $scope.formTitle = 'Add New Achievement';
        $scope.showAddBtn =  true;
        $scope.showEditbtn = false;
    };

    $scope.showEditForm = function(){
        $scope.formTitle = 'Update Achievement';
        $scope.showAddBtn =  false;
        $scope.showEditbtn = true;
    }

    $scope.openDeleteModal = function(achievementId){
        console.log(achievementId);
        $scope.deleteAchievementId = achievementId;
    };

$scope.files = [];
$scope.upload=function(){
 var file=$scope.myFile;
//  console.log($scope.files);
console.log(file)
//  console.log(file.name);
//    alert($scope.files.length+" files selected ... Write your Upload Code");
 var filess = $('#uploadBtn')[0].files[0]
         console.log(filess)
        fileUpload.uploadFileToUrl(filess).then(function (response) {
        alert("image uploaded")
        console.log(response.data);
        var filedata=response.data;
        if (filedata){
        AchievementServices.updateMoreImages(imagearrayid,filedata).then(function(response){
        console.log(response.data);
        })

        }

});

};

$scope.uploadfile=function(fliedata)
{
console.log(fliedata);
console.log("i am here")
var data;
data=fliedata.base64;
//console.log(data);
AchievementServices.setProductImages(data);

}
var imagearrayid;
$scope.uploadMoreImages=function(id)
{
console.log(id);
imagearrayid=id;
$("#uploadBtn").click();
}

$scope.callinguploadfile=function()
{
alert("i am not a");
console.log("somethiggggggggggggggggggggggg");
$("#upload").click();
}

angular.element( document.querySelector('.upload') ).change(function() {
 $timeout(function () {
      $scope.upload();
    }, 500);

});




//unwanted codes
  $scope.getAllAchievement();
});