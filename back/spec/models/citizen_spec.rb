# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Citizen, type: :model do
  subject(:citizen) { build :citizen }

  describe "Factory Validations" do
    it "factory is valid" do
      byebug
      expect(citizen).to be_valid
    end
  end

  describe "Model Validations" do
    it { should validate_presence_of(:cpf) }
    it { should validate_presence_of(:cns) }
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:birth_date) }
    it { should validate_presence_of(:phone) }
    it { should validate_presence_of(:status) }

    it { should allow_value('valid@email.com').for(:email) }
    it { should_not allow_value('invalid_email').for(:email) }

    it 'validates birth_date is not in the future' do
      citizen = build(:citizen, birth_date: Date.tomorrow)
      citizen.valid?
      expect(citizen.errors[:birth_date]).to include("can't be in the future")
    end

    it 'validates birth_date is a valid date' do
      citizen = build(:citizen, birth_date: 'invalid_date')
      citizen.valid?
      expect(citizen.errors[:birth_date]).to include("must be a valid date")
    end
  end
end
