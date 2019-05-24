class ApplicationController < ActionController::API

  attr_reader :profile
  # Enables cookie storage
  include ::ActionController::Cookies

  private

  def cookie_signed_jwt(jwt)
    cookies.signed[:jwt] = {
        value: jwt,
        httponly: true
      }
  end

  def authenticate_request!
    jwt = cookies.signed[:jwt]
    return head :unauthorized unless jwt

    begin
      @profile = AuthorizeApiRequest.call(jwt)
    rescue => JWT::ExpiredSignature
      cookies.delete(:jwt)
      head :unauthorized
    end

  end
end
