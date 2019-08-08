Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :photos, only: [:show, :create, :destroy, :edit, :update, :index]
    resources :likes, only: [:create, :destroy, :index]
    resources :comments, only: [:create, :index, :edit, :destroy]
    resource :session, only: [:create, :destroy]
  end

end
