webapp.controller("IndexCtrl",function($scope,IndexServices,fileUpload){
$scope.SettingDetail={};

$scope.getSettingDetail = function () {
     IndexServices.getAllSettingDetails().then(function (res) {
         $scope.SettingDetail = res.data;
         console.log("hsajfdjsfjsfjshfjsfhjsf",$scope.SettingDetail);
     });
};

$scope.saveDetails=function(slogan){
 $scope.SettingDetail={};
         $scope.SettingDetail.SettingSlogan =slogan ;
         $scope.SettingDetail.SettingLogo=IndexServices.getSettingLogoImage();
         console.log($scope.SettingDetail);
        IndexServices.postAllSettingDetails($scope.SettingDetail)
            .then(function (resultDetails) {
                $scope.getSettingDetail();
                console.log('setting  detail saved successfully');
             },
             function error(err) {
                console.log('setting save failed:', err);
             });
    };

$scope.deleteSettingDetails=function(){
console.log('setting detail deleted successfully');
    IndexServices.deleteSetting().then(function (resultDetails) {
        $scope.getSettingDetail();
    });
}



$scope.uploadfile=function(fliedata)
{

//console.log(fliedata);
$scope.imagedata=fliedata.base64;
IndexServices.setSettingLogoImage($scope.imagedata);

//console.log($scope.imagedata);
}


$scope.getSettingDetail();

});