class Api::V1::SessionsController < ApplicationController

  # POST
  def sign_in
    session = Profiles::Authenticate.call(sign_in_params)

    if session.token
      render json: { auth_token: session.token }
    else
      render json: { error: session.error }, status: :unauthorized
    end

  end

  # Patch
  def sign_out

  end

  private

  def sign_in_params
    params.permit(:email, :password)
  end
end
