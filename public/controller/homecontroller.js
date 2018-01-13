angular.module('webapp')
    .controller('homeController', ['$scope', function($scope) {
        $scope.canvasList = [
            {id:1, title:'Chimpanze ', description: 'fkfhjfkfjf',image:'images/p1.jpg'},
            {id:2, title:'Chimpanze ', description: 'nccjlsdsjds sjdskjsd sjsjds',image:'images/p2.jpg'},
            {id:3, title:'Chimpanze ', description: '839n idid idid fififi ididi',image:'images/p3.jpg'}
        ];
    }]);