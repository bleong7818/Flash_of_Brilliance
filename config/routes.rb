Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :decks, only: [:create, :index, :show, :destroy, :update]
    resources :users do 
      resources :decks, only: [:create, :show, :destroy]
    end
  end

  root "static_pages#root"
end
