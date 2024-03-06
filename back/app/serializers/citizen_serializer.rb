# frozen_string_literal: true

class CitizenSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :cpf, :cns, :email, :birth_date, :phone, :status

  has_one :address, if: :has_address?

  def has_address?
    object.address.present?
  end
end