Rails.application.routes.draw do
  resources :instruments
  resources :links
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
  get '/users/:user_id/pending_requests', to: "collab_requests#pending_index"
  get '/users/:user_id/recieved_requests', to: "collab_requests#recieved_index"
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
