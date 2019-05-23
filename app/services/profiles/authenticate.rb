class Profiles::Authenticate
  attr_reader :token, :error

  def initialize(**opts)
    @username = opts[:username]
    @email    = opts[:email]
    @password = opts[:password]
    @error  ||= {}
  end

  def call
    produce_token
  end

  def self.call(**opts)
    self.new(**opts).call
  end

  private

  attr_reader :username, :email, :password
  attr_writer :error

  def produce_token
    return (error[:credentials] = "Invalid credentials") unless profile

    profile.update_attributes(session_key: SecureRandom.uuid)

    @token = JsonWebToken.encode(session_key: profile.session_key)
  end

  def profile
    profile = Profile.find_by(username: username) ||
              Profile.find_by(email: email)

    @profile = profile&.authenticate(password)
  end
end
