Rails.application.routes.draw do
  resources :users

  resources :entries do
    resources :comments
  end

  root "entries#index"

end
