Rails.application.routes.draw do
  defaults format: :json do
    namespace :api do
      namespace :v1 do
        root 'app#index', controller: 'app'
      end
    end
  end
end
