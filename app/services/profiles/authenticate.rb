class Profiles::Authenticate
  attr_reader :token, :failure

  def initialize(email = nil, password = nil)
    @email    = email
    @password = password
    @failure  ||= {}
  end

  def call
    produce_token
  end

  def success
    token && true || false
  end

  def profile
    @profile = Profile.find_by(email: email)&.authenticate(password)
  end

  private

  attr_reader :email, :password
  attr_writer :failure

  def produce_token
    return (failure[:credentials] = "Invalid credentials") unless profile

    @token = JsonWebToken.encode(profile_id: profile.id)
  end

end
