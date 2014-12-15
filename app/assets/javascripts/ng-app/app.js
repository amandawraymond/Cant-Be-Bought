angular
    .module('myApp', [
        'ngAnimate',
        'ngSanitize',
        'ui.router',
        'ui.bootstrap',
        'ct.ui.router.extras',
        'templates'
    ])

    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
        function ($stateProvider, $urlRouterProvider, $locationProvider ) {

    $stateProvider
        .state('dashboard', {
            abstract: true,
            url: '/dashboard',
            templateUrl: 'dashboard/layout.html',
            controller: 'LayoutCtrl'
        })
            // the default route when someone hits dashboard
            .state('dashboard.people', {
                url: '',
                templateUrl: 'dashboard/people.html',
                controller: 'PeopleCtrl'
            })
        
            .state('dashboard.person_detail', {
                url: '/person_detail',
                templateUrl: 'dashboard/person_detail.html',
                controller: 'PersonDetailCtrl'
            })

            .state('dashboard.person_info', {
                url: '/person_info',
                templateUrl: 'dashboard/person_info.html',
                controller: 'PersonInfoCtrl'
            })


    // default fall back route
    $urlRouterProvider.otherwise('/dashboard');

}]);