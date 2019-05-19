class Api::V1::AppController < ApiController
  # Root
  def index
    render json: { hi: "Hello world" }
  end
end
