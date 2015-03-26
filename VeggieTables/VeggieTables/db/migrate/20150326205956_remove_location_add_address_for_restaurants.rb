class RemoveLocationAddAddressForRestaurants < ActiveRecord::Migration
  def change
    remove_column :restaurants, :location, :string

    add_column :restaurants, :address, :string
    add_column :restaurants, :city, :string
    add_column :restaurants, :state, :string
    add_column :restaurants, :zipcode, :string
  end
end
