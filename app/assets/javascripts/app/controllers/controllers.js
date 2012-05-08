// contacts controllers

function ContactListCtrl($scope, Contact) {
  $scope.contacts = Contact.query();  
}

ContactListCtrl.$inject = ['$scope', 'Contact'];

function ContactDetailCtrl($scope, $routeParams, Contact) {
  $scope.contact = Contact.query({"contactId": contact.id});
}

ContactDetailCtrl.$inject = ['$scope', '$routeParams', 'Contact'];
