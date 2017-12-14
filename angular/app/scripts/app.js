'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'FBAngular',
    //'ui.bootstrap',
    //'angular-loading-bar',
  ])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider', '$httpProvider', '$locationProvider',
        function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider, $httpProvider, $locationProvider) {
    
    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

     $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'views/dashboard/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.inject(
                {
                    name:'sbAdminApp',
                    files:[
                    // 'scripts/directives/header/header.js',
                    // 'scripts/directives/header/header-notification/header-notification.js',
                    // 'scripts/directives/sidebar/sidebar.js',
                    // 'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                    ]
                })
                // ,
                // $ocLazyLoad.load(
                // {
                //    name:'toggle-switch',
                //    files:[
                //           "bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                //           "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                //       ]
                // })
                // $ocLazyLoad.load(
                // {
                //   name:'ngAnimate',
                //   files:['bower_components/angular-animate/angular-animate.js']
                // }),
                // $ocLazyLoad.load(
                // {
                //   name:'ngCookies',
                //   files:['bower_components/angular-cookies/angular-cookies.js']
                // }),
                // $ocLazyLoad.load(
                // {
                //   name:'ngResource',
                //   files:['bower_components/angular-resource/angular-resource.js']
                // }),
                // $ocLazyLoad.load(
                // {
                //   name:'ngSanitize',
                //   files:['bower_components/angular-sanitize/angular-sanitize.js']
                // }),
                // $ocLazyLoad.load(
                // {
                //   name:'ngTouch',
                //   files:['bower_components/angular-touch/angular-touch.js']
                // })
            }
        }
    })
      .state('home',{
        url:'/home',
        controller: 'yoGemsHomeScreenCtrl',
        templateUrl:'views/yoGems/pages/yoGemsLiveHomeScreen.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              //'scripts/controllers/main.js',
              'scripts/yoGems/controllers/yoGemsLiveHomeScreen.js',
              // 'scripts/directives/timeline/timeline.js',
              // 'scripts/directives/notifications/notifications.js',
              // 'scripts/directives/chat/chat.js',
              // 'scripts/directives/dashboard/stats/stats.js'
              ]
            })
          }
        }
      })

      // .state('liveScore',{ 
      //   url:'/live', 
      //   template: '<live-match-view></live-match-view>',  
      //   resolve: {
      //     loadMyFiles:function($ocLazyLoad) {
      //       return $ocLazyLoad.load({
      //         name:'sbAdminApp',
      //         files:[
      //         'scripts/yoGems/controllers/liveScoringCtrl.js',
      //         'scripts/yoGems/directives/badmintonViewLiveScore.js',
      //         'scripts/yoGems/service/tournamentLiveService.js', 
      //         ]
      //       })
      //     }
      //   }
      // })

      // .state('liveScoreCourt',{ 
      //   url:'/live/:courtNumber', 
      //   template: '<live-match-view></live-match-view>',  
      //   resolve: {
      //     loadMyFiles:function($ocLazyLoad) {
      //       return $ocLazyLoad.load({
      //         name:'sbAdminApp',
      //         files:[
      //         'scripts/yoGems/controllers/liveScoringCtrl.js',
      //         'scripts/yoGems/directives/badmintonViewLiveScore.js',
      //         'scripts/yoGems/service/tournamentLiveService.js', 
      //         ]
      //       })
      //     }
      //   }
      // })

      .state('liveScoreMatchView',{ 
        url:'/live/:tournamentHash', 
        template: '<live-match-view></live-match-view>',  
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'scripts/yoGems/controllers/liveScoringCtrl.js',
              'scripts/yoGems/directives/badmintonViewLiveScore.js',
              'scripts/yoGems/service/tournamentLiveService.js', 
              ]
            })
          }
        }
      })
      .state('liveScoreMatchViewOfCourt',{ 
        url:'/live/court/:courtNumber', 
        template: '<live-match-view></live-match-view>',  
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'scripts/yoGems/controllers/liveScoringCtrl.js',
              'scripts/yoGems/directives/badmintonViewLiveScore.js',
              'scripts/yoGems/service/tournamentLiveService.js', 
              ]
            })
          }
        }
      })

      .state('liveScore',{ 
        url:'/live/:tournamentHash/:courtNumber', 
        template: '<live-match-view></live-match-view>',  
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'scripts/yoGems/controllers/liveScoringCtrl.js',
              'scripts/yoGems/directives/badmintonViewLiveScore.js',
              'scripts/yoGems/service/tournamentLiveService.js', 
              ]
            })
          }
        }
      })

  //     .state('dashboard.form',{
  //       templateUrl:'views/form.html',
  //       url:'/form'
  //   })
  //     .state('dashboard.blank',{
  //       templateUrl:'views/pages/blank.html',
  //       url:'/blank'
  //   })
  //     .state('login',{
  //       templateUrl:'views/pages/login.html',
  //       url:'/login'
  //   })
  //     .state('dashboard.chart',{
  //       templateUrl:'views/chart.html',
  //       url:'/chart',
  //       controller:'ChartCtrl',
  //       resolve: {
  //         loadMyFile:function($ocLazyLoad) {
  //           return $ocLazyLoad.load({
  //             name:'chart.js',
  //             files:[
  //               'bower_components/angular-chart.js/dist/angular-chart.min.js',
  //               'bower_components/angular-chart.js/dist/angular-chart.css'
  //             ]
  //           }),
  //           $ocLazyLoad.load({
  //               name:'sbAdminApp',
  //               files:['scripts/controllers/chartContoller.js']
  //           })
  //         }
  //       }
  //   })
  //     .state('dashboard.table',{
  //       templateUrl:'views/table.html',
  //       url:'/table'
  //   })
  //     .state('dashboard.panels-wells',{
  //         templateUrl:'views/ui-elements/panels-wells.html',
  //         url:'/panels-wells'
  //     })
  //     .state('dashboard.buttons',{
  //       templateUrl:'views/ui-elements/buttons.html',
  //       url:'/buttons'
  //   })
  //     .state('dashboard.notifications',{
  //       templateUrl:'views/ui-elements/notifications.html',
  //       url:'/notifications'
  //   })
  //     .state('dashboard.typography',{
  //      templateUrl:'views/ui-elements/typography.html',
  //      url:'/typography'
  //  })
  //     .state('dashboard.icons',{
  //      templateUrl:'views/ui-elements/icons.html',
  //      url:'/icons'
  //  })
  //     .state('dashboard.grid',{
  //      templateUrl:'views/ui-elements/grid.html',
  //      url:'/grid'
  //  })

  // $urlRouterProvider.otherwise('/signin');
    $locationProvider.html5Mode({enabled: true, requireBase: false});
  }])
.run(function($rootScope, $window, $location, GoogleTagManager) {
            $rootScope.$on('$viewContentLoaded', function(event,data) {
        
                var path= $location.path(),
                    absUrl = $location.path(),
                    virtualUrl = absUrl.substring(absUrl.indexOf(path));
                    if(data && data.modeTye == 'yoGemsDefined'){
                        
                        GoogleTagManager.push({ 'event': 'vpv', 'page.url':data.myUrl, 'page.title' : data.myTitle});
                    }
            });
        })
        . service('GoogleTagManager', function($window) {
            this.push = function(data) {
                try {
                    
                    $window.dataLayer.push(data);
                } catch (e) {}
            };
        })

;

    
