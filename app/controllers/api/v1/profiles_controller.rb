class Api::V1::ProfilesController < ApplicationController
  # POST
  def create
    profile = Profile.new(profile_params)

    if profile.save!
      jwt = JsonWebToken.encode(profile_id: profile.id)

      cookies.signed[:jwt] = {
        value: jwt,
        httponly: true
      }

      render json: profile, status: :created
    else
      render json: profiles.errors.messages,
      status: :unprocessable_entity
    end

  end

  # PATCH
  def verify_email

  end

  private

  def profile_params
    params.require(:profile).permit(
      :username,
      :email,
      :password,
      :password_confirmation
    )
  end

end
