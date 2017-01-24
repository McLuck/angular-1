angular.module('alurapic').controller('GruposController', function($scope, $http) {
    $scope.grupos = [];

    $http.get('v1/grupos')
    .success(function(retorno){
        $scope.grupos = retorno;
    })
    .error(function(error){
        console.log(error);
    });
} );