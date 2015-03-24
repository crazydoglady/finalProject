class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :set_default_response_format
  before_filter :configure_permitted_parameters, if: :devise_controller?

  rescue_from CanCan::AccessDenied do |exception|
    flash[:error] = "Access Denied!"
    redirect_to root_path
  end

  def check_admin_state
    if  current_user.admin?
      yield
    else
      flash[:error] = "Permission Denied"
      redirect_to root_path
    end
  end

  def check_website_admin_state
    if current_user.website_admin?
      yield
    else
      flash[:error] = "Permission Denied"
      redirect_to root_path
    end
  end
private
  def set_default_response_format
    request_format = :json unless params[:format]
  end 

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) {|u| u.permit(:email, :password, :password_confirmation, :roles[])} 
    devise_parameter_sanitizer.for(:account_update) << :admin
  end
    
  

end
