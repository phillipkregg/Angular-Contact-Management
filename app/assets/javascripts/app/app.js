// main app javascript file

'use strict';

angular.module('contactapp', ['ngResource']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/contacts', {template: 'assets/app/partials/contact-list.html', controller: ContactListCtrl}).
      when('/contacts/new', {template: 'assets/app/partials/new-contact.html', controller: ContactListCtrl}).
      when('/contacts/:contact_id', {template: 'assets/app/partials/contact-detail.html', controller: ContactDetailCtrl}).
      otherwise({redirectTo: '/contacts'});
}]);