class Address < ApplicationRecord
  belongs_to :citizen

  validates_presence_of :street, :building_number, :neighborhood,
                        :complement, :zip_code, :city, :state
end
