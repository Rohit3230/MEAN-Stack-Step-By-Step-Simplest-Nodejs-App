'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('yoGemsHomeScreenCtrl',['$scope', '$state', '$location', 'helper', 'httpService',
        function($scope, $state, $location, helper, httpService) {

        $scope.util = helper;
        var header = {'Content-Type': 'application/json', 'Accept': 'application/json' };
        $scope.mainObj = {};
        $scope.mainObj.quotesList = [];

        $scope.postMyQuotes = function(){
            $scope.mainObj.apiStatus = 'waiting';
            if(!$scope.mainObj.name){
                $scope.mainObj.apiStatus = 'Please enter name of the user.';
            }else if(!$scope.mainObj.quote){
                $scope.mainObj.apiStatus = 'Please enter quote of the user.';
            }else{

            }
            
            var requiredObj = {
                            'name': $scope.mainObj.name,
                            'quote': $scope.mainObj.quote
                            }

            httpService.post(httpService.postUsersQuotes(), header ,JSON.stringify(requiredObj))
            .then(function (response) {
                if (!$scope.util.isNullOrEmpty(response)) {  
                    $scope.getQuotesList();
                    $scope.mainObj.apiStatus = 'success';
                }else{
                  $scope.mainObj.apiStatus = 'failed';
                }
            }, function (error) {
               $scope.mainObj.apiStatus = 'failed';
            });

        };

        $scope.getQuotesList = function(){ 
            httpService.get(httpService.getUsersQuotes() , header)
            .then(function (response) {
                if (!$scope.util.isNullOrEmpty(response)) {  
                    $scope.mainObj.quotesList = response.data;
                }else{
                  $scope.mainObj.quotesList = [];
                }
            }, function (error) {
               $scope.mainObj.quotesList = [];
            });
        };


        $scope.init = function(){
            $scope.getQuotesList();
        };

        $scope.init();
        
        // $scope.goOnSelectedSection = function(type, tournamentHash){
        //     switch(type){
        //         case 'liveScreen':
        //              $state.go("liveScore", {tournamentHash : tournamentHash});
        //         break;
        //     }
        // };
  }]);
