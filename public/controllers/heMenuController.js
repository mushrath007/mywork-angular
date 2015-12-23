/**
 * Created by MMOHAMM on 11/25/2015.
 */
'use strict';

(function(){

    angular.module('com.td.oca.examplePersonal')
        .controller('CollapseDemoCtrl',function ($scope, $state){
                $scope.isCollapsed = false;

                $scope.Continue = function(){
                    $state.go("td-stock-productList");
                };
              })

        .controller('Ctrl', function ($scope) {
            $scope.$validationOptions = {
                debounce: 1500,                // set the debounce globally
                displayOnlyLastErrorMsg: false, // display only last error message on each element (false by default)
                preValidateFormElements: false // pre-validate all form elements, false by default
            };
        })

        .controller('CtrlValidationDirective', ['$q', '$scope', 'validationService', function ($q, $scope, validationService) {
            // you can change default debounce globally
            $scope.$validationOptions = { debounce: 1500, preValidateFormElements: false };

            // if we want to use the invalid_pattern_data locale translation as an alternateText (:alt=)
            // then we need to supply an extra 'data' variable (as defined in the JSON locale) of what we expect the search pattern on our input4
            $scope.translationData = { data: 'YYWW' };

            // remove a single element ($scope.form1, string)
            // OR you can also remove multiple elements through an array type .removeValidator($scope.form1, ['input2','input3'])
            $scope.removeInputValidator = function ( elmName ) {
                new validationService().removeValidator($scope.form1, elmName);
            };
            $scope.resetForm = function() {
                new validationService().resetForm($scope.form1);
                $scope.form1=
                {
                    emptyAllInputValues: true,  // user filled some input already, do you want to empty all these input values? False by default
                    removeAllValidators: true   // do you want to remove all validators? False by default.
                }
            };
            $scope.submitForm = function() {
                if(new validationService().checkFormValidity($scope.form1)) {
                    alert('All good, proceed with submit...');
                }
            }

            $scope.showValidationSummary = function () {
                $scope.displayValidationSummary = true;
            }

            $scope.customRemoteValidationCall = function() {
                var deferred = $q.defer();
                setTimeout(function() {
                    var isValid = ($scope.input1 === "abc");

                    // you can return a boolean for isValid
                    //deferred.resolve(isValid);

                    // or you can return an object as { isValid: bool, message: msg }
                    deferred.resolve({ isValid: isValid, message: 'Returned error from promise.'});
                }, 1000);

                return deferred.promise;
            }
        }])

        .controller('InlineEditorController',['$scope',function($scope){

            $scope.isCollapsed = false;
            $scope.isCollapsed1 = false;
            $scope.showtooltip = false;
            $scope.value = 'Edit me.';

            $scope.hideTooltip = function(){
                $scope.showtooltip = false;
            }

            $scope.toggleTooltip = function(e){
                e.stopPropagation();
                $scope.showtooltip = !$scope.showtooltip;
            }
        }])

        .controller('OrderFormController',['$scope',function($scope){

            $scope.isCollapsed2 = false;

            $scope.services = [
                {
                    name: 'Fires',
                    price: 300,
                    active: true
                },
                {
                    name: 'Burger',
                    price: 500,
                    active: false
                },
                {
                    name: 'Sabzi',
                    price: 800,
                    active: false
                },
                {
                    name: 'Idly',
                    price: 200,
                    active: false
                }
            ];

            $scope.toggleActive = function(e){
                e.active = !e.active;
            };

            $scope.total = function(){

                var total = 0;

                angular.forEach($scope.services, function(s){
                    if(s.active){
                        total = total + s.price;
                    }
                });
                return total;
            };
        }])

        .controller('SwitchableGridController',['$scope',function($scope){

            $scope.isCollapsed3 = false;
        }])

        //.filter('searchFor',function($scope){
        //    $scope.isCollapsed3 = false;
        //
        //    return function(arr, searchString){
        //        if(!searchString){
        //            return arr;
        //        }
        //
        //        var result = [];
        //
        //        searchString = searchString.toLowerCase();
        //
        //        angular.forEach(arr,function(item){
        //            if(item.title.toLowerCase().indexOf(searchString) !== -1){
        //                result.push(item);
        //            }
        //
        //        });
        //
        //        return result;
        //    };
        //
        //})

        .controller('PaginationDemoCtrl',['$scope',function($scope){

            $scope.isCollapsed4 = false;

            $scope.data = [{"name":"Bell","id":"K0H 2V5"},{"name":"Octavius","id":"X1E 6J0"},{"name":"Alexis","id":"N6E 1L6"},{"name":"Colton","id":"U4O 1H4"},{"name":"Abdul","id":"O9Z 2Q8"},{"name":"Ian","id":"Q7W 8M4"},{"name":"Eden","id":"H8X 5E0"},{"name":"Britanney","id":"I1Q 1O1"},{"name":"Ulric","id":"K5J 1T0"},{"name":"Geraldine","id":"O9K 2M3"},{"name":"Hamilton","id":"S1D 3O0"},{"name":"Melissa","id":"H9L 1B7"},{"name":"Remedios","id":"Z3C 8P4"},{"name":"Ignacia","id":"K3B 1Q4"},{"name":"Jaime","id":"V6O 7C9"},{"name":"Savannah","id":"L8B 8T1"},{"name":"Declan","id":"D5Q 3I9"},{"name":"Skyler","id":"I0O 4O8"},{"name":"Lawrence","id":"V4K 0L2"},{"name":"Yael","id":"R5E 9D9"},{"name":"Herrod","id":"V5W 6L3"},{"name":"Lydia","id":"G0E 2K3"},{"name":"Tobias","id":"N9P 2V5"},{"name":"Wing","id":"T5M 0E2"},{"name":"Callum","id":"L9P 3W5"},{"name":"Tiger","id":"R9A 4E4"},{"name":"Summer","id":"R4B 4Q4"},{"name":"Beverly","id":"M5E 4V4"},{"name":"Xena","id":"I8G 6O1"},{"name":"Yael","id":"L1K 5C3"},{"name":"Stacey","id":"A4G 1S4"},{"name":"Marsden","id":"T1J 5J3"},{"name":"Uriah","id":"S9S 8I7"},{"name":"Kamal","id":"Y8Z 6X0"},{"name":"MacKensie","id":"W2N 7P9"},{"name":"Amelia","id":"X7A 0U3"},{"name":"Xavier","id":"B8I 6C9"},{"name":"Whitney","id":"H4M 9U2"},{"name":"Linus","id":"E2W 7U1"},{"name":"Aileen","id":"C0C 3N2"},{"name":"Keegan","id":"V1O 6X2"},{"name":"Leonard","id":"O0L 4M4"},{"name":"Honorato","id":"F4M 8M6"},{"name":"Zephr","id":"I2E 1T9"},{"name":"Karen","id":"H8W 4I7"},{"name":"Orlando","id":"L8R 0U4"},{"name":"India","id":"N8M 8F4"},{"name":"Luke","id":"Q4Y 2Y8"},{"name":"Sophia","id":"O7F 3F9"},{"name":"Faith","id":"B8P 1U5"},{"name":"Dara","id":"J4A 0P3"},{"name":"Caryn","id":"D5M 8Y8"},{"name":"Colton","id":"A4Q 2U1"},{"name":"Kelly","id":"J2E 2L3"},{"name":"Victor","id":"H1V 8Y5"},{"name":"Clementine","id":"Q9R 4G8"},{"name":"Dale","id":"Q1S 3I0"},{"name":"Xavier","id":"Z0N 0L5"},{"name":"Quynn","id":"D1V 7B8"},{"name":"Christine","id":"A2X 0Z8"},{"name":"Matthew","id":"L1H 2I4"},{"name":"Simon","id":"L2Q 7V7"},{"name":"Evan","id":"Z8Y 6G8"},{"name":"Zachary","id":"F4K 8V9"},{"name":"Deborah","id":"I0D 4J6"},{"name":"Carl","id":"X7H 3J3"},{"name":"Colin","id":"C8P 0O1"},{"name":"Xenos","id":"K3S 1H5"},{"name":"Sonia","id":"W9C 0N3"},{"name":"Arsenio","id":"B0M 2G6"},{"name":"Angela","id":"N9X 5O7"},{"name":"Cassidy","id":"T8T 0Q5"},{"name":"Sebastian","id":"Y6O 0A5"},{"name":"Bernard","id":"P2K 0Z5"},{"name":"Kerry","id":"T6S 4T7"},{"name":"Uriel","id":"K6G 5V2"},{"name":"Wanda","id":"S9G 2E5"},{"name":"Drake","id":"G3G 8Y2"},{"name":"Mia","id":"E4F 4V8"},{"name":"George","id":"K7Y 4L4"},{"name":"Blair","id":"Z8E 0F0"},{"name":"Phelan","id":"C5Z 0C7"},{"name":"Margaret","id":"W6F 6Y5"},{"name":"Xaviera","id":"T5O 7N5"},{"name":"Willow","id":"W6K 3V0"},{"name":"Alden","id":"S2M 8C1"},{"name":"May","id":"L5B 2H3"},{"name":"Amaya","id":"Q3B 7P8"},{"name":"Julian","id":"W6T 7I6"},{"name":"Colby","id":"N3Q 9Z2"},{"name":"Cole","id":"B5G 0V7"},{"name":"Lana","id":"O3I 2W9"},{"name":"Dieter","id":"J4A 9Y6"},{"name":"Rowan","id":"I7E 9U4"},{"name":"Abraham","id":"S7V 0W9"},{"name":"Eleanor","id":"K7K 9P4"},{"name":"Martina","id":"V0Z 5Q7"},{"name":"Kelsie","id":"R7N 7P2"},{"name":"Hedy","id":"B7E 7F2"},{"name":"Hakeem","id":"S5P 3P6"}];
            $scope.viewby = 10;
            $scope.totalItems = $scope.data.length;
            $scope.currentPage = 4;
            $scope.itemsPerPage = $scope.viewby;
            $scope.maxSize = 5; //Number of pager buttons to show

            $scope.setPage = function (pageNo) {
                $scope.currentPage = pageNo;
            };

            $scope.pageChanged = function() {
                console.log('Page changed to: ' + $scope.currentPage);
            };

            $scope.setItemsPerPage = function(num) {
                $scope.itemsPerPage = num;
                $scope.currentPage = 1; //reset to first paghe
            }
        }])

        .controller('TodoCtrl',['$scope',function($scope){

            $scope.isCollapsed5 = false;

            $scope.todos = [
                {text:'learn angular', done:true},
                {text:'build an angular app', done:false}];

            $scope.addTodo = function() {
                $scope.todos.push({text:$scope.todoText, done:false});
                $scope.todoText = '';
            };

            $scope.remaining = function() {
                var count = 0;
                angular.forEach($scope.todos, function(todo) {
                    count += todo.done ? 0 : 1;
                });
                return count;
            };

            $scope.archive = function() {
                var oldTodos = $scope.todos;
                $scope.todos = [];
                angular.forEach(oldTodos, function(todo) {
                    if (!todo.done) $scope.todos.push(todo);
                });
            };

        }])


        //Contact Service && Controller

        .service('ContactService', function () {
            //to create unique contact id
            var uid = 1;

            //contacts array to hold list of all contacts
            var contacts = [{
                id: 0,
                'name': 'Megha',
                'email': 'hello@gmail.com',
                'phone': '123-2343-44'
            }];

            //save method create a new contact if not already exists
            //else update the existing object
            this.save = function (contact) {
                if (contact.id == null) {
                    //if this is new contact, add it in contacts array
                    contact.id = uid++;
                    contacts.push(contact);
                } else {
                    //for existing contact, find this contact using id
                    //and update it.
                    for (var i in contacts) {
                        if (contacts[i].id == contact.id) {
                            contacts[i] = contact;
                        }
                    }
                }

            };

            //simply search contacts list for given id
            //and returns the contact object if found
            this.get = function (id) {
                for (var i in contacts) {
                    if (contacts[i].id == id) {
                        return contacts[i];
                    }
                }

            };

            //iterate through contacts list and delete
            //contact if found
            this.delete = function (id) {
                for (var i in contacts) {
                    if (contacts[i].id == id) {
                        contacts.splice(i, 1);
                    }
                }
            };

            //simply returns the contacts list
            this.list = function () {
                return contacts;
            };
        })

        .controller('ContactController',  function ($scope, ContactService) {

            $scope.contacts = ContactService.list();

            $scope.saveContact = function () {
                ContactService.save($scope.newcontact);
                $scope.newcontact = {};
            };


            $scope.delete = function (id) {
                ContactService.delete(id);
                if ($scope.newcontact.id == id) $scope.newcontact = {};
            };


            $scope.edit = function (id) {
                $scope.newcontact = angular.copy(ContactService.get(id));
            };
        });


})();
