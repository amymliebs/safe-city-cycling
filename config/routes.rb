Rails.application.routes.draw do
  root 'static_pages#index'
  get '/cities', to: 'static_pages#index'
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :cities, only: [:index]
    end
  end
end
