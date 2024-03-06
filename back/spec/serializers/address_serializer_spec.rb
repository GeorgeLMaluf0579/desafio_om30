#fronze_string_literal: true

require 'rails_helper'

RSpec.describe AddressSerializer, type: :serializer do
  let(:address) { create(:address) }
  subject { described_class.new(address).as_json }

  it 'includes the expected attributes' do
    expect(subject.keys).to contain_exactly(:id, :street, :complement, :building_number,
                                            :neighborhood, :zip_code, :city, :state,
                                            :ibge_code)
  end
end
