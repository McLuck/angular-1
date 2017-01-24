angular.module('alurapic').controller('FotoController', function($scope, $http){
    
    $scope.foto = {};
    $scope.mensagem = '';
    $scope.exibe = true;

    $scope.submeter = function(){
        if ( $scope.formulario.$valid ) {
            $http.post('v1/fotos', $scope.foto)
            .success(function(retorno){
                $scope.foto={};
                $scope.mensagem = 'Foto incluida com sucesso';
            })
            .error(function(erro){
                console.log(erro);
                $scope.mensagem = 'Não foi possível incluir a foto';
            });
        }
    }
});