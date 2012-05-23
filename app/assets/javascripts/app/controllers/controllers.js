// contacts controllers

'use strict';


function ContactListCtrl($scope, $http, $location, $routeParams, Contacts) {  	
  
  $scope.contacts = Contacts.index();     
    	    
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
	 		
	 		//redirect
	 		$location.path('/#/contacts');
	    	})
    }
       
  
  
  $scope.contact = "";
      
 	$scope.getContact = function() { 		
 		 
	   $scope.contact = this.contact;	   
	    		
 		//alert("clicked");
 		
 		//console.log($(this))
 		
 		//alert($(this).parent("#detailCell").siblings().children("a #detailButton").attr("href"))
 		
 		//$("#contacts_table tbody tr").each(function() {
 			//alert($(this).find("#detailButton").attr("href"));
 		//})
 		//console.log($(this).parent().find("#detailButton").attr("href"));
 	}
    	
    
    
    $scope.removeContact = function() {
    	  //alert($(this).siblings("#detailButton").attr("href"));
    	  //$scope.contact = Contacts.get( {contact_id: this.$("#contactToDelete")} ); 
        $scope.contact.$destroy();
        $('#deleteModal').modal('hide')
       };
        
};




ContactListCtrl.$inject = ['$scope', '$http', '$location', '$routeParams', 'Contacts'];


var ContactDetailCtrl = ['$scope', '$routeParams', '$location', '$http', '$filter', 'Contacts', function($scope, $routeParams, $location, $http, $filter, Contacts) {  
   
     
   $scope.contact = Contacts.get( {contact_id: $routeParams.contact_id} ); 
     
   $scope.saveContact = function() {
   	
   	alert("Save clicked");
   	
   	var updatedContact = {
			
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
		
   	
   	$.ajax({
   		url: "/contacts/" + $routeParams.contact_id,
   		dataType: "json",
   		type: "POST",
   		processData: false,
   		contentType: "application/json",
   		data: "{\"contact\"" + ":" + 
   			"{" +
   			
   			"\"first_name\"" + ":" + JSON.stringify($("#edit_contact_first_name").val()) + "," +
   			"\"last_name\"" + ":" + JSON.stringify($("#edit_contact_last_name").val()) + "," +
   			"\"salutation\"" + ":" + JSON.stringify($("#edit_salutation").val()) + "," +
   			"\"phone_num\"" + ":" + JSON.stringify($("#edit_contact_phone").val()) + "," +
   			"\"phone_num_type\"" + ":" + JSON.stringify($("#phone_type").val()) + "," +
   			"\"address1\"" + ":" + JSON.stringify($("#edit_contact_address1").val()) + "," +
   			"\"address2\"" + ":" + JSON.stringify($("#edit_contact_address2").val()) + "," +
   			"\"email_address\"" + ":" + JSON.stringify($("#edit_contact_email").val()) + "," +
   			"\"city\"" + ":" + JSON.stringify($("#edit_contact_city").val()) + "," +
   			"\"state\"" + ":" + JSON.stringify($("#edit_state").val()) + "," +
   			"\"zip\"" + ":" + JSON.stringify($("#edit_contact_zipcode").val()) + "" +
   			
   			"}}" ,
   		//data: "{\"contact\":{\"first_name\":\"Taco\"}}",
	   	beforeSend: function(xhr) 
	   	{
				xhr.setRequestHeader("X-Http-Method-Override", "PUT");
			}
   	})
   }
   
   
   
   

	// $scope.saveContact = function() {		
// 		
		// var updatedContact = {
// 			
			// first_name: $scope.newFirstName,
			// last_name: $scope.newLastName,
			// salutation: $scope.newSalutation,
			// phone_num: $scope.newPhoneNum,
			// phone_num_type: $scope.newPhoneType,
			// address1: $scope.newAddress1,
			// address2: $scope.newAddress2,
			// email_address: $scope.newEmail,
			// city: $scope.newCity,
			// state: $scope.newState,
			// zip: $scope.newZipcode
		// };		
// 		
		
		
		//$scope.contact.$update( updatedContact );
			

		//redirect
 		//$location.path('/#/contacts');
	//}


}];

//ContactDetailCtrl.$inject = ['$scope', '$routeParams', 'Contacts'];
