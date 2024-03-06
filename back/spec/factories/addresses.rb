# frozen_string_literal: true

FactoryBot.define do
  factory :address do
    street { Faker::Address.street_name }
    complement { Faker::Address.street_address }
    building_number { Faker::Address.building_number}
    neighborhood { Faker::Address.community }
    zip_code { Faker::Address.zip_code }
    city { Faker::Address.city }
    state { Faker::Address. state_abbr }
    ibge_code { Faker::Number.number(digits: 7) }

    association :citizen, factory: :citizen
  end
end
