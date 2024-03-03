# frozen_string_literal: true

require 'rails_helper'

RSpec.describe CitizenSerializer, type: :serializer do
  let(:citizen) { create(:citizen) }

  subject { described_class.new(citizen).as_json }

  it 'includes the expected attributes' do
    expect(subject.keys).to contain_exactly(:id, :full_name, :cpf, :cns, :email, :birth_date, :phone, :status)
  end
end