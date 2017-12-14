'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('yoGemsHomeScreenCtrl',['$scope', '$state', '$location',
        function($scope, $state, $location) {
        console.log('yoGemsHomeScreenCtrl'); 
        $scope.goOnSelectedSection = function(type, tournamentHash){
            switch(type){
                case 'liveScreen':
                   //  $location.url('/live/'+tournamentHash);
                     $state.go("liveScore", {tournamentHash : tournamentHash});
                break;
            }
        };
  }]);
