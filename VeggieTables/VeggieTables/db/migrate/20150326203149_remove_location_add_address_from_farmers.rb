class RemoveLocationAddAddressFromFarmers < ActiveRecord::Migration
  def change
    remove_column :farmers, :location, :string

    add_column :farmers, :address, :string
    add_column :farmers, :city, :string
    add_column :farmers, :state, :string
    add_column :farmers, :zipcode, :string
    add_column :farmers, :type, :string
  end
end
