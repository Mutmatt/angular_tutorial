(function(angular) {
'use strict';

/**
 * @ngdoc function
 * @name angularTutApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTutApp
 */
angular.module('angularTutApp')
  .controller('MainCtrl', mainCtrl);

  mainCtrl.$inject = [];
function mainCtrl() {
	var main = this;
	 
	
	main.someValue = "Hello Wade";

	main.awesomeThings = [
	  {header: 'Hello world', text: 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.'},
	  {header:'AngularJS', text:'AngularJS is a toolset for building the framework most suited to your application development.'},
	  {header: 'Karma', text: 'Spectacular Test Runner for JavaScript.'}
	];
}

})(angular);