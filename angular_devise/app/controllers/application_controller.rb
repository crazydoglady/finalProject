class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
 
  respond_to :html, :json

def after_sign_out_path_for(resource_or_scope)
  new_user_session_path 
end  


end
