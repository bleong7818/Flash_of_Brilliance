# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                 api_users GET    /api/users(.:format)                                                                     api/users#index {:format=>:json}
#                           POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#                  api_user GET    /api/users/:id(.:format)                                                                 api/users#show {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#                 api_decks GET    /api/decks(.:format)                                                                     api/decks#index {:format=>:json}
#                           POST   /api/decks(.:format)                                                                     api/decks#create {:format=>:json}
#                  api_deck GET    /api/decks/:id(.:format)                                                                 api/decks#show {:format=>:json}
#                           PATCH  /api/decks/:id(.:format)                                                                 api/decks#update {:format=>:json}
#                           PUT    /api/decks/:id(.:format)                                                                 api/decks#update {:format=>:json}
#                           DELETE /api/decks/:id(.:format)                                                                 api/decks#destroy {:format=>:json}
#                 api_cards GET    /api/cards(.:format)                                                                     api/cards#index {:format=>:json}
#                           POST   /api/cards(.:format)                                                                     api/cards#create {:format=>:json}
#                  api_card GET    /api/cards/:id(.:format)                                                                 api/cards#show {:format=>:json}
#                           PATCH  /api/cards/:id(.:format)                                                                 api/cards#update {:format=>:json}
#                           PUT    /api/cards/:id(.:format)                                                                 api/cards#update {:format=>:json}
#                           DELETE /api/cards/:id(.:format)                                                                 api/cards#destroy {:format=>:json}
#            api_user_decks POST   /api/users/:user_id/decks(.:format)                                                      api/decks#create {:format=>:json}
#             api_user_deck GET    /api/users/:user_id/decks/:id(.:format)                                                  api/decks#show {:format=>:json}
#                           DELETE /api/users/:user_id/decks/:id(.:format)                                                  api/decks#destroy {:format=>:json}
#                           GET    /api/users(.:format)                                                                     api/users#index {:format=>:json}
#                           POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#              new_api_user GET    /api/users/new(.:format)                                                                 api/users#new {:format=>:json}
#             edit_api_user GET    /api/users/:id/edit(.:format)                                                            api/users#edit {:format=>:json}
#                           GET    /api/users/:id(.:format)                                                                 api/users#show {:format=>:json}
#                           PATCH  /api/users/:id(.:format)                                                                 api/users#update {:format=>:json}
#                           PUT    /api/users/:id(.:format)                                                                 api/users#update {:format=>:json}
#                           DELETE /api/users/:id(.:format)                                                                 api/users#destroy {:format=>:json}
#                      root GET    /                                                                                        static_pages#root
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index] 
    resource :session, only: [:create, :destroy]
    resources :decks, only: [:create, :index, :show, :destroy, :update] do 
      member do 
        get 'user_decks', to: "decks#user_decks" #api/decks/user_decks
        post 'add', to: "decks#add_to_user_decks" #api/decks/:deck_id/add
        delete 'delete', to: "decks#delete_from_user_decks" #api/decks/:deck_id/delete
      end
    end
    resources :cards, only: [:create, :index, :show, :destroy, :update]
    # resources :users do 
    #   resources :decks, only: [:create, :show, :destroy]
    # end
  end

  root "static_pages#root"
end
