Rails.application.routes.draw do
  resources :urls
  root 'home#index'
  get  "/report", to: "home#index"
  get '/:id' => "urls#redirect" 

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
end
