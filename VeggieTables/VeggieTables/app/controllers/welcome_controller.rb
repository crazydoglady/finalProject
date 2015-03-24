class WelcomeController < ApplicationController
  def index
  end

  def is_admin
    respond_to do |format|
      format.json { render json: current_user.admin.to_json }
    end
  end
end 
