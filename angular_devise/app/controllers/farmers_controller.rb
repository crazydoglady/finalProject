class FarmersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_farmer, only: [:show, :edit, :update, :delete]

def index
  @farmers = Farmer.all
  respond_to do |format|
    format.json {render json: @farmers.to_json}
  end
end

def new
  @farmer = Farmer.new farmer_params
    format.json {render json: farmers.to_json}
end

def create
  @farmer = Farmer.create(farmer_params)

  respond_to do |format|
    if @farmer.save
      format.html{redirect_to @farmer, notice: "Farm successfully created"}
      format.json{render :show, status: :created, location: @farmer}
    else
      format.html {render :new}
      format.json(render json: @farmer.errors, status: :unprocessable_entity)
end

def show
end

def edit
end

def update
  @farmer = Farmer.find params[:id]
end

def destroy
  respond_to do |format|
    format.json {render json: @farmer.to_json}
  end
end

  private
  def set_farmer
    @farmer = farmer.id(params[:id])
  end

  def farmer_params
    params.require(:farmer).permit(
      :name,
      :city,
      )
end
