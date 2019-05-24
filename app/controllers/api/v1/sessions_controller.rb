class Api::V1::SessionsController < ApplicationController

  # POST
  def create
    new_session = Profiles::Authenticate.new(sign_in_params)

    if new_session&.token
      cookie_signed_jwt(new_session.token)

      render json: profile, status: :ok
    else
      render json: { error: new_session.error },
      status: :unauthorized
    end

  end

  def destroy
    cookies.delete(:jwt)
  end

  private

  def sign_in_params
    params.permit(:username, :email, :password)
  end

  def profile
    id = JsonWebToken.decode(cookies.signed[:jwt])[:profile_id]

    Profile.find(id)
  end
end
