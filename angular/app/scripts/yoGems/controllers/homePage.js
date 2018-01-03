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
                return false;
            }else if(!$scope.mainObj.quote){
                $scope.mainObj.apiStatus = 'Please enter quote of the user.';
                return false;
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
                     $scope.mainObj = {};
                }else{
                  $scope.mainObj.apiStatus = 'failed';
                }
            }, function (error) {
               $scope.mainObj.apiStatus = 'failed';
            });

        };


        $scope.deleteMyQuote = function(quotesObject){
            
            var requiredObj = {
                            'name': quotesObject.name,
                            'quote': quotesObject.quote,
                            '_id':quotesObject.id
                        }
                        console.log(requiredObj);

            httpService.delete(httpService.deleteUsersQuotes(), header ,JSON.stringify(requiredObj))
            .then(function (response) {
                if (!$scope.util.isNullOrEmpty(response)) {  
                    $scope.getQuotesList();
                    $scope.mainObj.apiStatus = 'success';
                     $scope.mainObj = {};
                }else{
                  $scope.mainObj.apiStatus = 'failed';
                }
            }, function (error) {
               $scope.mainObj.apiStatus = 'failed';
            });
        }; 

        $scope.getQuotesList = function(){ 
            $scope.mainObj.getListAPIStatus = 'waiting';
            httpService.get(httpService.getUsersQuotes() , header)
            .then(function (response) {
                if (!$scope.util.isNullOrEmpty(response)) {  
                    $scope.mainObj.quotesList = response.data;
                    $scope.mainObj.getListAPIStatus = 'success';
                }else{
                  $scope.mainObj.quotesList = [];
                  $scope.mainObj.getListAPIStatus = 'failed';
                }
            }, function (error) {
               $scope.mainObj.quotesList = [];
               $scope.mainObj.getListAPIStatus = 'failed';
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
