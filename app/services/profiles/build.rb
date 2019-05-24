# ./services/base_build.rb
class Profiles::Build < BaseBuild
  attr_reader :token

  def initialize(resource = Profile, **options)
    super(resource, **options)
  end

  def call
    resource[:verification_token] = SecureRandom.uuid
    # Saving Users profile if valid
    super
    # Logging in User if there aren't errors
    @token = !resource.valid? &&
             resource.errors.messages ||
             JsonWebToken.encode(profile_id: resource.id)

    resource
  end
end
