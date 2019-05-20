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

  # PATCH/PUT
  def update
    profile = Profile.find(params[:id])

    if profile.update_attributes(params_for_update)
      render json: { profile: profile },
      status: :updated
    else
      render json: { errors: profile.errors.messages },
      status: :unprocessable_entity
    end
  end

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

  def params_for_update
    params.permit(:firstname, :lastname)
  end
end
