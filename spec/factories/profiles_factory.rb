FactoryBot.define do
  factory :profile do
    firstname, lastname = Faker::Name.name.split.last(2)
    password = Faker::Internet.password(10, 20, true)

    username { Faker::Internet.username }
    firstname { firstname }
    lastname { lastname }
    email { Faker::Internet.safe_email }
    password { password }
    password_confirmation { password }
    confirmed_at { nil }
  end
end
