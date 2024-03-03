# frozen_string_literal: true

FactoryBot.define do
  factory :citizen do
    full_name { Faker::Name.name }
    email { Faker::Internet.email }
    birth_date { Faker::Date.birthday(min_age: 18, max_age: 65) }
    phone { Faker::PhoneNumber.phone_number }
    cpf { Faker::CPF.numeric }
    cns { Faker::Number.number(digits: 15) }
    status { [:active, :unactive].sample}
  end
end
