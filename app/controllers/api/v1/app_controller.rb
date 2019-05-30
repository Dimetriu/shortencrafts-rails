class Api::V1::AppController < ApplicationController
  before_action :authenticate_request!

  # Root
  def all
    render json: { profile: current_profile }
  end
end
