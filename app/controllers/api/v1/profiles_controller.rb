class Api::V1::ProfilesController < ApplicationController

  # POST
  def create
    # new_profile = Profiles::Build.new(profile_params)
    # new_profile.call

    # if new_profile.token
    #   cookie_signed_jwt(new_profile.token)

    #   render json: { profile: new_profile },
    #   status: :created
    # else
    #   render json: { errors: new_profile.errors },
    #   status: :unprocessable_entity
    # end

    profile = Profile.create(profile_params)
    render json: profile

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
