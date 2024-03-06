# frozen_string_literal: true

FactoryBot.define do
  factory :citizen do
    full_name { Faker::Name.name }
    cpf { Faker::Number.unique.number(digits: 11) }
    cns { Faker::Number.unique.number(digits: 15) }
    email { Faker::Internet.email }
    birth_date { Faker::Date.birthday(min_age: 18, max_age: 65) }
    phone { Faker::PhoneNumber.phone_number }
    status { :active }
    
    after(:build) do |citizen|
      citizen.address ||= build(:address, citizen: citizen)
    end
  end
end