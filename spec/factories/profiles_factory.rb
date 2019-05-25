FactoryBot.define do
  factory :profile do
    password = Faker::Internet.password(10, 20, true)

    username { Faker::Internet.username(3) }
    email { Faker::Internet.safe_email }
    password { password }
    password_confirmation { password }
    confirmed_at { nil }
  end

  # factory :invalid_profile do
  #   username { '' }
  #   email { '' }
  #   password { '' }
  #   password_confirmation { '' }
  # end
end
