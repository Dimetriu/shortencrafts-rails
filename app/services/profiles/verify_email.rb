class Profiles::VerifyEmail
  class << self
    def call(profile)
      return profile.confirmed_at if profile.confirmed_at?

      profile.update_attributes(
        confirmed_at: DateTime.current
      )
    end
  end
end
