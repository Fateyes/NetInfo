/**
 * Created by fx50 on 2017/4/24.
 */
angular.module('header',['ngRoute'])
    .controller('headerCtrl',function () {

    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/',{templateUrl:'../html/b.html'})
            .when('/themeMarket',{templateUrl:'themeMarket.html'})
            .when('/themeClass',{templateUr:'themeClass.html'})
            .when('/studyMonth',{templateUrl:'studyMonth.html'})
            .when('/writeExperience',{templateUrl:'writeException.html'})
            .when('/studyReport',{templateUr:'studyReport.html'})
            .when('/test',{templateUrl:'test.html'})

    });