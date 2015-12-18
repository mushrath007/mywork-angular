/**
 * Created by MMOHAMM on 11/25/2015.
 */
'use strict';

(function(){

    angular.module('com.td.oca.examplePersonal')
        .controller('CollapseDemoCtrl',
        function ($scope, $state){
            $scope.isCollapsed = false;

            $scope.Continue = function(){
                $state.go("td-stock-productList");
            };
          }
    )
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
        }]);

})();
