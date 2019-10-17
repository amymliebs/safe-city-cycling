require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    first_name { 'first_name' }
    last_initial { 'last_initial' }
    password { 'password' }
    password_confirmation { 'password' }
  end

end
