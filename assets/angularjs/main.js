'use strict';

var mataGaruda = angular.module('mataGarudaApp', [

	// Load additional module
	// ----------------------
	'ngRoute',		// Routing
	'ui.bootstrap' 	// Js Twitter Bootstrap untuk angularJS

], 

// Change default tag angular {{ ... }} become <% ... %>
// supaya tidak sama dengan laravel
function ($interpolateProvider) {
	$interpolateProvider.startSymbol('<%');
	$interpolateProvider.endSymbol('%>');
});