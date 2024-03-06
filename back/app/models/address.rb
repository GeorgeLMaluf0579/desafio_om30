class Address < ApplicationRecord
  belongs_to :citizen

  validates_presence_of :street, :neighborhood, :zip_code, :city, :state
end
