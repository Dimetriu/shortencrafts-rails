class Api::V1::AuthController < ApplicationController
  # POST
  def login
    new_session = Profiles::Authenticate.new(
      params[:email],
      params[:password]
    )

    new_session.call

    if new_session.success
      set_jwt(new_session.token)

      render json: { profile: new_session.profile },
      status: :ok
    else
      render json: { error: new_session.failure },
      status: :unauthorized
    end

  end

  # GET
  def logout
    delete_jwt
    return head(:no_content)
  end

end
