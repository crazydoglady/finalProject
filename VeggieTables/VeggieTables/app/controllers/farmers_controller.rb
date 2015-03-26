class FarmersController < ApplicationController
  before_action :set_farmer, only: [:show, :edit, :update, :destroy]

def index
  @farmers = Farmer.all
  respond_to do |format|
    format.json { render json: @farmers.to_json}
  end
end

def show
  respond_to do |format|
    format.json { render json: @farmer.to_json}
end

def create
end

def edit
end

def destroy
end

private

def farmer_params
  params.require(:farmers).permit(
    :name,
    :location,
    :email,
    :photo,
    :description,
    :fruits,
    :vegetables,
    :herbs,
    :squash,
    :taters
    )
end

def set_farmer
  @farmer = Farmer.find params[:id]
end

end