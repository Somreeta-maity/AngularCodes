( function (){
'use strict';

angular.module('Name Calculator'  , [])
.controller('NameCalculatorController', function($scope){
$scope.name = "";
$scope.totalValue = 0;


angular.module('DI App' , [])
.controller('DIController', DIController);

function DIController ($scope , $filter){
    $scope.name="Somreeta";

$scope.upper= function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
};


}



$scope.displayNumeric = function () {
    var totalNameValue = 0;
    $scope.totalNameValue = calculatNumericForString($scope.name);
};
function calculatNumericForString(string){
    var totalStringValue = 0;
    for (var i = 0 ; i<string.length ; i++)
    totalStringValue += string.charCodeAt(i);
}




});


})();