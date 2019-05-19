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

  def verify_email!
    return self[:confirmed_at] if self[:confirmed_at]
    self.update_attributes(confirmed_at: DateTime.current)
  end

  def verified?
    self[:confirmed_at] && true || false
  end
end
