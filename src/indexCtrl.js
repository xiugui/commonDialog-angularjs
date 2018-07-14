/**
 * @ngdoc controller
 * @name adminApp.controller:controllerName
 * @function
 * @description
 * # controllerName
 */

angular.module('app')
    .controller('indexCtrl', ['$scope','tanBox','$timeout','$templateCache','$compile',  function ($scope,tanBox,$timeout,$templateCache,$compile) {
           
        $scope.lovestory = 'ddddddddddddddddd';
        $scope.clickBtn = function(){
            var params = {
                type:Math.random()*1000
            };
            var html = '<div common-dialog dialog-template="testTemplate/dialog1.html" dialog-controller="carePlansDialogCtrl"   dialog-params=\'' + JSON.stringify(params) + "'><\/div>";
            tanBox.createTanBox({
                color:'#333',
                template:html,
                compileFn:function(elem){
                    $compile(elem)($scope)
                }
                // template:$compile($templateCache.get('lovestory.html'))($scope)

            })
            }
            
           
            
    }]);
    /**
     * @ngdoc directive
     * @name adminApp.directive:directiveName
     * @function
     * @description
     * # directiveName
     */
    angular.module('app')
        .directive('commonDialog', [function() {
            return {
                restrict: "A",
                controller: "@",
                name: "dialogController",
                scope: {
                    dialogParams: "="
                },
                templateUrl: function($scope, attrs) {
                    return attrs.dialogTemplate
                }
            }
        }]);
        /**
         * @ngdoc controller
         * @name adminApp.controller:controllerName
         * @function
         * @description
         * # controllerName
         */
        angular.module('app')
            .controller('carePlansDialogCtrl', ['$scope', 'tanBox','$timeout','$templateCache','$compile',  function ($scope,tanBox,$timeout,$templateCache,$compile) {
                    $scope.test = $scope.dialogParams.type;
                    $scope.clickBtn = function(){
                        var params = {
                            type:Math.random()*500
                        };
                        var html = '<div common-dialog dialog-template="testTemplate/dialog1.html" dialog-controller="carePlansDialogCtrl"   dialog-params=\'' + JSON.stringify(params) + "'><\/div>";
                        tanBox.createTanBox({
                            color:'#333',
                            template:html,
                            compileFn:function(elem){
                                $compile(elem)($scope)
                            }
                            // template:$compile($templateCache.get('lovestory.html'))($scope)
            
                        })
                        }
            }]);
    