class JsonWebToken
  class << self
    def encode(payload, exp = 24.hours.from_now)
      payload[:exp] = exp.to_i
      JWT.encode(payload, ENV['SECRET_KEY_BASE'], 'HS512')
    end

    def decode(token)
      body = JWT.decode(
        token,
        ENV['SECRET_KEY_BASE'],
        true,
        { algorithm: 'HS512' }
      ).first

      HashWithIndifferentAccess.new(body)
    rescue
      nil
    end
  end
end
