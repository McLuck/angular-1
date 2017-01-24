angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams){
    
    $scope.foto = {};
    $scope.mensagem = '';
    $scope.exibe = true;

    if($routeParams.fotoId) {
        $http.get('v1/fotos/'+$routeParams.fotoId)
        .success(function(retorno){
            $scope.foto = retorno;
        })
        .error(function(error){
            console.log(error);
            $scope.mensagem = 'Não foi possível obter a foto';
        });
    }

    $scope.submeter = function(){
        if ( $scope.formulario.$valid ) {
            if($routeParams.fotoId) {
                console.log('Iniciando put para: ' + 'v1/fotos/' + $scope.foto._id );
                $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
                .success(function(retorno){
                    console.log(retorno);
                    $scope.mensagem = 'Foto alterada com sucesso ' + $scope.foto.titulo;
                })
                .error(function(erro){
                    console.log(erro);
                    $scope.mensagem = 'Não foi possível alterar a foto ' + $scope.foto.titulo;
                });
            } else {
                $http.post('v1/fotos', $scope.foto)
                .success(function(retorno){
                    $scope.foto={};
                    $scope.formulario.$setPristine();
                    $scope.mensagem = 'Foto incluida com sucesso';
                })
                .error(function(erro){
                    console.log(erro);
                    $scope.mensagem = 'Não foi possível incluir a foto';
                });
            }
        }
    }
});