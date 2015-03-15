class HomeController < ApplicationController
def index
  respond_to do |format|
    format.json {render json: @index.to_json}
  end
end
end
