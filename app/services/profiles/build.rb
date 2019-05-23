# ./services/base_build.rb
class Profiles::Build < BaseBuild
  def initialize(resource = Profile, **options)
    super(resource, **options)
  end

  def call
    resource[:verification_token] = SecureRandom.uuid
    # Saving Users profile if valid
    super
    # Logging in User if there aren't errors
    !resource.valid? &&
    resource.errors.messages ||
    JsonWebToken.encode(session_key: resource.session_key)
  end
end
