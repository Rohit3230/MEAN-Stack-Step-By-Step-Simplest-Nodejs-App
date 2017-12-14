    "use strict";
    angular.module('sbAdminApp')
        .service('tournamentLiveService', ['helper', tournamentLiveServiceFunction]);
    function tournamentLiveServiceFunction(helper) {

        this.getCourtWidthAndAnnouncement = function (matchListObj) {
            this.basicObj = {};
            if(!matchListObj){
                return this.basicObj;
            }
            // set announcement of the liveScreen
            this.basicObj.announcement = matchListObj && matchListObj.announcementText && matchListObj.announcementText.announcementText ? matchListObj.announcementText.announcementText : 'Welcome all...!';

            this.basicObj.liveScreenImgPath = matchListObj && matchListObj.announcementText && matchListObj.announcementText.liveScreenImgPath ? matchListObj.announcementText.liveScreenImgPath : 'https://ap.yogems.com/images/banner/plainLiveHeader.jpg';

            if(matchListObj && matchListObj.announcementText && matchListObj.announcementText.recentlyMatch){
                 this.basicObj.recentlyMatch = matchListObj.announcementText.recentlyMatch;
            }

            // Assign the width for each court match depending on the number if courts.
            if (matchListObj.courtList && matchListObj.courtList.length) {
                switch (matchListObj.courtList.length) {
                    case 1:
                        this.basicObj.courtWidth = 100;
                        break;
                    case 2:
                        this.basicObj.courtWidth = 49;
                        break;
                    case 3:
                        this.basicObj.courtWidth = 31.33;
                        break;
                    case 4:
                        this.basicObj.courtWidth = 25;
                        break;
                    case 5:
                        this.basicObj.courtWidth = 20;
                        break;
                    case 6:
                        this.basicObj.courtWidth = 16.6;
                        break;
                }
            } else {
                this.basicObj.courtWidth = 100;
            }

            return this.basicObj;
        },

        // this.checkForScoreUpdated = function(scoreObj, time){
        //     // var scoringTime = (Math.floor(Date.now() / 1000) - scoreObj.scoringTime);
        //     var shouldGTMHit = false;

        //     if(
        //         !scoreObj
        //         || !scoreObj.scoringTime
        //     ){
        //         return shouldGTMHit;
        //     }


        //     // console.log(scoringTime);
        //     var scoreUpdatedTime = new Date(scoreObj.scoringTime*1000);
        //     // Hours part from the timestamp
        //     var scoreHours = scoreUpdatedTime.getHours();
        //     // Minutes part from the timestamp
        //     var scoreMinutes = scoreUpdatedTime.getMinutes();
        //     // Seconds part from the timestamp
        //     var scoreSeconds = scoreUpdatedTime.getSeconds(); 

        //     var currentTime = new Date();
        //     var currentHour = currentTime.getHours(); 
        //     var currentMinutes = currentTime.getMinutes();
        //     var currentSeconds = currentTime.getSeconds();

        //     if(
        //         scoreHours == currentHour
        //         && scoreMinutes == currentMinutes
        //         && ((scoreSeconds - currentSeconds) > 0)
        //         && ((scoreSeconds - currentSeconds) <= time)
        //     ){
        //         shouldGTMHit = true;
        //     }

        //     return shouldGTMHit;

        // },
 
            this.formateBadmintonData = function (matchListObj) {
                this.liveMatchList = [];
                this.formatedObj = {};
                var liveMatchObj = {};

                liveMatchObj = matchListObj;

                var liveScreenInfo = this.getCourtWidthAndAnnouncement(matchListObj);
                this.formatedObj.liveScreenInfo = liveScreenInfo.announcement;
                this.formatedObj.liveScreenImgPath = liveScreenInfo.liveScreenImgPath;
                this.formatedObj.recentlyConcludedMatches = liveScreenInfo.recentlyMatch ? liveScreenInfo.recentlyMatch : [];
                this.formatedObj.courtWidth = liveScreenInfo.courtWidth;
                




                // return {} in case no live match available
                if (!liveMatchObj.courtList || !liveMatchObj.courtList || liveMatchObj.courtList.length == 0) {
                    liveMatchObj.courtList = [];
                    return liveMatchObj;
                }



                 // Live match data is basically the court wise match data.
                angular.forEach(liveMatchObj.courtList, function (court) {
                    this.courtObj = {};
                    this.courtObj.courtHash = court.courtHash;
                    this.courtObj.courtName = court.courtName;
                    this.courtObj.recentlyFinishedMatch = court.recentlyFinishedMatch ? court.recentlyFinishedMatch  : [];
                    this.courtObj.matches = [];

                    if (court.matches && court.matches.length && court.matches.length > 0) {
                        
                        angular.forEach(court.matches, function (match) {
                            this.matchObj = {};
                            this.matchObj.event = match.event ? match.event : {eventHash : match.eventHash, eventName : match.eventName};
                            this.matchObj.live = match.live;
                            this.matchObj.team1 = match.team1;
                            this.matchObj.team2 = match.team2;
                            this.matchObj.matchserial = match.matchSerial ? match.matchSerial : match.matchserial;
                            this.matchObj.participant1 = match.team1NameTemp ? match.team1NameTemp : (match.participant1 ? match.participant1 : '');
                            this.matchObj.participant2 = match.team2NameTemp ? match.team2NameTemp : (match.participant2 ? match.participant2 : '');
                            this.matchObj.wo = match.wo;
                            this.matchObj.timestamp = match.timestamp;
                            this.matchObj.roundName = match.roundName;
                            this.matchObj.setDetailList = [];

                            if (match.games) {


                                var setLastKey = Object.keys(match.games);

                                //var lastScoreOfGame;
                                // Set defaults for each set score in case of live match data
                                angular.forEach(match.games, function(gameObj, setKey){ 
                                    if(gameObj.scores){

                                        var arraysOfScoresOfGame = Object.keys(gameObj.scores);
                                        if(arraysOfScoresOfGame && arraysOfScoresOfGame.length > 0){
                                            var lastScoreOfGame = gameObj.scores[arraysOfScoresOfGame[arraysOfScoresOfGame.length-1]];

                                            if(arraysOfScoresOfGame.length && arraysOfScoresOfGame[arraysOfScoresOfGame.length - 2]){
                                               var secondLastScoreOfGame = gameObj.scores[arraysOfScoresOfGame[arraysOfScoresOfGame.length - 2]];
                                            } 

                                            // previous score has been removed as we are showing only last score of set detail list.
                                            // this.matchObj.setDetailList.push({ setScoreList: [{ team1Score: lastScoreOfGame.team1Score ? lastScoreOfGame.team1Score : 0, team2Score: lastScoreOfGame.team2Score ? lastScoreOfGame.team2Score : 0 }] });
                                                this.matchObj.setDetailList.push(
                                                    { setScoreList: 
                                                        [
                                                            { team1Score: lastScoreOfGame.team1Score ? lastScoreOfGame.team1Score : 0,
                                                              team2Score: lastScoreOfGame.team2Score ? lastScoreOfGame.team2Score : 0,
                                                              //team1SecondLastScore: secondLastScoreOfGame && secondLastScoreOfGame.team1Score ? lastScoreOfGame.team1Score : 0,
                                                              //team2SecondLastScore: secondLastScoreOfGame && secondLastScoreOfGame.team2Score ? lastScoreOfGame.team2Score : 0,
                                                              scoreUpdatedFor : (secondLastScoreOfGame ? (secondLastScoreOfGame.team1Score != lastScoreOfGame.team1Score ? 'team1' : 'team2' ) : '')
                                                         }
                                                        ]
                                                    }
                                                );


                                                // hit GTM if score updated within 4 seconds.
                                                // if(this.checkForScoreUpdated(lastScoreOfGame, 4)){
                                                //     var str = 'Score updated for match #'+match.matchSerial+" Score- ("+lastScoreOfGame.team1Score+" - "+lastScoreOfGame.team2Score+")";
                                                //     helper.updateGoogleTagManager(str, 'Score updated for live match'+match.matchSerial);
                                                // }
                                    }
                                        
                                    } 

                                }, this);  

                                
                            }

                            if (match && match.wo) {
                                    // code for apply code of walkoverFunctionality.
                                    var walkoverTimeInSec = 600;
                                    var secondsPassed = (Math.floor(Date.now() / 1000) - match.timestamp);
                                    if(secondsPassed && secondsPassed > 0){
                                        var secondsLeft = walkoverTimeInSec - secondsPassed;
                                        if (secondsLeft > 0) {
                                            this.matchObj.minutesLeft = Math.ceil(secondsLeft / 60);
                                        } else {
                                            this.matchObj.minutesLeft = 0;
                                        }
                                    } 
                            }

                            // manage height of the liveCourt section
                             if ((match.live == 1 || match.live == true) && match.games) { 
                                this.formatedObj.isLiveMatchWithScore = true;
                                this.matchObj.matchWithLiveScore = true;
                            }

                            this.courtObj.matches.push(this.matchObj);
                        }, this);


                    }

                    this.liveMatchList.push(this.courtObj);
                }, this); 




                // this.liveMatchObj.matchList = this.liveMatchList;

                this.formatedObj.matchList = this.liveMatchList; 
                
                return this.formatedObj;

                // var formatedData = JSON.stringify(this.formatedObj);

                // this.liveMatchList = [];
                // this.formatedObj = {};
                // this.liveMatchObj = {};

                // return JSON.parse(formatedData);
            },

            this.checkForLiveScoreMatchListUpdatedOrNot = function(oldCourtList, newCourtList){
                
                var str1 = angular.toJson(oldCourtList);
                var str2 = angular.toJson(newCourtList);

                var ret =  str1 !== str2;

                // console.log(ret);
                return ret;
            };
    };
 