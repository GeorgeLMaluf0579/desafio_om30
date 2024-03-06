# frozen_string_literal: true

class CitizenSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :cpf, :cns, :email, :birth_date, :phone, :status, :address_attributes

  def address_attributes
    object.address if object.address.present?
  end
end