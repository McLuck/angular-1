angular.module('alurapic').controller('FotosController', function($scope, recursoFoto){
	$scope.fotos = [];
    $scope.mensagem='';
    $scope.filtro = '';

    recursoFoto.query(function(fotos){
        $scope.fotos = fotos;
    }, function(erro){
        console.log(erro);
    });



    $scope.remover = function(foto) {
        recursoFoto.delete({fotoId : foto._id},
            function(){
                var indiceFoto = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(indiceFoto, 1);
                $scope.mensagem = 'Foto removida com sucesso: '+foto.titulo;
            }, 
            function(erro) {
                console.log(error);
                $scope.mensagem = 'Foto não foi possível remover a foto '+foto.titulo;    
            });
        
    }
});