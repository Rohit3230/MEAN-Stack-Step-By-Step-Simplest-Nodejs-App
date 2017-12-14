
    'use strict'; 
   // let _ = require("../../../../bower_components/underscore/underscore-min.js")
       angular.module('sbAdminApp')
        .component('badminton', { 
                templateUrl: 'views/yoGems/directives/badmintonViewLiveScore.html', 
                bindings: {
                    info: '='
                }, 
                controller: ['$scope', 'Fullscreen', 'helper', TestController]
            });

        function TestController($scope, Fullscreen, helper) {  
            this.maxWidth = 100; 
            $scope.util = helper;
            

            this.callBackChildFunction = function(newObj){ 
                $scope.liveMatchObj = newObj.liveScoreObj;   
                if($scope.isCourtSpecific){
                    // $scope.liveMatchDetail.isAnyLiveMatch = false;
                    $scope.manageTeamView($scope.liveMatchObj.matchList[0].matches, 'team1');
                    $scope.manageTeamView($scope.liveMatchObj.matchList[0].matches, 'team2');
                    $scope.setWinnersInfo(newObj.liveScoreObj.matchList[0].recentlyFinishedMatch);
                   // $scope.getLiveMatchEventName($scope.liveMatchObj.matchList[0].matches);
                } 
            }; 
            
            this.$onInit = function() { 
                $scope.liveMatchObj = this.info.liveScoreObj;  
                $scope.tournamentObj = this.info.tournamentObj; 
                $scope.isCourtSpecific = this.info.isCourtSpecific; 
                this.info.callFunFromParent = this.callBackChildFunction; 
            }; 

            $scope.manageHeightOfLiveMatch = function(courtObj){ 
                var liveMatchStatus = 'noLiveMatch'; 
                    angular.forEach(courtObj.matches, function(matchObj){
                        if((matchObj.live == true || matchObj.live == 1) && liveMatchStatus != 'liveMatchWithScore'){ 
                            if(liveMatchStatus == 'noLiveMatch'){
                                liveMatchStatus = 'liveMatchWithOutScore';
                            }
                            if(matchObj.setDetailList && matchObj.setDetailList.length && matchObj.setDetailList.length > 0){
                                liveMatchStatus = 'liveMatchWithScore';
                            } 
                        }
                    }); 
                    return liveMatchStatus; 
            };

            $scope.manageUpcomingCourtMatchList = function(matchList){
                if(!$scope.isCourtSpecific){
                    return matchList;
                }else{
                     
                     var matchObjForUpcoming = [];
                     angular.forEach(matchList, function(matchObj){
                        if(!matchObj.live && matchObjForUpcoming.length == 0){
                            matchObjForUpcoming.push(matchObj);
                        }
                     });
                    return matchObjForUpcoming;
                }
            };
 
            $scope.showTeamName = function(playerObject, type){
                var name;
                if(type == 'viaParticipantName'){
                    name = $scope.getNameString(playerObject.name);
                    // if(playerObject.name
                    //     && playerObject.name.length
                    //     && playerObject.name.length > 15
                    // ){
                    //     name = $scope.util.removeextratext((playerObject.name).split(' ')[0]); 
                    // }else{
                    //     name = $scope.util.removeextratext(playerObject.name);
                    // }
                } 
                if(type == 'viaTeamName'){
                    name = $scope.util.removeextratext(playerObject); 
                }

                return name;
            };

            $scope.makeScreenFullSize = function(){
                      if (Fullscreen.isEnabled())
                        Fullscreen.cancel();
                    else
                        Fullscreen.all();
            };

            $scope.getTeamScore = function(type, setDetailList){  

                if(type == 'team1'){
                    if(setDetailList[setDetailList.length-1].setScoreList[setDetailList[setDetailList.length-1].setScoreList.length -1].team1Score){
                        return setDetailList[setDetailList.length-1].setScoreList[setDetailList[setDetailList.length-1].setScoreList.length -1].team1Score;
                    }else{
                        return 0;
                    }
                    
                }

                if(type == 'team2'){
                    if(setDetailList[setDetailList.length-1].setScoreList[setDetailList[setDetailList.length-1].setScoreList.length -1].team1Score){
                        return setDetailList[setDetailList.length-1].setScoreList[setDetailList[setDetailList.length-1].setScoreList.length -1].team2Score;
                    }else{
                        return 0;
                    }
                }

            };

            $scope.getLiveMatchEventName = function(matchArray){
                var str;
                angular.forEach(matchArray, function(matchObj){
                    if(matchObj.live){
                        str = matchObj.event.eventName+' #'+matchObj.matchserial+' '+matchObj.roundName;
                    }
                });  
                $scope.liveMatchDetail.matchInformation = str; 
            }; 

            $scope.liveMatchDetail = {};
            $scope.liveMatchDetail.isAnyLiveMatch = false;
            $scope.manageTeamView = function(matchArray, teamType){
                //console.log(matchArray);

                // if(teamType == 'team1'){
                //     $scope.liveMatchDetail.team1Detail = {};
                // }
                // if(teamType == 'team2'){
                //     $scope.liveMatchDetail.team2Detail = {};
                // }
                // $scope.liveMatchDetail.setDetailList = {};
                
                //var gotAnyLiveMatch = false;
                console.log($scope.liveMatchObj);
                angular.forEach(matchArray, function(matchObj){
                    if(matchObj.live){
                        //gotAnyLiveMatch = true; 
                        $scope.getLiveMatchEventName($scope.liveMatchObj.matchList[0].matches);
                        $scope.liveMatchDetail.isAnyLiveMatch = true;
                        $scope.liveMatchDetail.eventHash = matchObj.event.eventHash;
                        $scope.liveMatchDetail.setDetailList = matchObj.setDetailList;

                        if(teamType == 'team1'){
                            $scope.liveMatchDetail.team1Detail = {};
                            if(
                                matchObj.team1
                                && matchObj.team1.participants
                                && matchObj.team1.participants.length
                                && matchObj.team1.participants.length > 0
                                && matchObj.team1.participants.length <= 2 
                            ){
                                $scope.liveMatchDetail.team1Detail.participants = matchObj.team1.participants; 
                                $scope.liveMatchDetail.team1Hash = matchObj.team1.teamHash;
                            }else{
                                $scope.liveMatchDetail.team1Detail.teamDetail = {teamName : matchObj.team1.teamName, teamHash : matchObj.team1.teamHash}; 
                                $scope.liveMatchDetail.team1Hash = matchObj.team1.teamHash;
                            }
                        }

                        if(teamType == 'team2'){
                            $scope.liveMatchDetail.team2Detail = {};
                            if(
                                matchObj.team2
                                && matchObj.team2.participants
                                && matchObj.team2.participants.length
                                && matchObj.team2.participants.length > 0
                                && matchObj.team2.participants.length <= 2 
                                // && matchObj.team2.participants.length == 2 
                            ){
                                $scope.liveMatchDetail.team2Detail.participants = matchObj.team2.participants; 
                                $scope.liveMatchDetail.team2Hash = matchObj.team2.teamHash;
                            }else{
                                $scope.liveMatchDetail.team2Detail.teamDetail = {teamName : matchObj.team2.teamName, teamHash : matchObj.team2.teamHash}; 
                                $scope.liveMatchDetail.team2Hash = matchObj.team2.teamHash;
                            }
                        }

                    }
                }); 

                // if(gotAnyLiveMatch == false){
                //     $scope.liveMatchDetail.setDetailList = {};
                // }
 
            };
            
            $scope.setWinnersInfo = function(matchArray){
                console.log(matchArray);
                var matchObj = matchArray[0];
                if(
                   $scope.liveMatchDetail
                   && $scope.liveMatchDetail.eventHash
                   && matchObj 
                   && matchObj.eventHash
                   && $scope.liveMatchDetail.eventHash == matchObj.eventHash
                ){
                    $scope.liveMatchDetail.winnerTeam = matchObj.winnerTeam;
                    $scope.liveMatchDetail.winnerHash = matchObj.winnerHash;
                }
            };

            $scope.checkForWinner = function(matchObj){
                console.log(matchObj);
                if(
                    $scope.liveMatchDetail
                    && $scope.liveMatchDetail.winnerHash 
                    && $scope.liveMatchDetail.team1Hash 
                    && $scope.liveMatchDetail.winnerHash == $scope.liveMatchDetail.team1Hash
                ){
                    return 'team1';
                }
                if(
                    $scope.liveMatchDetail
                    && $scope.liveMatchDetail.winnerHash 
                    && $scope.liveMatchDetail.team2Hash 
                    && $scope.liveMatchDetail.winnerHash == $scope.liveMatchDetail.team2Hash
                ){
                    return 'team2';
                }
            };

            $scope.checkForScoreUpdation = function(matchScore){
                if(!matchScore
                 || !matchScore.setScoreList
                 || !matchScore.setScoreList.length
                 || !matchScore.setScoreList[matchScore.setScoreList.length-1]
                 || !matchScore.setScoreList[matchScore.setScoreList.length-1].scoreUpdatedFor 
                  ){
                    return '';
                }
                else{
                    return matchScore.setScoreList[matchScore.setScoreList.length-1].scoreUpdatedFor; 
                }
            };

            $scope.getNameString = function(string, type){
                var nameString = '';
                if(!string){
                    return nameString;
                }else{
                    if(string
                        && string.length
                        && (
                            !type ? string.length > 15 : string.length > 9
                           ) 
                    ){  
                        string = $scope.util.removeextratext(string);
                        var nameArray = string.split(' '); 
                        name = nameArray[0]; 
                        if(
                            name
                            && name.length
                            && name.length < 2
                            && nameArray[1]
                        ){
                            nameString = nameArray[0]+' '+nameArray[1];
                        }else{
                            nameString = name;
                        }
                    }else{
                        nameString = $scope.util.removeextratext(string);
                    }
                }
                return nameString; 
            };



            $scope.manageTeamPlayersName = function(participantObj){
                var str;
                var isFirst = true;
                var participantsLength = participantObj && participantObj.length ? participantObj.length : 0;
                angular.forEach(participantObj, function(playerObj, playerKey){
                    if(participantsLength > 1){
                        // playerObj.name = ($scope.getNameString(playerObj.name)).split(' ')[0];
                        playerObj.name = $scope.getNameString(playerObj.name, 'double');
                    }

                    if(isFirst){
                        str = (playerObj.name ? $scope.getNameString(playerObj.name) : '');
                        isFirst = false;
                    }else if(playerObj.name){
                        str = str+' + '+$scope.getNameString(playerObj.name); 
                    }else{

                    }  
                });
                return str;
            };

            this.$onDestroy = function () {
                console.log('directive onDestroy fun called.');
            };
            
        };   