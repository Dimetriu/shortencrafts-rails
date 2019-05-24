class AuthorizeApiRequest
  class << self
    def call(token)
      return token_invalid unless token

      payload = JsonWebToken.decode(token)
      id = payload[:profile_id] if payload

      begin
        Profile&.find(id)
      rescue
        nil
      end

    end
  end
end
