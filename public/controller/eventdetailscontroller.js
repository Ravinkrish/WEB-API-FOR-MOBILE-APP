webapp.controller("EventCtrl",function($scope,EventServices,$timeout,fileUpload){
    $scope.event = {};
    $scope.deleteEventId = null;

// Get all events
     $scope.getAllEvent = function ()
     {
          EventServices.getAllEvent().then(function (res)
          {
             $scope.eventList = res.data;
             console.log($scope.eventList);
          });
     };

 //get saved event details
     $scope.getEvent = function (eventId) {
              EventServices.getEvent(eventId).then(function (res) {
                  $scope.event = res.data;
              });
         };

 //   save all events
     $scope.saveDetails=function()
     {
         EventServices.postAllEventDetails($scope.event)
             .then(function (resultDetails)
             {
                  $scope.getAllEvent();
                 console.log('Event detail saved successfully');
             },
              function error(err)
             {
                 console.log('Event save failed:', err);
             });
     };

// delete the events
     $scope.deleteEvent = function(eventId)
     {
         EventServices.deleteEvent(eventId)
             .then(function(res)
             {
                 $scope.getAllEvent();
                 console.log('Event deleted.');
             },
             function error(err)
             {
                console.log('Event delete failed:', err);
             });
     }
// update the events

$scope.updateEvent = function(){
        EventServices.updateEvent($scope.event)
            .then(function(res){
                $scope.getAllEvent();
                console.log('Event updated.');
            },
            function error(err) {
               console.log('Event update failed:', err);
            });
    }


$scope.showAddForm = function(){
        $scope.event = {};
        $scope.formTitle = 'Add New Event';
        $scope.showAddBtn =  true;
        $scope.showEditbtn = false;
    };

    $scope.showEditForm = function(){
        $scope.formTitle = 'Update Event';
        $scope.showAddBtn =  false;
        $scope.showEditbtn = true;
    }

    $scope.openDeleteModal = function(eventId){
        console.log(eventId);
        $scope.deleteEventId = eventId;
    };


//fileupload
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
        console.log(response.data);
        var filedata=response.data;
        if (filedata){
        EventServices.updateMoreImages(imagearrayid,filedata).then(function(response){
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
EventServices.setProductImages(data);

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
  $scope.getAllEvent();
});