class ProfilesController < ApplicationController

def index
end

def create
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
