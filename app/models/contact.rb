class Contact < ActiveRecord::Base
  attr_accessible :address1, :address2, :city, :email_address, :first_name, :last_name, :phone_num, :phone_num_type, :salutation, :state, :zip
end
