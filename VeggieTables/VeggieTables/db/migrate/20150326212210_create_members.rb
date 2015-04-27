class CreateMembers < ActiveRecord::Migration
  def change
    create_table :members do |t|
      t.string :name
      t.string :location
      t.string :email

      t.timestamps null: false
    end
  end
end
