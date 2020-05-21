const myApp = angular.module('app', ['ui.router']);
var URL = 'http://localhost:9000';

myApp.controller('ProdutoController', function ($state, $stateParams, $scope, $http) {
	$scope.produtos = [];
	var carregarProduto = function () {
		$http.get(URL + '/produto').then(
			function success(data) {
				$scope.produtos = data.data;
			},
			function (error) {
				console.log(error);
			}
		);
	};

	$scope.adicionarProduto = function (produto) {
		$http.post(URL + '/produto', produto).then(
			function success(data) {
				delete $scope.produto;
				carregarProduto();
			},
			function (error) {
				console.log(error);
			}
		);
	};


	if ($stateParams.id) {
		// vm.titulo = 'Editando produto';
		$http.get(URL + '/produto/' + $stateParams.id).then(
			function success(data) {
				$scope.produto = data.data;
			},
			function (error) {
				console.log(error);
			}
		);
	}

	$scope.voltar = function () {
		$state.go('produtos')
	}

	$scope.excluir = function (id) {
		if (confirm('Deseja realmente excluir?')) {
			$http.delete(URL + '/produto/' + id).then(
				function success(data) {
					$state.reload();
				},
				function (error) {
					console.log(error);
				}
			);
		}

	}


	carregarProduto();
});




myApp.controller('ProdutoCotacaoController', function ($state, $stateParams, $scope, $http) {
	$scope.produtocotacao = [];
	var carregarCotacao = function () {
		$http.get(URL + '/produto/cotacao-habilitado').then(
			function success(data) {
				$scope.produtos = data.data;
			},
			function (error) {
				console.log(error);
			}
		);
	};

	$scope.adicionarCotacao = function (cotacao) {
		if ($stateParams.id) {
			cotacao.produto = {
				id: $stateParams.id
			};

		}

		$http.get(URL + '/cotacao/' + cotacao.produto.id + '/' + cotacao.emailFornecedor).then(
			function success(data) {
				if (!data.data) {
					salvarCotacao(cotacao);
				} else {
					alert("teste");
				}
			},
			function (error) {
				console.log(error);
			}
		);
	};

	function salvarCotacao(cotacao) {
		$http.post(URL + '/cotacao', cotacao).then(
			function success(data) {
				delete $scope.cotacao;
				$state.go('lista-produto-cotacao')
			},
			function (error) {
				console.log(error);
			}
		);
	}


	$scope.voltar = function () {
		$state.go('lista-produto-cotacao')
	}

	carregarCotacao();
});


myApp.controller('CotacaoFornecedorController', function ($state, $stateParams, $scope, $http) {
	$scope.cotacoes = [];
	var carregarCotacoes = function () {
		$http.get(URL + '/produto/cotacao/' + $stateParams.id).then(
			function success(data) {
				$scope.cotacoes = data.data;
			},
			function (error) {
				console.log(error);
			}
		);
	};

	carregarCotacoes();


	$scope.voltar = function () {
		$state.go('produtos')
	}

});