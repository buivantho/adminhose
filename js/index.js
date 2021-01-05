var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $scope.myCtrl = function(){
<<<<<<< HEAD
        $http.get(" https://arcane-scrubland-56010.herokuapp.com")
=======
        $http.get("https://arcane-scrubland-56010.herokuapp.com")
>>>>>>> 9f209ad... firebase
            .then(function(response) {

                $scope.myWelcome = response.data;
                console.log( $scope.myWelcome )
            })
    }


    $scope.myCtrl();

    // $scope.status = 0;
    // $scope.gets = function(){
    //     $http.get("https://arcane-scrubland-56010.herokuapp.com/")
    //         .then(function(response) {
    //             console.log(response)
    //             $scope.myWelcome = response.data;
    //         });
    //
    // }
    // $scope.test = function () {
    //     $http.get("https://jsonplaceholder.typicode.com/posts")
    //         .then(function(response) {
    //             console.log(response)
    //             $scope.myWelcome = response.data;
    //         });
    // }
    //
    // // $scope.myFile = [];
    //
    // $scope.uploadFile = function() {
    //     $http.get("https://arcane-scrubland-56010.herokuapp.com/")
    //         .then(function(response) {
    //             $scope.content = response.data;
    //             $scope.statuscode = response.status;
    //             $scope.statustext = response.statusText;
    //         });
    //     console.log($scope.content)
    // };
    // $scope.file;
    // $scope.fileSelected = function (element) {
    //     $scope.file = element.files[0].name;
    //
    //     console.log($scope.file)
    // };

});