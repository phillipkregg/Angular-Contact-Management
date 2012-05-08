// contact resource

angular.module('contactListService', ['ngResource']).
    factory('Contact', function($resource){
  return $resource('/contacts', {}, {
    query: {method:'GET', isArray:true}
  });
});