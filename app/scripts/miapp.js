'user strict';
var wapp =angular.module("Miprimerapp", []);

wapp=controller('controladorBasico', ['$scope', 



	function controladorBasico($scope){
		var Rick= [
			{Nombre: 'Mucio', Edad: 25, Foto:'ojos.jpg'}, 
			{Nombre: 'Lalo', Edad: 23, Foto:'pajaro.jpg'}, 
			{Nombre: 'Max', Edad: 23, Foto:'rickmorty'}
			];

		$scope.Rick = mipp;
	}
]);