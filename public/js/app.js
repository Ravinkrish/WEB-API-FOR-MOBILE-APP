var webapp = angular.module('webapp', ['ui.router','angularUtils.directives.dirPagination','naif.base64','ui.bootstrap','ui.bootstrap.datetimepicker']);

   webapp.config(function($stateProvider, $urlRouterProvider) {

       $urlRouterProvider.otherwise('/candidate');

       $stateProvider

       // HOME STATES AND NESTED VIEWS ========================================
           .state('about', {
               url: '/Achievements',
               templateUrl: 'achievements.html',
               controller:'AchievementCtrl'
           })

           .state('canvas', {
              url: '/canvas',
              templateUrl: 'canvas.html',
              controller:'CanvasCtrl'


          })

           .state('single', {
              url: '/single',
              templateUrl: 'single.html',
          })
          .state('contact', {
            url: '/contact',
            templateUrl: 'contact.html',
            controller:'ContactCtrl'
          })
          .state('results', {
            url: '/Events',
            templateUrl: 'events.html',
            controller:'EventCtrl'
          })

          .state('codes', {
          url: '/codes',
          templateUrl: 'codes.html',
        })

           // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
           .state('home', {
               url: '/candidate',
               templateUrl: 'candidate.html',
               controller:'CandidateCtrl'
                });

   });