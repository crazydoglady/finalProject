class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.string :type
      t.string :address
      t.string :city
      t.string :state
      t.string :zipcode
      t.string :email

      t.timestamps null: false
    end
  end
end
