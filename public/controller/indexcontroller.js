webapp.controller("IndexCtrl",function($scope,IndexServices,fileUpload){
$scope.SettingDetail={};

$scope.getSettingDetail = function () {
     IndexServices.getAllSettingDetails().then(function (res) {
         $scope.SettingDetail = res.data;
         console.log("hsajfdjsfjsfjshfjsfhjsf",$scope.SettingDetail);
     });
};

$scope.saveDetails=function(){
        IndexServices.postAllSettingDetails($scope.SettingDetail)
            .then(function (resultDetails) {
                $scope.getSettingDetail();
                console.log('Canvas detail saved successfully');
             },
             function error(err) {
                console.log('Canvas save failed:', err);
             });
    };



$scope.uploadfile=function(fliedata)
{

//console.log(fliedata);
$scope.imagedata=fliedata.base64;
//console.log($scope.imagedata);
IndexServices.setSettingLogoImages($scope.imagedata).then(function(res){
console.log(res.data);
});
}


$scope.getSettingDetail();

});