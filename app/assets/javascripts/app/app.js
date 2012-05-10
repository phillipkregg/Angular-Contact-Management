// main app javascript file

'use strict';

angular.module('contactapp', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/contacts', {template: 'assets/app/partials/contact-list.html',   controller: ContactListCtrl}).
      when('/contacts/:contactId', {template: 'assets/app/partials/contact-detail.html', controller: ContactDetailCtrl}).
      otherwise({redirectTo: '/contacts'});
}]);