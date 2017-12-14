'use strict';

    angular.module('sbAdminApp')
        .service('helper', ['$rootScope', '$window', '$http', '$filter',  '$location', 
            function ($rootScope, $window, $http, $filter, $location) {
                return {
                    getBaseUrl: function () {
                        // var url = "https://api.yogems.com/api/";
                        var url = 'http://localhost:3000/'
                        // var url="https://api.yogems.in/api/";
                        // var url = "http://192.168.0.39:4000/api/";
                        // var url="https://api.yogems.net/api/";
                        //var url = "http://localhost:4000/api/"
                        //var url = "http://10.99.100.37:4000/api/" 
                        // var version = "v0/";
                        // var baseurl = url + version;
                        return url;
                    },
 
                    getWordPressBaseUrl: function () /* for wordpress login baseurl, please change according to your current url*/ {
                        var currenturl = "https://www.yogems.com/";
                        // var currenturl = "https://stage.yogems.in/";
                        // var currenturl = "https://wordpress.yogems.in/";
                        // var currenturl = "https://devuser.yogems.com/";
                        //  var currenturl = "http://stage.yogems.com/";
                        //  var currenturl = "https://social.yogems.com/";

                        return currenturl;
                    },
	updateGoogleTagManager: function (myUrl, myTitle) {
                if(!myUrl || !myTitle){
                    return;
                }
                console.log(myUrl,'-----',myTitle);
                $rootScope.$broadcast('$viewContentLoaded', {'myUrl': myUrl, myTitle:myTitle, modeTye : 'yoGemsDefined'});
               // $rootScope.$broadcast('$viewContentLoaded', {'myUrl': myUrl, 'myTitle':myTitle, 'modeTye' : 'yoGemsDefined'}); 
                           },           
         // getBrowserBaseUrl: function () {
                    //     if (this.getBaseUrl() == 'https://api.yogems.com/api/v0/') {
                    //         return 'https://www.yogems.com/';
                    //     } else {
                    //         return 'https://stage.yogems.in/';
                    //     }
                    // },
                    // getDeviceType: function () {
                    //     console.log($( window ).width());
                    //     var deviceType;
                    //     var deviceWidth;
                    //     if($( window ).width()){
                    //         deviceWidth = $( window ).width();
                    //     }
                    //     if(deviceWidth <= 480){
                    //         deviceType = 'mobile';
                    //     }else if(deviceWidth > 480 && deviceWidth <= 760){
                    //         deviceType = 'tab';
                    //     }else if(deviceWidth > 760 && deviceWidth <= 1024 ){
                    //         deviceType = 'ipad';
                    //     }else{
                    //         deviceType = 'desktop'
                    //     }
                    //     return deviceType;
                    // },
                    // renderPageScroll: function (scrollTill) {
                    //     if ($window.scrollTo) {
                    //         $window.scrollTo(0, scrollTill);
                    //     } else if ($('body').scrollTop) {
                    //         $('body').scrollTop(scrollTill);
                    //     } else {

                    //     }
                    // },
                    // getserviceimage: function () {
                    //     var service = ["athletics", "badminton", "basketball", "chess", "cricket", "footwall", "golf", "handball", "hockey", "kho_kho", "lawn_tennis", "shooting", "soccer", "swimming", "table_tennis", "volleyball", "yoga"];
                    //     return service;
                    // },
                    // socialDefaultScroll: function (type) {
                    //     switch (type) {
                    //         case 'userProfile':
                    //             return 0
                    //             break;
                    //         case 'belowCover':
                    //             return 450
                    //             break;
                    //     }
                    // },
                    // imgHttpsCheck : function(imgPath){
                    //     if(imgPath && (imgPath).indexOf('https://') != 0){
                    //         return imgPath = "https://"+imgPath;
                    //     }else{
                    //         return imgPath;
                    //     }
                    // }, 
                    // getRandomElements: function (arr, n) {
                    //     if (!arr || arr.length == 0) {
                    //         return arr;
                    //     }

                    //     var result = new Array(n),
                    //         len = arr.length,
                    //         taken = new Array(len);
                    //     if (n > len)
                    //         throw new RangeError("getRandom: more elements taken than available");
                    //     while (n--) {
                    //         var x = Math.floor(Math.random() * len);
                    //         result[n] = arr[x in taken ? taken[x] : x];
                    //         taken[x] = --len;
                    //     }
                    //     return result;
                    // }, 
                    // signupDefaultsFormFields: function () {
                    //     return { "name": { "isVisible": true, "isRequired": true }, "gender": { "isVisible": true, "isRequired": true }, "dateOfBirth": { "isVisible": true, "isRequired": true }, "phoneNumber": { "isVisible": true, "isRequired": true }, "email": { "isVisible": true, "isRequired": true }, "address": { "isVisible": true, "isRequired": true }, "school": { "isVisible": true, "isRequired": true }, "termsAndConditions": { "isVisible": true, "isRequired": true, "html": "" }, "parentsInfo": { "isVisible": true, "isRequired": true }, "tshirtSize": { "label": "T-shirt size", "isVisible": true, "isRequired": true }, "emergencyContactName": { "label": "Emergency Contact Name", "isVisible": true, "isRequired": true }, "emergencyContactMobileNo": { "label": "Emergency Contact Mobile No.", "isVisible": true, "isRequired": true } };
                    // },
                    // replaceSpaceWithDash : function(str ,replaceWith){
                    //     if(!str || !replaceWith){
                    //         return str;
                    //     }

                    //     return str.replace(/\s+/g, replaceWith).toLowerCase();
                    // },
                    // loggedInUserType: function () {
                    //     if (this.getCookie('yUType')) {
                    //         return this.getCookie('yUType');
                    //     } else {
                    //         if (this.getCookie('yUT') && userClass && userClass.userData && userClass.userData.userType) {
                    //             return userClass.userData.userType;
                    //         } else {
                    //             return 'notLoggedIn';
                    //         }
                    //     }
                    // },
                    // checkResponse: function (str) {
                    //     if (str == '' || str == null || str == undefined || str.status.code != 0) {
                    //         return true;
                    //     }
                    //     else {
                    //         return false;
                    //     }
                    // },
                    isNullOrEmpty: function (str) {
                        if (str == null || str == undefined || str == '') {
                            return true;
                        }
                        else {
                            return false;
                        }
                    },
                    // getPathValue: function (string, index) {
                    //     var n = string.split('/').length;
                    //     var array = string.split('/');
                    //     array = array.reverse();
                    //     var str = array[index];
                    //     return str;
                    // },
                    // updateGoogleTagManager: function (myUrl, myTitle) {
                    //     $rootScope.$broadcast('$viewContentLoaded', { 'myUrl': myUrl, myTitle: myTitle, modeTye: 'yoGemsDefined' });
                    // },
                    // updateGoogleTagManagerForSocial: function (myUrl, myTitle, userHandle) {

                    //     if (userClass.userData) {
                    //         myTitle = myTitle + " | " + userClass.userData.firstName + " " + userClass.userData.lastName + "," + userClass.userData.schoolName;
                    //         myUrl = "/" + userClass.userData.userHandle + "" + myUrl;
                    //     } else if (userHandle) {
                    //         myUrl = "/" + userHandle + "" + myUrl;
                    //     } else {
                    //         return;
                    //     }

                    //     this.updateGoogleTagManager(myUrl, myTitle);
                    // },
                    // getDatesBWDates: function (startDate, endDate) {
                    //     var dates = [],
                    //         currentDate = startDate,
                    //         addDays = function (days) {
                    //             var date = new Date(this.valueOf());
                    //             date.setDate(date.getDate() + days);
                    //             return date;
                    //         };
                    //     while (currentDate <= endDate) {
                    //         dates.push(currentDate);
                    //         currentDate = addDays.call(currentDate, 1);
                    //     }
                    //     return dates;
                    // },
                    // getDayFromDate: function (date) {

                    //     var d = new Date(date);
                    //     var weekday = new Array(7);
                    //     weekday[0] = "Sun";
                    //     weekday[1] = "Mon";
                    //     weekday[2] = "Tue";
                    //     weekday[3] = "Wed";
                    //     weekday[4] = "Thu";
                    //     weekday[5] = "Fri";
                    //     weekday[6] = "Sat";

                    //     var n = weekday[d.getDay()];


                    //     return n;
                    // },
                    // isIOT_Tournament: function (uniqueName) {
                    //     if (uniqueName && (uniqueName == 'football-noida-football-test-tournament-09-2017'
                    //         || uniqueName == 'delhi-india-on-track-development-league-football'
                    //     )) {
                    //         return true;
                    //     } else {
                    //         return false;
                    //     }
                    // },
                    // getMonthFromDate: function (date) {

                    //     var d = new Date(date);
                    //     var monthString = new Array(12);
                    //     monthString[0] = "Jan";
                    //     monthString[1] = "Feb";
                    //     monthString[2] = "Mar";
                    //     monthString[3] = "Apr";
                    //     monthString[4] = "May";
                    //     monthString[5] = "Jun";
                    //     monthString[6] = "Jul";
                    //     monthString[7] = "Aug";
                    //     monthString[8] = "Sep";
                    //     monthString[9] = "Oct";
                    //     monthString[10] = "Nov";
                    //     monthString[11] = "Dec";

                    //     var n = monthString[d.getMonth()];


                    //     return n;
                    // },
                    // getAnswerCatetory: function () {
                    //     var cat = ["art_and_craft", "academics", "adventure", "basketball", "board_games", "chess", "candle_making", "debating", "day_care", "dance",
                    //         "outdoor_games", "music", "sketching", "sitar", "hobby", "painting", "yoga", "gardening", "martial_arts", "parenting", "sports",
                    //         "skating", "indoor_games"];
                    //     return cat;
                    // },
                    // dateLieBetweenTwoDates: function (from, to, check) {
                    //     if (this.isNullOrEmpty(check)) {
                    //         check = new Date();
                    //         check = check.getFullYear() + '/' + (check.getMonth() + 1) + '/' + check.getDate();
                    //     }
                    //     var fDate, lDate, cDate;
                    //     fDate = new Date(from);
                    //     lDate = new Date(to);
                    //     cDate = new Date(check);

                    //     var from1 = new Date(fDate.getFullYear(), fDate.getMonth(), fDate.getDate());  // -1 because months are from 0 to 11
                    //     var to1 = new Date(lDate.getFullYear(), lDate.getMonth(), lDate.getDate());
                    //     var check1 = new Date(cDate.getFullYear(), cDate.getMonth(), cDate.getDate());

                    //     return (check1 >= from1 && check1 <= to1);
                    // },
                    // isRegistrationOpen: function (currentTourObj) {
                    //     if (this.dateLieBetweenTwoDates(currentTourObj.tournamentGeneralInfo.tournamentRegStartDate, currentTourObj.tournamentGeneralInfo.lastDateRegistration)) {
                    //         if (!this.isNullOrEmpty(currentTourObj.tournamentGeneralInfo.ticket) && !this.isNullOrEmpty(currentTourObj.tournamentGeneralInfo.ticket.price)) {
                    //             return true;
                    //         } else {
                    //             if (currentTourObj.tournamentGeneralInfo.priceBasis != 'event') {
                    //                 if (currentTourObj.tournamentGeneralInfo.ticket.price && currentTourObj.tournamentGeneralInfo.ticket.price > 0) {
                    //                     return true;
                    //                 }
                    //             } else {

                    //                 if (currentTourObj.tournamentGeneralInfo.isTicketAvailable !== undefined) { // Use the newly added key for the home page instead.
                    //                     return currentTourObj.tournamentGeneralInfo.isTicketAvailable;
                    //                 }

                    //                 for (var i = 0; i <= currentTourObj.tournamentGeneralInfo.events.length - 1; i++) {
                    //                     if (currentTourObj.tournamentGeneralInfo.events[i].ticket && currentTourObj.tournamentGeneralInfo.events[i].ticket.price && currentTourObj.tournamentGeneralInfo.events[i].ticket.price > 0) {
                    //                         return true;
                    //                     }
                    //                 }
                    //             }
                    //         }
                    //     } else {
                    //         return false;
                    //     }
                    // },
                    // checkForIsEventNetworkingType: function (eventObj) {
                    //     if (!eventObj) {
                    //         return false;
                    //     }

                    //     if (eventObj.gameType && eventObj.gameType.name && eventObj.gameType.name && (eventObj.gameType.name).toLowerCase() === 'networking') {
                    //         return true;
                    //     } else {
                    //         return false;
                    //     }
                    // },
                    isSeededBasedLiveMode: function (tournamentObj) {
                        if(!tournamentObj || !tournamentObj.service){
                            return false;
                        }

                        var serviceNameList = ['Skating', 'Arts and Crafts Competition', 'Chess'];
                        var isSeededBasedLiveScore = false;
                        serviceNameList.forEach(function (serviceName) {
                            if (serviceName.toLowerCase() === tournamentObj.service.toLowerCase())
                                isSeededBasedLiveScore = true;
                        });

                        return isSeededBasedLiveScore;
                    },
                    // isRegistrationOpenHome: function (currentTourObj) {
                    //     if (this.dateLieBetweenTwoDates(currentTourObj.tournamentRegStartDate, currentTourObj.lastDateRegistration)) {
                    //         if (!this.isNullOrEmpty(currentTourObj.ticket) && !this.isNullOrEmpty(currentTourObj.ticket.price)) {
                    //             return true;
                    //         } else {
                    //             if (currentTourObj.priceBasis != 'event') {
                    //                 if (currentTourObj.ticket.price && currentTourObj.ticket.price > 0) {
                    //                     return true;
                    //                 }
                    //             } else {
                    //                 for (var i = 0; i <= currentTourObj.events.length - 1; i++) {
                    //                     if (currentTourObj.events[i].ticket && currentTourObj.events[i].ticket.price && currentTourObj.events[i].ticket.price > 0) {
                    //                         return true;
                    //                         break;
                    //                     }
                    //                 }
                    //             }
                    //         }
                    //     } else {
                    //         return false;
                    //     }
                    // },
                    // checkForTBC: function (string) {
                    //     if (!string || string.toLowerCase() == 'tbc' || string.toLowerCase() == 'tbd') {
                    //         return '';
                    //     } else {
                    //         string = string.toLowerCase();
                    //         return string.charAt(0).toUpperCase() + string.slice(1);
                    //     }
                    // },
                    ucFirstAllWords: function (str) {
                        if (str) {
                            var pieces = str.split(" ");
                            if (pieces.length > 0) {
                                for (var i = 0; i < pieces.length; i++) {
                                    var j = pieces[i].charAt(0).toUpperCase();
                                    pieces[i] = j + pieces[i].substr(1);
                                }
                                return pieces.join(" ");
                            } else {
                                return str.charAt(0).toUpperCase() + str.slice(1);
                            }
                        }

                    },
                    // capitalizeFirstLetter: function (string) {
                    //     if (string) {
                    //         string = string.toLowerCase();
                    //     }
                    //     return this.ucFirstAllWords(string);
                    // },
                    removeextratext: function (str) {
                        if (!str) {
                            return
                        }

                        str = str.replace(/ *\([^)]*\) */g, "");
                        str = str.replace('TBC', "");
                        str = str.replace('Tbc', "");
                        str = str.replace('.', "");
                        str = str.split('(')[0];
                        return this.ucFirstAllWords(str);

                    },
                    // getParticipantSubHeading: function (isTeamBasedSports, userObj) {
                    //     if (userObj.schoolName != 'YoGems School') {
                    //         if (!isTeamBasedSports && userObj.schoolName) {
                    //             if (userObj.nick == 'Prerit') {
                    //                 return userObj.schoolName
                    //             } else {
                    //                 return userObj.schoolName + (((userObj.schoolName).indexOf(userObj.schoolCityName) == -1) ? (', ' + userObj.schoolCityName) : (''));
                    //             }
                    //         } else {
                    //             if (userObj && userObj.address && userObj.address.cityName)
                    //                 return userObj.address.cityName;
                    //         }
                    //     }
                    // },
                    // getTournamentImgPath: function (eventObj, imgType) {
                    //     if (!eventObj) {
                    //         return 'https://ap.yogems.com/images/nextsevenevent/thumb/default.jpg';
                    //     }

                    //     var service = ["soccer", "athletics", "handball", "kho_kho", "table_tennis", "swimming", "volleyball", "badminton", "basketball", "lawn_tennis", "chess", "hockey", "cricket", "shooting", "golf", "yoga", "archery", "boxing", "judo", "kabaddi", "skating", "tae_kwon_do"];
                    //     if (eventObj.hasOwnProperty("fileUrl")) {
                    //         return eventObj.fileUrl;
                    //     } else if (eventObj.imagepic) {
                    //         return eventObj.imagepic;
                    //     }
                    //     else if (service.indexOf(eventObj.service.toLowerCase().split(' ').join('_')) != -1) {
                    //         return 'https://ap.yogems.com/images/nextsevenevent/' + (imgType && imgType == 'thumb' ? 'thumb/' : '') + eventObj.service.toLowerCase().split(' ').join('_') + '.jpg';
                    //     } else {
                    //         return 'https://ap.yogems.com/images/nextsevenevent/default.jpg';
                    //     }
                    // },
                    // getTournamentType: function (tournamentObj) {

                    //     if (tournamentObj.tournamentGeneralInfo.isParent && tournamentObj.tournamentGeneralInfo.isParent == 1) {
                    //         return 'aahwanParentTournament';
                    //     } else if ((tournamentObj.tournamentGeneralInfo.isParent == 0 || tournamentObj.tournamentGeneralInfo.isParent == null) && !this.isNullOrEmpty(tournamentObj.tournamentGeneralInfo.parentHash) & tournamentObj.tournamentGeneralInfo.parentHash == '4df9b9f7-ad53-11e6-aad0-020095431bd7') {
                    //         if ((tournamentObj.tournamentGeneralInfo.service).toLowerCase() == 'athletics' || (tournamentObj.tournamentGeneralInfo.service).toLowerCase() == 'skating' || (tournamentObj.tournamentGeneralInfo.service).toLowerCase() == 'table-tennis' || (tournamentObj.tournamentGeneralInfo.service).toLowerCase() == 'lawn tennis' || (tournamentObj.tournamentGeneralInfo.service).toLowerCase() == 'karate' || (tournamentObj.tournamentGeneralInfo.service).toLowerCase() == 'cricket' || (tournamentObj.tournamentGeneralInfo.service).toLowerCase() == 'billiards') {
                    //             return 'aahwanAthleticsTournament';
                    //         } else {
                    //             return 'aahwanChildTournament';
                    //         }

                    //     } else if ((tournamentObj.tournamentGeneralInfo.isParent == 0 || tournamentObj.tournamentGeneralInfo.isParent == null) && !this.isNullOrEmpty(tournamentObj.tournamentGeneralInfo.parentHash)) {
                    //         if ((tournamentObj.tournamentGeneralInfo.service).toLowerCase() == 'athletics' || (tournamentObj.tournamentGeneralInfo.service).toLowerCase() == 'skating' || (tournamentObj.tournamentGeneralInfo.service).toLowerCase() == 'table-tennis' || (tournamentObj.tournamentGeneralInfo.service).toLowerCase() == 'lawn tennis' || (tournamentObj.tournamentGeneralInfo.service).toLowerCase() == 'billiards' || (tournamentObj.tournamentGeneralInfo.service).toLowerCase() == 'karate' || (tournamentObj.tournamentGeneralInfo.service).toLowerCase() == 'rollball') {
                    //             return 'aahwanAthleticsTournament';
                    //         } else {
                    //             return 'aahwanChildTournament';
                    //         }

                    //     } else if ((tournamentObj.tournamentGeneralInfo.service).toLowerCase() == 'athletics' || (tournamentObj.tournamentGeneralInfo.service).toLowerCase() == 'skating') {
                    //         return 'athletics';
                    //     }
                    //     else if (this.isNullOrEmpty(tournamentObj.tournamentGeneralInfo.isParent) && this.isNullOrEmpty(tournamentObj.tournamentGeneralInfo.parentHash)) {
                    //         return 'generalTournament';
                    //     } else {

                    //     }

                    // },
                    // getRegistrationButtonLink: function (eventData) {
                    //     if (!eventData.uniqueName) {
                    //         return "#"
                    //     } 

                    //     var isConfirmationNeeded = false;
                    //     var requestedObj = {}; 
                    //     if (eventData.cityCriteriaMessage && eventData.eligibilityCityList && eventData.eligibilityCityList.length > 0) {
                    //         isConfirmationNeeded = true;
                    //         requestedObj.url = '#';
                    //         requestedObj.msg = eventData.cityCriteriaMessage;
                    //         // requestedObj.subMsg = '*Entry fees is non-refundable.';
                    //         requestedObj.subMsg = STRING_CONST.ENTRY_FEE_NOT_REFUNDABLE;
                    //     }


                    //     if (this.getCookie('yUT') && this.getCookie('yUH')) {
                    //         if (isConfirmationNeeded) {
                    //             return requestedObj;
                    //         } else {
                    //             if (this.loggedInUserType() == 'team') {
                    //                 requestedObj.url = '/teamRegistration?' + eventData.uniqueName;
                    //                 return requestedObj
                    //             } else {
                    //                 // requestedObj.url = '/register/'+ eventData.uniqueName;
                    //                 requestedObj.url = '/register?tourUniqName=' + eventData.uniqueName;
                    //                 return requestedObj
                    //             }
                    //         }
                    //     } else {
                    //         if (isConfirmationNeeded) {
                    //             return requestedObj;
                    //         } else {
                    //             requestedObj.url = '/login?tourUniqName=' + eventData.uniqueName;
                    //             return requestedObj
                    //         }
                    //     }

                    // },
                    // isTeamBasedSports: function (tournamentObj) {

                    //     var teamBasedSportsHashArray = [{ type: 'Cricket', hash: '5a20a074-eda9-11e5-8862-065f74a112cd' },
                    //     { type: 'Volleyball', hash: '200dc25f-eda9-11e5-8862-065f74a112cd' },
                    //     //{type:'stage_"Skating"', hash:'4e43e4d6-eda9-11e5-8862-065f74a112cd'},
                    //     { type: 'Rollball', hash: 'c9f78219-a28f-11e6-bd21-020095431bd7' },
                    //     { type: 'Soccer', hash: 'a43efcdd-eda9-11e5-8862-065f74a112cd' },
                    //         //{type:'Basketball', hash:'1be1a764-eda9-11e5-8862-065f74a112cd'}
                    //     ];
                    //     for (var i = 0; i <= teamBasedSportsHashArray.length - 1; i++) {
                    //         if (teamBasedSportsHashArray[i].hash == tournamentObj.tournamentGeneralInfo.serviceHash) {
                    //             return true;
                    //             break;
                    //         }
                    //     }
                    //     return false;
                    // },
                    // isValidId: function (str) {
                    //     if (str != undefined) {
                    //         var splitInput = str.split(',');
                    //         var pattern = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$';

                    //         var match = true;

                    //         for (var i = 0; i < splitInput.length; i++) {
                    //             if (!splitInput[i].match(pattern)) {
                    //                 match = false;
                    //                 break;
                    //             }
                    //         }
                    //         return match;
                    //     }
                    // },
                    // isValidUrlOrNot: function (type, str) {
                    //     if (str.indexOf(type) == 0) {
                    //         return true;
                    //     } else {
                    //         return false;
                    //     }
                    // },
                    // validateForm: function (formObj, currentVal) {
                    //     // console.log(formObj,'---',currentVal);
                    // },
                    // getBlobObjFromBase64Data: function (b64Data, contentType, sliceSize) {
                    //     contentType = contentType || '';
                    //     sliceSize = sliceSize || 512;

                    //     var byteCharacters = atob(b64Data);
                    //     var byteArrays = [];

                    //     for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                    //         var slice = byteCharacters.slice(offset, offset + sliceSize);

                    //         var byteNumbers = new Array(slice.length);
                    //         for (var i = 0; i < slice.length; i++) {
                    //             byteNumbers[i] = slice.charCodeAt(i);
                    //         }

                    //         var byteArray = new Uint8Array(byteNumbers);

                    //         byteArrays.push(byteArray);
                    //     }

                    //     var blob = new Blob(byteArrays, { type: contentType });
                    //     return blob;
                    // },
                    // validateDateForEvent: function (obj) {
                    //     if (!this.isNullOrEmpty(obj.dateOfBirth) && !this.isNullOrEmpty(obj.gender)) {
                    //         var cutOfDate = (this.changeDateFormat((obj.tourCutOfDate), 'mm/dd/yy')).toString();
                    //         var dateOfBirth = (this.changeDateFormat((obj.dateOfBirth), 'mm/dd/yy')).toString();
                    //         var userAge = this.getUserAge(cutOfDate, dateOfBirth);
                    //         if (userAge.years < obj.eventDetail.age.upperLimit) {
                    //             if (obj.eventDetail.userGender.name == obj.gender) {
                    //                 return { 'state': true, 'typeFor': 'both' };
                    //             } else {
                    //                 return { 'state': false, 'typeFor': 'gender' };
                    //             }
                    //         } else if (userAge.years == obj.eventDetail.age.upperLimit && userAge.days == 0) {
                    //             if (obj.eventDetail.userGender.name == obj.gender) {
                    //                 return { 'state': true, 'typeFor': 'both' };
                    //             } else {
                    //                 return { 'state': false, 'typeFor': 'gender' };
                    //             }
                    //         } else {
                    //             if (obj.eventDetail.userGender.name == obj.gender) {
                    //                 return { 'state': false, 'typeFor': 'age' };
                    //             } else {
                    //                 return { 'state': false, 'typeFor': 'gender' };
                    //             }
                    //         }
                    //     } else if (!this.isNullOrEmpty(obj.gender)) {
                    //         if (obj.eventDetail.userGender.name == obj.gender) {
                    //             return { 'state': true, 'typeFor': 'both' };
                    //         } else {
                    //             return { 'state': false, 'typeFor': 'gender' };
                    //         }
                    //     } else {

                    //     }
                    // },
                    // calculateUserAge: function (dateOfBirth) {
                    //     var userAgeObj = {};
                    //     var currentDate = new Date();
                    //     var currentDateForCalculate = (currentDate.getMonth() + 1) + '/' + currentDate.getDate() + '/' + currentDate.getFullYear();
                    //     var userDateOfBirth = (this.changeDateFormat((dateOfBirth), 'mm/dd/yy')).toString();
                    //     userAgeObj = this.getUserAge(currentDateForCalculate, userDateOfBirth);
                    //     return userAgeObj;
                    // },
                    // getUserAge: function (ageCutOffDate, dateString) {
                    //     var now = new Date(ageCutOffDate);
                    //     var today = new Date(now.getYear(), now.getMonth(), now.getDate());

                    //     var yearNow = now.getYear();
                    //     var monthNow = now.getMonth();
                    //     var dateNow = now.getDate();

                    //     var dob = new Date(dateString.substring(6, 10),
                    //         dateString.substring(0, 2) - 1,
                    //         dateString.substring(3, 5)
                    //     );

                    //     var yearDob = dob.getYear();
                    //     var monthDob = dob.getMonth();
                    //     var dateDob = dob.getDate();
                    //     var age = {};
                    //     var ageString = "";
                    //     var yearString = "";
                    //     var monthString = "";
                    //     var dayString = "";
                    //     var ageObj = {};


                    //     var yearAge = yearNow - yearDob;

                    //     if (monthNow >= monthDob)
                    //         var monthAge = monthNow - monthDob;
                    //     else {
                    //         yearAge--;
                    //         var monthAge = 12 + monthNow - monthDob;
                    //     }

                    //     if (dateNow >= dateDob)
                    //         var dateAge = dateNow - dateDob;
                    //     else {
                    //         monthAge--;
                    //         var dateAge = 31 + dateNow - dateDob;

                    //         if (monthAge < 0) {
                    //             monthAge = 11;
                    //             yearAge--;
                    //         }
                    //     }

                    //     age = {
                    //         years: yearAge,
                    //         months: monthAge,
                    //         days: dateAge
                    //     };

                    //     if (age.years > 1) yearString = " years";
                    //     else yearString = " year";
                    //     if (age.months > 1) monthString = " months";
                    //     else monthString = " month";
                    //     if (age.days > 1) dayString = " days";
                    //     else dayString = " day";


                    //     if ((age.years > 0) && (age.months > 0) && (age.days > 0)) {
                    //         ageObj.years = age.years;
                    //         ageObj.months = age.months;
                    //         ageObj.days = age.days;
                    //         ageObj.year = age.years + 1;
                    //         ageString = age.years + yearString + ", " + age.months + monthString + ", and " + age.days + dayString + " old.";
                    //     } else if ((age.years == 0) && (age.months == 0) && (age.days > 0)) {
                    //         ageObj.years = age.years;
                    //         ageObj.months = age.months;
                    //         ageObj.days = age.days;
                    //         ageObj.year = age.years + 1;
                    //         ageString = "Only " + age.days + dayString + " old!";
                    //     } else if ((age.years > 0) && (age.months == 0) && (age.days == 0)) {
                    //         ageObj.years = age.years;
                    //         ageObj.months = age.months;
                    //         ageObj.days = age.days;
                    //         ageObj.year = age.years;
                    //         ageString = age.years + yearString + " old. Happy Birthday!!";
                    //     } else if ((age.years > 0) && (age.months > 0) && (age.days == 0)) {
                    //         ageObj.years = age.years;
                    //         ageObj.months = age.months;
                    //         ageObj.days = age.days;
                    //         ageObj.year = age.years + 1;
                    //         ageString = age.years + yearString + " and " + age.months + monthString + " old.";
                    //     } else if ((age.years == 0) && (age.months > 0) && (age.days > 0)) {
                    //         ageObj.years = age.years;
                    //         ageObj.months = age.months;
                    //         ageObj.days = age.days;
                    //         ageObj.year = age.years + 1;
                    //         ageString = age.months + monthString + " and " + age.days + dayString + " old.";
                    //     } else if ((age.years > 0) && (age.months == 0) && (age.days > 0)) {
                    //         ageObj.years = age.years;
                    //         ageObj.months = age.months;
                    //         ageObj.days = age.days;
                    //         ageObj.year = age.years + 1;
                    //         ageString = age.years + yearString + " and " + age.days + dayString + " old.";
                    //     } else if ((age.years == 0) && (age.months > 0) && (age.days == 0)) {
                    //         ageObj.years = age.years;
                    //         ageObj.months = age.months;
                    //         ageObj.days = age.days;
                    //         ageObj.year = age.years + 1;
                    //         ageString = age.months + monthString + " old.";
                    //     } else {
                    //         ageObj.years = age.years;
                    //         ageObj.months = age.months;
                    //         ageObj.days = age.days;
                    //         ageObj.year = age.years;
                    //         ageString = "Oops! Could not calculate age!";
                    //     }

                    //     ageObj.string = ageString

                    //     return ageObj;
                    // },
                    // getYearMonthDate: function () {
                    //     var obj = {};
                    //     var currentTime = new Date();
                    //     obj.fullDate = currentTime;
                    //     obj.year = currentTime.getFullYear();
                    //     obj.month = currentTime.getMonth() + 1;
                    //     obj.date = currentTime.getDate();
                    //     return obj;
                    // },
                    // checksamemonth: function (strstart, strend) {
                    //     if (this.isNullOrEmpty(strend)) {
                    //         return 1;
                    //     } else if ($filter('date')(new Date(strstart), 'MMM d') == $filter('date')(new Date(strend), 'MMM d')) {
                    //         return 4;
                    //     } else if ($filter('date')(new Date(strstart), 'MMM') != $filter('date')(new Date(strend), 'MMM')) {
                    //         return 3;
                    //     } else if ($filter('date')(new Date(strstart), 'MMM') == $filter('date')(new Date(strend), 'MMM')) {
                    //         return 2
                    //     } else {
                    //         return 5
                    //     }


                    // },
                    // getUserProfileImage: function (userData) {
                    //     if(!userData){
                    //         return 'https://ap.yogems.com/images/dummy-icon.png';
                    //     }

                    //     if (userData.profilePicUrl) {
                    //         return userData.profilePicUrl;
                    //     } else if (userData.picData) {
                    //         return userData.picData;
                    //     } else {
                    //         return 'https://ap.yogems.com/images/dummy-icon.png';
                    //     }
                    // },
                    // timeConverter: function (UNIX_timestamp) {
                    //     var date = new Date(Number(UNIX_timestamp));
                    //     date = this.changeDateFormat((date), 'special');
                    //     return date;
                    // },
                    // getLocalTimeFromUTC: function (UNIX_timestamp) {
                    //     var date = new Date(Number(UNIX_timestamp));
                    //     date = this.changeDateFormat((date), 'time12HourFormat');
                    //     return date;
                    // },
                    // changeDateFormat: function (str, format) {

                    //     if (!str)
                    //         return;
 
                    //     if (format == 'yy-mm-dd') {
                    //         return str = str.split('/')[2] + '-' + str.split('/')[1] + '-' + str.split('/')[0];
                    //     }
                    //     if (format == 'yy/mm/dd') { 
                    //         return str = str.split('/')[2] + '/' + str.split('/')[1] + '/' + str.split('/')[0];
                    //     } else if (format == 'dd/mm/yy') {
                    //         return str = str.split('/')[2] + '/' + str.split('/')[1] + '/' + str.split('/')[0];
                    //     } else if (format == 'mm/dd/yy') {
                    //         var date = ((parseInt(str.split('/')[1]) < 10) && ((str.split('/')[1]).length == 1)) ? (date = '0' + str.split('/')[1]) : (date = str.split('/')[1]);
                    //         var month = ((parseInt(str.split('/')[2]) < 10) && ((str.split('/')[2]).length == 1)) ? (month = '0' + str.split('/')[2]) : (month = str.split('/')[2]);
                    //         return str = date + '/' + month + '/' + str.split('/')[0];
                    //     } else if (format == 'special') {
                    //         str = $filter('date')(new Date(str), 'MMM d, yyyy');
                    //         return str;
                    //     } else if (format == 'specialregopen') {
                    //         str = $filter('date')(new Date(str), 'MMM d');
                    //         return str;
                    //     } else if (format == 'filter') {
                    //         str = $filter('date')(new Date(str), 'yyyy/M/dd');
                    //         return str;
                    //     }
                    //     else if (format == 'specialDateTime') {
                    //         str = $filter('date')(new Date(str), 'MMM d, yyyy') + '  ' + str.split(' ')[1] + ' ' + str.split(' ')[2];
                    //         return str;
                    //     } else if (format == 'special24DateTime') {
                    //         var date = new Date(str);
                    //         var hours = date.getHours();
                    //         var minutes = date.getMinutes();
                    //         var ampm = hours >= 12 ? 'pm' : 'am';
                    //         hours = hours % 12;
                    //         hours = hours ? hours : 12; 
                    //         minutes = minutes < 10 ? '0' + minutes : minutes;
                    //         var strTime = hours + ':' + minutes + ' ' + ampm;
                    //         str = $filter('date')(new Date(str), 'MMM d, yyyy') + ' at ' + strTime;
                    //         return str;
                    //     } else if (format == 'specialmonth') {
                    //         str = $filter('date')(new Date(str), 'MMM');
                    //         return str;


                    //     } else if (format == 'specialdate') {
                    //         str = $filter('date')(new Date(str), 'd');
                    //         return str;

                    //     } else if (format == 'serverdate') {
                    //         str = $filter('date')(new Date(str), 'yyyy-MM-dd');
                    //         return str;
                    //     } else if (format == 'specialyear') {
                    //         str = $filter('date')(new Date(str), 'yyyy');
                    //         return str;
                    //     } else if (format == 'time') {
                    //         str = $filter('date')(new Date(str), 'hh:mm a');
                    //         return str;
                    //     } else if (format == 'server') {
                    //         str = $filter('date')(new Date(str), 'yyyy/MM/dd');
                    //         return str;
                    //     }
                    //     else {

                    //     }


                    //     switch (format) {
                    //         case "time12HourFormat":
                    //             var date = new Date(str);
                    //             var hours = date.getHours();
                    //             var minutes = date.getMinutes();
                    //             var ampm = hours >= 12 ? 'pm' : 'am';
                    //             hours = hours % 12;
                    //             hours = hours ? hours : 12;  
                    //             minutes = minutes < 10 ? '0' + minutes : minutes;
                    //             var strTime = hours + ':' + minutes + ' ' + ampm;
                    //             str = strTime;
                    //             return str;

                    //     }

                    // },
                    // compairDateWithCurrentDate: function (str) {
                    //     var strdate = new Date(str);
                    //     var currentdate = new Date();
                    //     if (currentdate >= strdate) {
                    //         return true
                    //     } else {
                    //         return false;
                    //     }

                    // },
                    // compairTwoDate: function (fdate, sdate) {
                    //     var strfdate = new Date(fdate);
                    //     var strsdate = new Date(sdate);

                    //     if (strfdate >= strsdate) {
                    //         return true
                    //     } else {
                    //         return false;
                    //     }

                    // },
                    // datediffforreg: function (datestr, type) {

                    //     var date2 = new Date(); 
                    //     if (type && type == 'tillLastMomentOfDay') {
                    //         var date1 = new Date(datestr);
                    //         date1 = date1.getFullYear() + "/" + (date1.getMonth() + 1) + "/" + (date1.getDate() + 1);
                    //         date1 = new Date(date1);
                    //     } else {
                    //         var date1 = new Date(datestr);
                    //     }
                    //     var timeDiff = (date2.getTime() - date1.getTime());
                    //     var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
                    //     return diffDays;
                    // },
                    // compairlastDateWithCurrentDate: function (str) {
                    //     var strdate = new Date(str);
                    //     var today = new Date();
                    //     var dd = today.getDate();
                    //     var mm = today.getMonth() + 1;  

                    //     var yyyy = today.getFullYear();
                    //     if (dd < 10) {
                    //         dd = '0' + dd
                    //     }
                    //     if (mm < 10) {
                    //         mm = '0' + mm
                    //     }
                    //     var today = yyyy + '/' + mm + '/' + dd;
                    //     var currentdate = new Date(today);
                    //     if (strdate >= currentdate) {
                    //         return true
                    //     } else {
                    //         return false;
                    //     }

                    // },
                    // removeDuplicacyFromArray: function (list) {
                    //     var result = [];
                    //     $.each(list, function (i, e) {
                    //         if ($.inArray(e, result) == -1) result.push(e);
                    //     });
                    //     return result;
                    // },
                    // removeDupObjectFromArray: function (list, keyname) {
                    //     var non_duplidated_data = _.uniq(list, keyname);
                    //     return non_duplidated_data;
                    // },

                    // binarySearch: function binarySearch(arr, value, compare) {
                    //     var thisInstance = this;

                    //     var n = arr.length;
                    //     if (n <= 0)
                    //         return -1;

                    //     this.process = function (compare) {
                    //         var st = 0;
                    //         var end = n - 1;
                    //         while (st <= end) {
                    //             var mid = Math.floor((st + end) / 2);

                    //             if (compare(arr[mid], value) === 0)
                    //                 return mid;
                    //             else
                    //                 if (compare(arr[mid], value) > 0)
                    //                     end = mid - 1;
                    //                 else
                    //                     if (compare(arr[mid], value) < 0)
                    //                         st = mid + 1;
                    //         }

                    //         return -1;

                    //     };


                    //     this.strCompare = function (str1, str2) {
                    //         return str1.localeCompare(str2);
                    //     };

                    //     this.numCompare = function (num1, num2) {
                    //         return num1 - num2;
                    //     };

                    //     var currCompareFunc = compare;

                    //     if (!currCompareFunc) {
                    //         var type = typeof arr[0];
                    //         if (type === 'string')
                    //             currCompareFunc = thisInstance.strCompare;
                    //         else if (type === 'number')
                    //             currCompareFunc = thisInstance.numCompare;
                    //         else
                    //             throw "No compare function provided !!!!!!!";
                    //     };


                    //     return thisInstance.process(currCompareFunc);

                    // }, // end of binary search class

                    // timeElapsed: function timeDifference(previous) {
                    //     var current = Date.now();
                    //     var msPerMinute = 60 * 1000;
                    //     var msPerHour = msPerMinute * 60;
                    //     var msPerDay = msPerHour * 24;
                    //     var msPerMonth = msPerDay * 30;
                    //     var msPerYear = msPerDay * 365;

                    //     var elapsed = current - previous;

                    //     if (elapsed < msPerMinute) {
                    //         return Math.round(elapsed / 1000) + ' seconds ago';
                    //     } else if (elapsed < msPerHour) {
                    //         return Math.round(elapsed / msPerMinute) + ' minutes ago';
                    //     } else if (elapsed < msPerDay) {
                    //         return Math.round(elapsed / msPerHour) + ' hours ago';
                    //     } else if (elapsed < msPerMonth) {
                    //         return Math.round(elapsed / msPerDay) + ' days ago';
                    //     } else if (elapsed < msPerYear) {
                    //         return Math.round(elapsed / msPerMonth) + ' months ago';
                    //     } else {
                    //         return Math.round(elapsed / msPerYear) + ' years ago';
                    //     }
                    // },

                    // getMutualFriendText: function (mutualFriendArray, type) {
                    //     if (!this.isNullOrEmpty(mutualFriendArray)) {
                    //         mutualFriendArray.totalCount = parseInt(mutualFriendArray.totalCount);
                    //         var str = '';
                    //         if (mutualFriendArray.totalCount == 0) {
                    //             str = '';
                    //         } else if (mutualFriendArray.totalCount == 1) {
                    //             str = '1 mutual friend';
                    //         } else if (mutualFriendArray.totalCount > 1) {
                    //             str = mutualFriendArray.totalCount + ' mutual friends';
                    //         } else {

                    //         }
                    //         return str;
                    //     } else {
                    //         return '';
                    //     }

                    // },
                    // isSupportedFileForUpload: function (fileObj, RequestedFileType) {
                    //     if (!fileObj.name)
                    //         return false;

                    //     var fileType = ((fileObj.name).split(".").pop()).toLowerCase();
                    //     var supportedImageFilesType = ['png', 'jpg', 'jpeg'];
                    //     var supportedAllFilesType = ['doc', 'pdf', 'png', 'jpg', 'jpeg'];
                    //     if (RequestedFileType == 'image') {
                    //         if ((supportedImageFilesType).indexOf(fileType) != -1) {
                    //             return true;
                    //         } else {
                    //             return false;
                    //         }
                    //     } else if (RequestedFileType == 'allFiles') {
                    //         if ((supportedAllFilesType).indexOf(fileType) != -1) {
                    //             return true;
                    //         } else {
                    //             return false;
                    //         }
                    //     } else {

                    //     }

                    // },
                    // makeFileObj: function (fileObj) {
                    //     if (!fileObj)
                    //         return false;

                    //     if (!fileObj.extractedDate) {
                    //         fileObj.extractedDate = null;
                    //     }
                    //     if (!fileObj.likeCount) {
                    //         fileObj.likeCount = 0;
                    //     }
                    //     if (!fileObj.fileName) {
                    //         fileObj.fileName = '';
                    //     }
                    //     if (!fileObj.photoTitle) {
                    //         fileObj.photoTitle = '';
                    //     }
                    //     if (!fileObj.photoLocation) {
                    //         fileObj.photoLocation = '';
                    //     }
                    //     if (!fileObj.photoPrivacyLevel) {
                    //         fileObj.photoPrivacyLevel = 0;
                    //     }
                    //     if (!fileObj.photoType) {
                    //         fileObj.photoType = 'normal';
                    //     }
                    //     if (!fileObj.type) {
                    //         fileObj.type = fileObj.photoType;
                    //     }
                    //     if (!fileObj.location) {
                    //         fileObj.location = fileObj.photoLocation;
                    //     }
                    //     if (!fileObj.title) {
                    //         fileObj.title = fileObj.photoTitle;
                    //     }
                    //     if (!fileObj.privacyLevel) {
                    //         fileObj.privacyLevel = fileObj.photoPrivacyLevel;
                    //     }
                    //     if (!fileObj.photoDescription) {
                    //         if (fileObj.description) {
                    //             fileObj.photoDescription = fileObj.description;
                    //         } else {
                    //             fileObj.photoDescription = '';
                    //         }
                    //     }
                    //     if (!fileObj.hash && fileObj.photoHash) {
                    //         fileObj.hash = fileObj.photoHash;
                    //     }


                    //     return fileObj;

                    // }
                };
            }]) 


            .filter('toTrusted', function ($sce) {
                return function (value) {
                    return $sce.trustAsHtml(value);
                };
            });





(function () {
      console.log = function() {}; 
})();
