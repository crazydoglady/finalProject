class ProfilesController < ApplicationController

def index
end

def new
  @profile = Profile.new
end
def create
  @register = Register.all
  @profile = Profile.create 
  respond_to do |format|  
    if @profile.save
      format.html {redirect_to new_register_path, notice: 'Created Profile'}
      format.json {render json: @profile, status: :created, location: @profile}
    else 
      format.html { render action: 'new' }
      format.json { render json: @profile.errors, status: :unprocessable_entity}
    end
  end
end
def show
end

def edit
end

def destroy
end

private

def profile_params
  params.require(:profiles).permit(
    :type,
    :address,
    :city,
    :state,
    :zipcode,
    :email,
    :name
    )
end
end
