require 'rails_helper'

RSpec.describe Address, type: :model do
  subject(:address) { build :address }

  describe "Factory Validations" do
    it "factory is valid" do
      expect(address).to be_valid
    end
  end

  describe "associations" do
    it { should belong_to(:citizen) }
  end

  describe "Model validations" do
    it { should validate_presence_of(:street) }
    it { should validate_presence_of(:neighborhood) }
    it { should validate_presence_of(:zip_code) }
    it { should validate_presence_of(:city) }
    it { should validate_presence_of(:state) }
  end

end
