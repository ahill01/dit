Rails.application.routes.draw do
  resources :conversations do
    resources :messages
  end
  resources :users
  
  get '/conversations/:user_id', to: "conversations#user_index"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  get '/me', to: "users#show"

  patch '/messages/:id/read', to: "messages#read"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
