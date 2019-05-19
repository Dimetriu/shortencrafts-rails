Rails.application.routes.draw do
  defaults format: :json do
    namespace :api do
      namespace :v1 do
      end
    end
  end
end
