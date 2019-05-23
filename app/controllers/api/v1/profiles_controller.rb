class Api::V1::ProfilesController < ApiController

  # POST
  def create
    new_profile = Profiles::Build.new(profile_params)

    if new_profile.call
      render json: { profile: new_profile },
      status: :created
    else
      render json: { errors: new_profile.errors },
      status: :unprocessable_entity
    end

  end

  # PATCH
  def verify_email

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
