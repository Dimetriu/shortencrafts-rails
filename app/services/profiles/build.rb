# ./services/base_build.rb
class Profiles::Build < BaseBuild
  def initialize(resource = Profile, **options)
    super(resource, **options)
  end

  def call
    resource[:verification_token] = SecureRandom.uuid
    resource[:session_id] = SecureRandom.uuid
    # Saving Users profile if valid
    super
    # Logging in User if there aren't errors
    !resource.valid? &&
    resource.errors.messages ||
    JsonWebToken.encode(session_id: resource.session_id)
  end

end
