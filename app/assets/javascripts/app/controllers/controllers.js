// contacts controllers

'use strict';

function ContactListCtrl($scope, $http) {
  $http.get('/contacts').success(function(data) {
    $scope.contacts = data;
  });
  
}

//ContactListCtrl.$inject = ['$scope', '$routeParams'];

function ContactDetailCtrl($scope, $routeParams, $http) {
  $http.get('contacts/' + $routeParams.contactId).success(function(data) {
    $scope.contact = data;
  });
}

//ContactDetailCtrl.$inject = ['$scope', '$routeParams'];
