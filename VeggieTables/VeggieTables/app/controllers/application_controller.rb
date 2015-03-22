class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :set_default_response_format
  before_filter :configure_permitted_parameters, if: :devise_controller?

private
  def set_default_response_format
    request_format = :json unless params[:format]
  end 

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) {|u| u.permit(:email, :password, :password_confirmation)} 
  end
    
  

end
