# frozen_string_literal: true

class AddressSerializer < ActiveModel::Serializer
  attributes :id, :street, :complement, :building_number,
             :neighborhood, :zip_code, :city, :state,
             :ibge_code
end