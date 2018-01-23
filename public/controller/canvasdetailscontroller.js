webapp.controller("CanvasCtrl",function($scope,CanvasServices,$timeout,fileUpload){
    $scope.canvas = {};
    $scope.deleteCanvasId = null;
    // Get all canvas
    $scope.getAllCanvas = function () {
         CanvasServices.getAllCanvas().then(function (res) {
             $scope.canvasList = res.data;
         });
    };

    // Get Canvas by id
    $scope.getCanvas = function (canvasId) {
         CanvasServices.getCanvas(canvasId).then(function (res) {
             $scope.canvas = res.data;
         });
    };

    // save a Canvas
    $scope.saveDetails=function(){
        CanvasServices.postAllCanvasDetails($scope.canvas)
            .then(function (resultDetails) {
                 $scope.getAllCanvas();
                console.log('Canvas detail saved successfully');
             },
             function error(err) {
                console.log('Canvas save failed:', err);
             });
    };

    // Delete a canvas
    $scope.deleteCanvas = function(canvasId){
        CanvasServices.deleteCanvas(canvasId)
            .then(function(res){
                $scope.getAllCanvas();
                console.log('Canvas deleted.');
            },
            function error(err) {
               console.log('Canvas delete failed:', err);
            });
    }

    // Update a canvas
    $scope.updateCanvas = function(){
        CanvasServices.updateCanvas($scope.canvas)
            .then(function(res){
                $scope.getAllCanvas();
                console.log('Canvas updated.');
            },
            function error(err) {
               console.log('Canvas update failed:', err);
            });
    }

    $scope.showAddForm = function(){
        $scope.canvas = {};
        $scope.formTitle = 'Add New Canvas';
        $scope.showAddBtn =  true;
        $scope.showEditbtn = false;
    };

    $scope.showEditForm = function(){
        $scope.formTitle = 'Update Canvas';
        $scope.showAddBtn =  false;
        $scope.showEditbtn = true;
    }

    $scope.openDeleteModal = function(canvasId){
        console.log(canvasId);
        $scope.deleteCanvasId = canvasId;
    };


$scope.files = [];
$scope.upload=function(){
 var file=$scope.myFile;

 var filess = $('#uploadBtn')[0].files[0]
        fileUpload.uploadFileToUrl(filess).then(function (response) {
        console.log(response.data);
        var filedata=response.data;
        if (filedata){
        console.log(filedata,imagearrayid);
        CanvasServices.updateMoreImages(imagearrayid, filedata, {fileObj:file.base64}).then(function(response){
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
CanvasServices.setProductImages(data);

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

    // init
    $scope.getAllCanvas();
// unwanted code


});