class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_filter :set_default_response_format
  respond_to :html, :json

def after_sign_out_path_for(resource_or_scope)
  new_user_session_path 
end  

protected

  def
    devise_parameters_sanatizer.for{|u| u.permit(:login, :email, :password, :remember_me)} 
    devise_parameters_sanatizer.for{|u| u.permit(:email, :password, :password_confirmation, :remember_me)}
    devise_parameters_sanatizer.for(:account_update){|u| u.permit(:email, :password, :password_confirmation, :remember_me)}  
  end
end
