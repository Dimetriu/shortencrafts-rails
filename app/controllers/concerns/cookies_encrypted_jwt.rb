module CookiesEncryptedJwt
  # Refreshes the encrypted cookies
  def refresh_jwt!
    jwt = cookies.encrypted[:jwt]
    cookies.delete(:jwt)
    set_jwt(jwt)
  end

  def set_jwt(value)
    cookies.encrypted[:jwt] = {
      value: value,
      httponly: true
    }
  end

  def get_jwt
    cookies.encrypted[:jwt]
  end

  def delete_jwt
    cookies.delete(:jwt)
  end
end
