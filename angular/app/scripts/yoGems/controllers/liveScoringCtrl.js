'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
// angular.module('sbAdminApp')
//   .controller('liveScoringCtrl', function($scope) {
//       console.log('liveScoringCtrl');
//   });


// (function () {
//     'use strict'; 
var tournamentLiveModuelInfo = angular.module('sbAdminApp')
    .component('liveMatchView', {
        templateUrl: 'views/yoGems/pages/liveScoring.html',
        bindings: {
            // info: '='
        },
        controller: ['$scope', '$timeout', '$stateParams', '$location', 'tournamentLiveService', 'helper', 'httpService', 'Fullscreen', liveMatchViewCtrl],
        controllerAs : 'RSN'
    });

function liveMatchViewCtrl($scope, $timeout, $stateParams, $location,  tournamentLiveService, helper, httpService, Fullscreen) {
   // console.log('********');
    $scope.util = helper;
    $scope.mainObj = {};
    $scope.mainObj.viewMode = null;
    
    var oldData;
 $scope.util.updateGoogleTagManager($location.$$path,'Live Screen');
 

    $scope.badmintonViewRequiredObj = {};   // main obj for badminton based events component 
    $scope.badmintonViewRequiredObj.activeDirective = false;  

       var header = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
 


       $scope.manageCourtWiseView = function(courtWiseLists){ 
            var newObj = {};
            newObj.courtList = [];
            if(Number($scope.courtNumber) > 0 && courtWiseLists.courtList && courtWiseLists.courtList.length && (courtWiseLists.courtList.length+1) > Number($scope.courtNumber)){

                var courtObj = courtWiseLists.courtList[(Number($scope.courtNumber)-1)];    
                 var matchArray = [];
                 angular.forEach(courtObj.matches, function(matchObj){
                     if(matchObj.live){
                         matchArray.push(matchObj);
                     }
                     if(!matchObj.live && matchArray.length < 1){
                         matchArray.push(matchObj);
                     }
                 });
                  courtWiseLists.courtList[(Number($scope.courtNumber)-1)].matches = matchArray;
                
                 newObj.courtList.push(courtWiseLists.courtList[(Number($scope.courtNumber)-1)]);
            }else{
                newObj.courtList = courtWiseLists.courtList;
            }
            
            newObj.announcementText = courtWiseLists.announcementText;
            return newObj;
       };



    $scope.callAPIForData = function (hash) {

        var apiUrl; 
           // apiUrl = 'https://api.yogems.in/api/v0/liveScoring/getLiveMatches/'; 
            apiUrl = httpService.gitlivematch(hash);  

        httpService.get(apiUrl, { 'token': '833d5b2dee8eb599e3e49805dba258t7', 'Content-Type': 'application/json', 'Accept': 'application/json' })
            .then(function (response) {
                if (!$scope.util.isNullOrEmpty(response)) {  
                    if($scope.courtNumber){
                        response.data.data = $scope.manageCourtWiseView(response.data.data);
                        $scope.manageLiveScoreObj(response.data);  
                    }else{
                        $scope.manageLiveScoreObj(response.data);  
                    }
                   
            }else{
                  //  $location.path("/404");
                }
            }, function (error) {
               // $location.path("/404");
            });
    }; 

 



    $scope.manageLiveScoreObj = function (responseObj) {

        if($scope.mainObj.viewMode == 'seedBasedViewLiveMatch'){
            $scope.liveScoreArrayBasedOnSeededEvents=[];
            angular.forEach(responseObj.events,function(value1)
            {
                if(!$scope.util.isNullOrEmpty(value1.gameType)){
                    value1.gtype=value1.gameType.name;
                }

                if(!$scope.util.isNullOrEmpty(value1.userGender) && !$scope.util.isNullOrEmpty(value1.userGender.name)){
                    value1.gender=value1.userGender.name;
                }
                    $scope.liveScoreArrayBasedOnSeededEvents.push(value1);
            });  
        }else{
            if(!$scope.mainObj.tournamentObj.data && !$scope.mainObj.tournamentObj.data.tournamentGeneralInfo && !$scope.mainObj.tournamentObj.data.tournamentGeneralInfo.service){
              // $location.path("/404");
            }  
            $scope.badmintonViewRequiredObj.tournamentObj =  {
                        uniqueName : $scope.mainObj.tournamentObj.data.tournamentGeneralInfo.uniqueName
                        , name : $scope.mainObj.tournamentObj.data.tournamentGeneralInfo.name
                        , trnmntHash : $scope.mainObj.tournamentObj.data.tournamentGeneralInfo.trnmntHash
                        // , uniqueName : $scope.mainObj.tournamentObj.data.tournamentGeneralInfo.uniqueName
                        }; 
           // var isGotNewFormatedData = false;
            if($scope.mainObj.tournamentObj.data.tournamentGeneralInfo.service && (($scope.mainObj.tournamentObj.data.tournamentGeneralInfo.service).toLowerCase() == 'badminton')
              ){ 
                  var newData = angular.copy(tournamentLiveService.formateBadmintonData(responseObj.data));
                
                    if(!$scope.badmintonViewRequiredObj.liveScoreObj){
                       $scope.badmintonViewRequiredObj.liveScoreObj =  newData; 
                       $scope.badmintonViewRequiredObj.activeDirective = true; 
                            
                       // code for hit GTM in case of score update.
                       $scope.hitGTMForScoreUpdate(newData, oldData);
                       // code for hit GTM in case of score update.
                        
                       // replace oldData with newData refrence.
                       oldData = angular.copy(newData);

                    }else{
                        if( 
                            newData
                            && newData.matchList 
                            && oldData.matchList 
                            && tournamentLiveService.checkForLiveScoreMatchListUpdatedOrNot(newData, oldData) 
                        )
                        {
                           // isGotNewFormatedData = true;
                           // console.log('newData--',newData,'--oldData--',oldData); 
                            $scope.badmintonViewRequiredObj.liveScoreObj = newData;
                            
                            // code for hit GTM in case of score update.
                            $scope.hitGTMForScoreUpdate(newData, oldData);
                            // code for hit GTM in case of score update.
                            
                            // replace old data with new data refrence.
                            oldData = angular.copy(newData);

                        }else{
                            // return false;
                        }
                    }
 
                // $scope.badmintonViewRequiredObj.liveScoreObj = tournamentLiveService.formateBadmintonData(responseObj.data);   
                
            } 
            
            if($scope.mainObj.tournamentObj.data.tournamentGeneralInfo.service && (($scope.mainObj.tournamentObj.data.tournamentGeneralInfo.service).toLowerCase() == 'lawn tennis')
              ){ 
                $scope.badmintonViewRequiredObj.liveScoreObj = tournamentLiveService.formateLawnTennisData(responseObj.data);  
               $scope.badmintonViewRequiredObj.activeDirective = true; 
            } 
 

            if($scope.badmintonViewRequiredObj.callFunFromParent){ 
                $scope.badmintonViewRequiredObj.callFunFromParent($scope.badmintonViewRequiredObj);
            }else{
                $scope.callAPIForData($scope.mainObj.tournamentObj.data.tournamentHash);
            }
        }

    };


    $scope.hitGTMForScoreUpdate = function(newData, oldData){
        //console.log(newData, oldData); 
        if(
            !newData
            || !newData.matchList
        ){
            return false;
        }

        if(
            !$scope.mainObj
            ||  !$scope.mainObj.tournamentObj
            ||  ! $scope.mainObj.tournamentObj.data
            ||  ! $scope.mainObj.tournamentObj.data.tournamentGeneralInfo
            ||  ! $scope.mainObj.tournamentObj.data.tournamentGeneralInfo.uniqueName
        ){
            return false;
        }


        for(var i = 0; i<= newData.matchList.length-1; i++){
            if(
                !newData
                || ! newData.matchList
                || ! newData.matchList[i]
                || ! newData.matchList[i].matches
            ){
                // no match found on court list.
                continue;
            }

            var newLiveEvents = _.select(newData.matchList[i].matches, function(score){ return score.live == true});
            if(
                !newLiveEvents
                || newLiveEvents.length == 0
              ){
                  // no live match found for this court.
                continue;
              }


            var oldLiveEvents;
            if(
                oldData
                && oldData.matchList
                && oldData.matchList[i]
                && oldData.matchList[i].matches
            ){
                oldLiveEvents = _.select(oldData.matchList[i].matches, function(score){ return score.live == true});
            }
 
            var newScoreObj ;
            if(
                newLiveEvents
                && newLiveEvents[0]
                && newLiveEvents[0].setDetailList
                && newLiveEvents[0].setDetailList.length
                && newLiveEvents[0].setDetailList.length > 0
                && newLiveEvents[0].setDetailList[newLiveEvents[0].setDetailList.length -1]
                && newLiveEvents[0].setDetailList[newLiveEvents[0].setDetailList.length -1].setScoreList
                && newLiveEvents[0].setDetailList[newLiveEvents[0].setDetailList.length -1].setScoreList.length
                && newLiveEvents[0].setDetailList[newLiveEvents[0].setDetailList.length -1].setScoreList.length > 0
                && newLiveEvents[0].setDetailList[newLiveEvents[0].setDetailList.length -1].setScoreList[newLiveEvents[0].setDetailList[newLiveEvents[0].setDetailList.length -1].setScoreList.length - 1]
            ){
                newScoreObj = newLiveEvents[0].setDetailList[newLiveEvents[0].setDetailList.length -1].setScoreList[newLiveEvents[0].setDetailList[newLiveEvents[0].setDetailList.length -1].setScoreList.length - 1]
            } 

            var oldScoreObj ;
            if(
                oldLiveEvents
                && oldLiveEvents[0]
                && oldLiveEvents[0].setDetailList
                && oldLiveEvents[0].setDetailList.length
                && oldLiveEvents[0].setDetailList.length > 0
                && oldLiveEvents[0].setDetailList[oldLiveEvents[0].setDetailList.length -1]
                && oldLiveEvents[0].setDetailList[oldLiveEvents[0].setDetailList.length -1].setScoreList
                && oldLiveEvents[0].setDetailList[oldLiveEvents[0].setDetailList.length -1].setScoreList.length
                && oldLiveEvents[0].setDetailList[oldLiveEvents[0].setDetailList.length -1].setScoreList.length > 0
                && oldLiveEvents[0].setDetailList[oldLiveEvents[0].setDetailList.length -1].setScoreList[oldLiveEvents[0].setDetailList[oldLiveEvents[0].setDetailList.length -1].setScoreList.length - 1]
            ){
                oldScoreObj = oldLiveEvents[0].setDetailList[oldLiveEvents[0].setDetailList.length -1].setScoreList[oldLiveEvents[0].setDetailList[oldLiveEvents[0].setDetailList.length -1].setScoreList.length - 1]
            }  


            if(!oldData){                 

                var str = 'Score updated for match #'+newLiveEvents[0].matchserial+" Score- ("+newScoreObj.team1Score+" - "+newScoreObj.team2Score+")";
               // console.log('str--->',str);
                $scope.util.updateGoogleTagManager("live/"+$scope.mainObj.tournamentObj.data.tournamentGeneralInfo.uniqueName+"/category/"+newLiveEvents[0].event.eventName+"/match/"+newLiveEvents[0].matchserial+"/score/"+newScoreObj.team1Score+"-"+newScoreObj.team2Score, str);

            }else{
                if(
                    newScoreObj
                    && newScoreObj.team1Score
                    && newScoreObj.team2Score
                    && oldScoreObj
                    && oldScoreObj.team1Score
                    && oldScoreObj.team2Score
                    && 
                    (
                        newScoreObj.team1Score > oldScoreObj.team1Score
                        ||
                        newScoreObj.team2Score > oldScoreObj.team2Score
                    )
                ){
                    var str = 'Score updated for match #'+newLiveEvents[0].matchserial+" Score- ("+newScoreObj.team1Score+" - "+newScoreObj.team2Score+")";
                   // console.log('str--->',str);
                    //$scope.util.updateGoogleTagManager($location.$$path+"/match/"+newLiveEvents[0].matchserial+"/score/"+newScoreObj.team1Score+"-"+newScoreObj.team2Score, str);
                    $scope.util.updateGoogleTagManager("live/"+$scope.mainObj.tournamentObj.data.tournamentGeneralInfo.uniqueName+"/category/"+newLiveEvents[0].event.eventName+"/match/"+newLiveEvents[0].matchserial+"/score/"+newScoreObj.team1Score+"-"+newScoreObj.team2Score, str);
                }
            }
        } 
    };


    $scope.manageFunctionalityBasedOnTournamentObj = function(tournamentObj){
      //  $scope.mainObj.tournamentObj = response.data; 
      var obj = {};
      obj.data = {};
      obj.data.tournamentGeneralInfo = tournamentObj.data;
      obj.data.tournamentHash = tournamentObj.data.trnmntHash;
      tournamentObj = obj;


        $scope.mainObj.tournamentObj = tournamentObj;
        if($scope.util.isSeededBasedLiveMode($scope.mainObj.tournamentObj.data.tournamentGeneralInfo)){
            $scope.mainObj.viewMode = 'seedBasedViewLiveMatch';
        }else{
            $scope.mainObj.viewMode = 'badmintonViewLiveMatch';
        }

        if ($scope.mainObj.viewMode == 'seedBasedViewLiveMatch') {
            //  live score api calling for $scope.mainObj.viewMode == 'seedBasedViewLiveMatch' like for skating
            $scope.manageLiveScoreObj($scope.mainObj.tournamentObj.data.tournamentGeneralInfo); 
            $timeout(function () { 
                $scope.getTournamentDetail($scope.tourUniqName);
            }, 2000);//10000  
        } else {
            //  live score api calling for skating types of games.
            $scope.callAPIForData($scope.mainObj.tournamentObj.data.tournamentHash);
             var that = $scope;
             $scope.timer = $timeout(function () {
               //console.log( "Timeout executed", Date.now() );
             }, 2000); 

              $scope.timer.then(
                  function() {
                      //console.log( "Timer resolved!", Date.now() );
                      var tournamenObj = {};
                      tournamenObj.data = $scope.mainObj.tournamentObj.data.tournamentGeneralInfo;
                      $scope.manageFunctionalityBasedOnTournamentObj(tournamenObj);
                  },
                  function() {
                     // console.log( "Timer rejected!", Date.now() );
                  }
              ); 
        }
    };






 $scope.getTournamentDetail = function (value) {
     var that = $scope;
     // var getTournamentApiUrl = httpService.getTournamentDetails(value);
      var getTournamentApiUrl = httpService.getTournamentDetailsByTournamentHash(value);

        httpService.get(getTournamentApiUrl, header)
            .then(function (response) {  

                    if (response.data != undefined && response.data != '' && response.data != null) {
                        
                        that.manageFunctionalityBasedOnTournamentObj(response.data); 

                    }else{
                       // $location.path("/404");
                    }
 
            }, function (error) {
               if(!$scope.tourUniqName){
                return;
               }
                $scope.getTournamentDetailTimer = $timeout(function () {
                //console.log( "Timeout executed", Date.now() );
                }, 2000); 

                $scope.getTournamentDetailTimer.then(
                    function() { 
                        $scope.getTournamentDetail($scope.tourUniqName); 
                    },
                    function() { 
                    }
                );  
            });
    };

    $scope.getTextValue = function (item) {
        return '<b>' + item.seedNumber + '</b>&nbsp; ' + item.firstName + '  ' + item.lastName;
    }; 

    this.$onInit = function() { 


       //console.log('onInit fun called.',$stateParams);

       if($stateParams.tournamentHash){
          $scope.tourUniqName = $stateParams.tournamentHash; 
       }
       
       
       if(!$scope.tourUniqName){
          $scope.tourUniqName = 'a9889a9a-c6b4-11e7-839d-00145e5d713a';  // stage
         //  $scope.tourUniqName == 'f6cd4634-b971-11e7-8484-021408b0cef6';  //  prod kanhaiya
           $scope.tourUniqName = '57461a1b-ceb0-11e7-948a-021408b0cef6';   // prod emerging noida.
            
            if($stateParams.courtNumber){
                $scope.courtNumber = $stateParams.courtNumber; 
                $scope.badmintonViewRequiredObj.isCourtSpecific = true;
                Fullscreen.all();
                Fullscreen.isEnabled();
            }

        //    if($location.$$path == '/live/2'){
        //         $scope.courtNumber = 2; 
        //         $scope.badmintonViewRequiredObj.isCourtSpecific = true; 
        //         // Jquery('#mainBody').css('background-color' , 'black;');
        //    }
       }

       if($stateParams.courtNumber){
          $scope.courtNumber = $stateParams.courtNumber; 
          $scope.badmintonViewRequiredObj.isCourtSpecific = true;
	 $scope.util.updateGoogleTagManager($location.$$path,'Court View '+$scope.courtNumber);
       }

       $scope.getTournamentDetail($scope.tourUniqName); 
        
    }; 

    this.$onDestroy = function () {
      $timeout.cancel( $scope.timer ); 
      $timeout.cancel( $scope.getTournamentDetailTimer ); 
      // $scope.getTournamentDetailTimer
    }; 

};

 

// })();
 
