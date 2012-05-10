// contacts controllers

function ContactListCtrl($scope, $http) {
  $http.get('/contacts').success(function(data) {
    $scope.contacts = data;
  });
}

ContactListCtrl.$inject = ['$scope', '$http'];

function ContactDetailCtrl($scope, $routeParams, Contact) {
  $scope.contact = Contact.query({"contactId": contact.id});
}

ContactDetailCtrl.$inject = ['$scope', '$routeParams', 'Contact'];
