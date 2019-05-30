class ApplicationController < ActionController::API

  attr_reader :current_profile
  # Enables cookie storage
  include ::ActionController::Cookies
  include CookiesEncryptedJwt

  private

  def authenticate_request!
    refresh_jwt!

    begin
      @current_profile = AuthorizeApiRequest.call(get_jwt)
    rescue JWT::ExpiredSignature
      delete_jwt
      head :unauthorized
    end

  end
end
