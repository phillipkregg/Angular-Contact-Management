// contacts controllers

function ContactListCtrl($scope, Contact) {
  $scope.contacts = Contact.query();  
}

function ContactDetailCtrl($scope, $routeParams, Contact) {
  $scope.contact = Contact.query({"contactId": contact.id});
}