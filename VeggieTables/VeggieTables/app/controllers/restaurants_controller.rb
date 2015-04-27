class RestaurantsController < ApplicationController
  def index
  end

  def getRest
  end
  def create
  end

  def edit
  end

  def destroy 
  end

private

  def restaurant_params
    params.require(:restaurant).permit(
      :name,
      :location,
      :email,
      :photo,
      :website,
      :description
      )

  end

end
