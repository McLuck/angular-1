angular.module('alurapic').controller('FotoController', function($scope, cadastroDeFotos , $routeParams){

    $scope.foto = {};
    $scope.mensagem = '';
    $scope.exibe = true;

    if($routeParams.fotoId) {
        recursoFoto.get({fotoId:$routeParams.fotoId}, function(retorno){
            console.log(retorno);
            $scope.foto = retorno;
        }, function(error){
            console.log(error);
            $scope.mensagem = 'Não foi possível obter a foto'
        });
    }

    $scope.submeter = function(){
        if ( $scope.formulario.$valid ) {
            cadastroDeFotos.cadastrar($scope.foto)
            .then(function(retorno){
                $scope.mensagem = retorno.mensagem;
                if(retorno.inclusao) {
                    $scope.foto = {};
                    $scope.formulario.$setPristine();
                }
            })
            .catch(function(retorno){
                $scope.mensagem = retorno.mensagem;
            });
        }
    }
});