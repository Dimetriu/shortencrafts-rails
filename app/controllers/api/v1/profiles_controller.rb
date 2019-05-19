class Api::V1::ProfilesController < ApiController

  # POST
  def create
    # profile = Profiles::Build.new(profile_params)
  end

  private

  def profile_params
    params.permit(
      :username,
      :email,
      :password,
      :password_confirmation
    )
  end
end
