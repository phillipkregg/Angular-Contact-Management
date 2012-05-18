// contacts controllers

'use strict';

function ContactListCtrl($scope, $http, Contacts) {   
  
  $scope.contacts = Contacts.index();  
  
  
  $("#test_btn").click(function() {
  	 alert($scope.newFirstName);
  });
  
    	    
  $scope.addContact = function() {
		var newContact = {
			first_name: $scope.newFirstName,
			last_name: $scope.newLastName,
			salutation: $scope.newSalutation,
			phone_num: $scope.newPhoneNum,
			phone_num_type: $scope.newPhoneType,
			address1: $scope.newAddress1,
			address2: $scope.newAddress2,
			email_address: $scope.newEmail,
			city: $scope.newCity,
			state: $scope.newState,
			zip: $scope.newZipcode
		};
 	
	 	var nc = new Contacts({ contact: newContact });
	 	
	 	nc.$create(function() {
	 		$scope.contacts.push(nc);
	 		// now that the contact is saved, clear the form data
	 		$scope.newFirstName = "";
	 		$scope.newLastName = "";
	 		$("#salutation option:first-child").attr("selected", "selected");
	 		$("#phone_type option:first-child").attr("selected", "selected");
	 		$scope.newAddress1 = "";
	 		$scope.newAddress2 = "";
	 		$scope.newPhoneNum = "";
	 		$("#state option:first-child").attr("selected", "selected")
	 		$scope.newCity = "";
	 		$scope.newZipcode = "";
	 		$scope.newZipcode = "";
	 		$scope.newEmail = "";
	    	})
	    }
        
};

ContactListCtrl.$inject = ['$scope', '$http', 'Contacts'];


function ContactDetailCtrl($scope, $routeParams, Contacts) {  
    $scope.contact = Contacts.get( {contact_id: $routeParams.contact_id} ); 
}

ContactDetailCtrl.$inject = ['$scope', '$routeParams', 'Contacts'];
