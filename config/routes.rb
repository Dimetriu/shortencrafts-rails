Rails.application.routes.draw do
  defaults format: :json do

    namespace :api do
      namespace :v1 do
        root 'app#all'

        resource :auth, only: [], controller: 'auth' do
          post :login
          get :logout
        end

        resources :profiles, only: [:create, :update]

        patch 'verify-email/:virifcation_token',
          to: 'profiles#verify_email',
          as: 'verify_email'
      end
    end
  end
end
