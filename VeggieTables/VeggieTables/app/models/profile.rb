class Profile < ActiveRecord::Base
  belongs_to :users
  TYPE_OPTIONS = [
    "Producer",
    "Restuarant",
    "Consumer"
  ]
end
