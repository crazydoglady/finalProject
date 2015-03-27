class CreateFarmers < ActiveRecord::Migration
  def change
    create_table :farmers do |t|
      t.string :name
      t.string :location
      t.string :email
      t.string :photo
      t.text :description
      t.boolean :fruits
      t.boolean :vegetables
      t.boolean :herbs
      t.boolean :squash
      t.boolean :taters

      t.timestamps null: false
    end
  end
end
