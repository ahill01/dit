Rails.application.routes.draw do
  resources :links
  resources :instruments
  resources :conversations, shallow: true do 
    resources :messages
  end
  resources :users, shallow: true do 
    resources :collab_requests
    resources :collabs
  end
  
  get '/conversations/userindex/:user_id', to: "conversations#user_index"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  get '/me', to: "users#show_loggedin_user"
  patch '/messages/:id/read', to: "messages#read"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
