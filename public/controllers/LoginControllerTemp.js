/**
 * Created by MMOHAMM on 11/25/2015.
 */
'use strict';

(function(){

    angular.module('com.td.oca.examplePersonal')
        .controller('LoginController',['$http','$scope','$state','$rootScope','$modal', function ( $http, $scope, $state, $rootScope, $modal) {

            $scope.pageTitle = 'Login';
            $scope.UserProfile = {};
            $scope.loginuser = true;
            $scope.loggeduser = false;
            $rootScope.loggedUser = $scope.loggeduser;

            var Users = [
                {
                    "username": "Bell1",
                    "email": "test@gmail.com",
                    "phone": 8132055478,
                    "password": '123',
                    "id": 1
                },
                {
                    "username": "Octavius",
                    "email": "Octavius@gmail.com",
                    "phone": 8132055478,
                    "password": '123',
                    "id": 2
                },
                {
                    "username": "Alexis",
                    "email": "Alexis@gmail.com",
                    "phone": 8132055478,
                    "password": '123',
                    "id": 3
                },
                {
                    "username": "Colton",
                    "email": "Colton@gmail.com",
                    "phone": 8132055478,
                    "password": '123',
                    "id": 4
                },
                {
                    "username": "Abdul",
                    "email": "Abdul@gmail.com",
                    "phone": 8132055478,
                    "password": '123',
                    "id": 5
                },
                {
                    "username": "Ian",
                    "email": "Ian@gmail.com",
                    "phone": 8132055478,
                    "password": '123',
                    "id": 6
                },
                {
                    "username": "Britanney",
                    "email": "Britanney@gmail.com",
                    "phone": 8132055478,
                    "password": '123',
                    "id": 7
                },
                {
                    "username": "Geraldine",
                    "email": "Geraldine@gmail.com",
                    "phone": 8132055478,
                    "password": '123',
                    "id": 8
                },
                {
                    "username": "Geral",
                    "email": "Geral@gmail.com",
                    "phone": 8132055478,
                    "password": '123',
                    "id": 9
                },
                {
                    "username": "GeralIan",
                    "email": "GeralIan@gmail.com",
                    "phone": 8132055478,
                    "password": '123',
                    "id": 10
                },
                {
                    "username": "Mush",
                    "email": "Mush@gmail.com",
                    "phone": 8132055478,
                    "password": '123',
                    "id": 11
                }];

            $scope.login = function(){
                var username = $scope.UserProfile.username;
                var password = $scope.UserProfile.password;
                $rootScope.UserName = username;
                console.log(username);
                console.log(password);

                angular.forEach(Users, function(User){
                    if(User.username === $scope.UserProfile.username && User.password === $scope.UserProfile.password){
                        $scope.isCollapsed6 = false;
                        $scope.errorLogin = false;
                        $scope.appLoading = true;
                        $scope.loginuser = false;
                        $scope.loggeduser = true;
                        $rootScope.loggedUser = $scope.loggeduser;
                        var Collapse = $scope.isCollapsed6;
                        $scope.ok();
                        $state.go('td-he-menu',{'referer': 'Collapse'},{reload: true});
                        console.log('Pass');
                    }
                    else{
                        $scope.errorLogin = true;
                    }
                });
            }

            $scope.logout = function(){
                $scope.UserProfile = {};
            }

            $scope.open = function () {
                $modal.open({
                    templateUrl: 'tpl/LoginModal.tpl.html',
                    controller: 'LoginControllerModalInstanceCtrl',
                    windowClass: 'modal-fit',
                    scope: $scope
                });
            };
        }])
        .controller('LoginControllerModalInstanceCtrl',['$scope','$modalInstance',function($scope, $modalInstance){
            $scope.ok = function(){
                $modalInstance.close($scope);
            };

            $scope.cancel = function() {
                $modalInstance.dismiss('cancel');
            };
        }]);
})();