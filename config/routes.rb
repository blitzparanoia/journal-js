Rails.application.routes.draw do
  resources :users

  resources :entries do
    resources :comments
  end

  root "sessions#home"

  #signup
  get '/signup' => 'users#new'
  post '/signup' => 'users#create'
  #sessions
get '/login' => 'sessions#new'
post '/login' => 'sessions#create'
delete '/logout' => 'sessions#destroy'

end
