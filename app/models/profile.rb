class Profile < ApplicationRecord
  has_secure_password

  validates :username,
    presence: true,
    length: { in: 3..25 }

  validates :email,
    presence: true,
    email: true,
    uniqueness: true

  validates :password_digest, presence: true
end
