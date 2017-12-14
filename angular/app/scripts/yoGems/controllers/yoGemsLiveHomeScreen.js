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
        var header = { 'token': '833d5b2dee8eb599e3e49805dba258t7', 'Content-Type': 'application/json', 'Accept': 'application/json' };
        $scope.mainObj = {};
        $scope.mainObj.quotesList = [];

        $scope.postMyQuotes = function(){
            $scope.mainObj.apiStatus = 'waiting';
            if(!$scoe.mainObj.userName){
                $scope.mainObj.apiStatus = 'needValidate';
                
            }else if(!$scope.mainObj.userQuotes){
                $scope.mainObj.apiStatus = 'needValidate';
                
            }else{

            }

        };

        $scope.getQuotesList = function(){ 
            httpService.get(httpService.getUsersQuotes() , header)
            .then(function (response) {
                if (!$scope.util.isNullOrEmpty(response)) {  
                    $scope.mianObj.quotesList = response;
                }else{
                  $scope.mianObj.quotesList = [];
                }
            }, function (error) {
               $scope.mianObj.quotesList = [];
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
