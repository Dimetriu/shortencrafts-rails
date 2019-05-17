class Profiles::Authenticate
  attr_reader :token, :error

  def initialize(email:, password:)
    @email    = email
    @password = password
    @error  ||= {}
  end

  def call
    produce_token
  end

  private

  attr_reader :email, :password
  attr_writer :error

  def produce_token
    return (error[:credentials] = "Invalid credentials") unless profile

    profile.update_attributes(session_id: SecureRandom.uuid)

    @token = JsonWebToken.encode(session_id: profile.session_id)
  end

  def profile
    @profile = Profile.find_by(email: email)&.authenticate(password)
  end
end
