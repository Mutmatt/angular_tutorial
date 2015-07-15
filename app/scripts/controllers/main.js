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

function mainCtrl() {
	var that = this;

	that.awesomeThings = [
	  'HTML5 Boilerplate',
	  'AngularJS',
	  'Karma'
	];
}

})(angular);