class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :first_name
      t.string :last_name
      t.string :address1
      t.string :address2
      t.string :email_address
      t.string :city
      t.string :state
      t.string :zip
      t.string :phone_num
      t.string :salutation
      t.string :phone_num_type

      t.timestamps
    end
  end
end
