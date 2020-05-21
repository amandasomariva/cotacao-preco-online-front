myApp.config(function ($stateProvider) {
	$stateProvider
		.state('produtos', {
			name: 'produtos',
			url: '/lista-produto',
			templateUrl: './templates/produto-lista.view.html',
			controller: 'ProdutoController',
		})
		.state('produto', {
			name: 'produto',
			url: '/produtos',
			templateUrl: './templates/produto.view.html',
			controller: 'ProdutoController',
		})
		.state({
			name: 'produtoEditar',
			url: '/produtos/:id',
			templateUrl: './templates/produto.view.html',
			controller: 'ProdutoController',
		})
		.state({
			name: 'produtoExcluir',
			url: '/produtos/:id',
			templateUrl: './templates/produto.view.html',
			controller: 'ProdutoController',
		})	
		.state('lista-produto-cotacao', {
			name: 'listaProdutoCotacao',
			url: '/fornecedor/lista-produto',
			templateUrl:  './templates/produto-cotacao-lista.view.html',
			controller: 'ProdutoCotacaoController',
		})
		.state({
			name: 'cotacao',
			url: 'fornecedor/cotacao/produto/:id',
			templateUrl: './templates/produto-cotacao.view.html',
			controller: 'ProdutoCotacaoController',
		})
		.state({
			name: 'cotacoes',
			url: 'cotacao/produto/:id',
			templateUrl: './templates/cotacoes-lista.view.html',
			controller: 'CotacaoFornecedorController',
		})
	
});