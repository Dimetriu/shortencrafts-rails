class AuthorizeApiRequest
  attr_reader :error

  def initialize(headers = {})
    @headers = headers
    @error ||= {}
  end

  def call
    profile
  end

  private

  attr_reader :headers
  attr_writer :error

  def profile

    if decoded_auth_token
      @_profile ||= Profile.find(decoded_auth_token[:session_key])
      return @_profile
    end

    error[:token] = "Token invalid"

    nil
  end

  def decoded_auth_token
    @decoded_auth_token = JsonWebToken.decode(http_auth_header)
  end

  def http_auth_header

    if headers['Authorization'].present?
      return headers['Authorization'].split(' ').last
    else
      nil
    end

  end
end
